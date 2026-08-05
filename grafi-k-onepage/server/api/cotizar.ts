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
      statusMessage: 'Falta configurar el Token en el .env',
    });
  }

  // 3. Validamos si viene del formulario de contacto o del cotizador
  const esContactoSimple = body?.origen === 'contacto';

  const mensajeHubSpot = esContactoSimple
    ? `[MENSAJE DIRECTO DE CONTACTO]\n\n• Mensaje: ${body?.detalles || 'Sin mensaje'}`
    : `[COTIZACIÓN CALIFICADA HIGH-TICKET]\n\n• Servicio: ${body?.tipo || 'No especificado'}\n• Paquete: ${body?.presupuesto || 'No especificado'}\n• Urgencia: ${body?.urgencia || 'No especificado'}\n• Brief: ${body?.brief || 'Sin brief'}`;

  // 4. Armamos la estructura para HubSpot
  const properties: Record<string, string> = {
    email: body?.email,
    firstname: body?.nombre || 'Contacto Web',
    message: mensajeHubSpot,
  };

  if (body?.whatsapp && body.whatsapp.trim() !== '') {
    properties.phone = body.whatsapp;
  }

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
    return { success: true, data: response };

  } catch (error: any) {
    console.error('❌ ERROR HUBSPOT API:', error?.data || error?.message || error);
    
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.data?.message || 'Error al conectar con el CRM de HubSpot',
    });
  }
});