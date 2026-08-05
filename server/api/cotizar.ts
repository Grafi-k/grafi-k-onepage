export default defineEventHandler(async (event) => {
  // 1. Leemos el cuerpo de la petición que mandó Vue
  const body = await readBody(event);

  // 2. Leemos la variable desde runtimeConfig de Nuxt
  const config = useRuntimeConfig();
  const token = config.hubspotAccessToken;

  if (!token) {
    console.error('❌ ERROR: HUBSPOT_ACCESS_TOKEN no encontrado en el .env');
    throw createError({
      statusCode: 500,
      statusMessage: 'Falta configurar el Token de HubSpot en el .env',
    });
  }

  // 3. Validamos si viene del formulario de contacto o del cotizador
  const esContactoSimple = body?.origen === 'contacto';

  const mensajeHubSpot = esContactoSimple
    ? `[MENSAJE DIRECTO DE CONTACTO]\n\n• Mensaje: ${body?.detalles || 'Sin mensaje'}`
    : `[COTIZACIÓN CALIFICADA HIGH-TICKET]\n\n• Brief del cliente: ${body?.brief || 'Sin brief'}`;

  // 4. Armamos la estructura base para HubSpot
  const properties: Record<string, string> = {
    email: body?.email,
    firstname: body?.nombre || 'Contacto Web',
    message: mensajeHubSpot,
  };

  // Teléfono (Validación limpia)
  const telefonoCliente = body?.whatsapp?.trim() || '';
  if (telefonoCliente !== '') {
    properties.phone = telefonoCliente;
  }

  // 5. Propiedades personalizadas estructuradas
  if (!esContactoSimple) {
    properties.gfk_tipo_servicio = body?.tipo || 'No especificado';
    properties.gfk_paquete = body?.presupuesto || 'No especificado';
    properties.gfk_urgencia = body?.urgencia || 'No especificado';
  }

  // --- INTENTO 1: ENVIAR A HUBSPOT ---
  try {
    const response = await $fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.trim()}`,
        'Content-Type': 'application/json',
      },
      body: { properties },
    });

    console.log('✅ CONTACTO ENVIADO A HUBSPOT CON ÉXITO:', response);
  } catch (error: any) {
    const hubspotErrorDetails = error?.data?.message || error?.message || error;
    console.error('❌ ERROR HUBSPOT API:', hubspotErrorDetails);
    
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: `Error al conectar con HubSpot: ${hubspotErrorDetails}`,
    });
  }

  // --- 6. LA MAGIA NEGRA: Disparar el GFK-Bot por WhatsApp 📱💥 ---
  // Solo se dispara si el cliente puso un número de teléfono válido
  if (telefonoCliente !== '') {
    const whatsappToken = process.env.WHATSAPP_TOKEN || config.whatsappToken;
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID || config.whatsappPhoneId;

    try {
      const nombreCliente = body?.nombre || 'Crack';
      const servicioSolicitado = body?.tipo || 'Desarrollo Web';

      await $fetch(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: {
          messaging_product: 'whatsapp',
          to: telefonoCliente,
          type: 'text',
          text: {
            body: `¡Qué tal, ${nombreCliente}! 👋 Te saluda GFK-Bot, el asistente inteligente de Grafi-k Digital Web. Veo que te interesa una cotización de *${servicioSolicitado}*. ¿Le damos forma al proyecto de una vez o tienes alguna duda técnica, crack? 🚀`
          }
        }
      });
      console.log('✅ GFK-BOT DISPARADO CON ÉXITO A:', telefonoCliente);
    } catch (whatsappError) {
      console.error('⚠️ Error enviando WhatsApp automático (el form sí pasó a HubSpot):', whatsappError);
    }
  }

  return {
    success: true,
    message: 'Cotización registrada en HubSpot y GFK-Bot disparado con éxito'
  };
});