export default defineEventHandler(async (event) => {
    const method = event.node.req.method;
    const config = useRuntimeConfig();
    // Puedes guardar tu token de verificación secreto en el .env (ej. WHATSAPP_VERIFY_TOKEN)
    const VERIFY_TOKEN = config.whatsappVerifyToken || 'gfk_token_secreto_2026';
  
    // 1. MANEJO DEL GET (Verificación inicial de Meta / Facebook Developers)
    if (method === 'GET') {
      const query = getQuery(event);
      
      const mode = query['hub.mode'];
      const token = query['hub.verify_token'];
      const challenge = query['hub.challenge'];
  
      if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
          console.log('✅ WEBHOOK_VERIFIED: El Webhook de WhatsApp fue verificado con éxito por Meta.');
          // Meta exige que respondamos únicamente con el challenge en texto plano
          return send(event, challenge);
        } else {
          throw createError({
            statusCode: 403,
            statusMessage: 'Falla de verificación: El token de Meta no coincide.',
          });
        }
      }
  
      throw createError({
        statusCode: 400,
        statusMessage: 'Solicitud GET inválida para el Webhook.',
      });
    }
  
    // 2. MANEJO DEL POST (Entrada de mensajes y eventos de WhatsApp)
    if (method === 'POST') {
      const body = await readBody(event);
  
      try {
        // Verificamos que sea un evento de la API de WhatsApp
        if (body.object === 'whatsapp_business_account') {
          for (const entry of body.entry) {
            for (const change of entry.changes) {
              const value = change.value;
              
              // Si trae mensajes entrantes
              if (value && value.messages && value.messages.length > 0) {
                const message = value.messages[0];
                const senderPhone = message.from; // Número del cliente (ej. 5233XXXXXXXX)
                const messageText = message.text?.body; // Texto que escribió el usuario
                const messageId = message.id;
  
                console.log(`📩 MENSAJE RECIBIDO DE [${senderPhone}]: "${messageText}" (ID: ${messageId})`);
  
                // 💡 AQUÍ INTEGRARÁS LA LÓGICA DE TU BOT:
                // - Consultar si el número ya existe en tu base / HubSpot.
                // - Disparar una respuesta automática según la intención del cliente.
              }
            }
          }
  
          // Meta siempre espera un status 200 OK rápido para confirmar recepción
          return { status: 'EVENT_RECEIVED' };
        }
  
        return { status: 'IGNORED_EVENT' };
  
      } catch (error: any) {
        console.error('❌ ERROR PROCESANDO WEBHOOK DE WHATSAPP:', error);
        throw createError({
          statusCode: 500,
          statusMessage: 'Error interno procesando el webhook',
        });
      }
    }
  
    throw createError({
      statusCode: 405,
      statusMessage: 'Método no permitido',
    });
  });