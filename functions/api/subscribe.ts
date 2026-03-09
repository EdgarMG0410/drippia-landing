interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;
    
    // Obtener email del body
    let email: string;
    try {
      const body = await request.text();
      const data = JSON.parse(body);
      email = data.email;
    } catch (e) {
      console.error('Error parsing request:', e);
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verificar que existe la API key
    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar email de confirmación al usuario usando Resend API
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: "Drippia <onboarding@resend.dev>",
        to: email,
        subject: '¡Bienvenido a la Beta de Drippia! ☕',
        html: `
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenido a Drippia</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%);">
            <table role="presentation" style="width: 100%; border-collapse: collapse; min-height: 100vh;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; background: linear-gradient(135deg, #1C1C1C 0%, #2a2a2a 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1);">
                    <!-- Logo y Header -->
                    <tr>
                      <td style="padding: 50px 40px 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                        <img src="https://drippia.edgar-e33.workers.dev/assets/logowhite.svg" alt="Drippia" style="height: 60px; width: auto; margin-bottom: 20px;" />
                        <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: 300; letter-spacing: -1px;">
                          Bienvenido a Drippia
                        </h1>
                      </td>
                    </tr>
                    <!-- Contenido Principal -->
                    <tr>
                      <td style="padding: 50px 40px;">
                        <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 28px; font-weight: 300; line-height: 1.3;">
                          Prepara café<br/>excepcional
                        </h2>
                        <p style="margin: 0 0 20px; color: rgba(255, 255, 255, 0.9); font-size: 18px; line-height: 1.7;">
                          Estás oficialmente en la <strong style="color: #ffffff;">lista de espera</strong> para acceder a la beta exclusiva de Drippia.
                        </p>
                        <p style="margin: 0 0 20px; color: rgba(255, 255, 255, 0.7); font-size: 16px; line-height: 1.6;">
                          Tu compañero personal para dominar el arte del café de especialidad. Guías paso a paso que extraen el máximo potencial de cada grano.
                        </p>
                        <!-- Badge de Beta -->
                        <div style="margin: 30px 0; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                          <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 14px; text-align: center;">
                            ☕ <strong style="color: #ffffff;">Cupos limitados</strong> • Te contactaremos pronto
                          </p>
                        </div>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px 40px; background: rgba(0, 0, 0, 0.3); border-radius: 0 0 24px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.9); font-size: 15px; font-weight: 300;">
                          El equipo de Drippia
                        </p>
                        <p style="margin: 0; color: rgba(255, 255, 255, 0.4); font-size: 13px;">
                          Innovando el arte del café
                        </p>
                      </td>
                    </tr>
                  </table>
                  <!-- Texto legal pequeño -->
                  <p style="margin: 30px 0 0; color: rgba(255, 255, 255, 0.3); font-size: 12px; text-align: center; max-width: 500px;">
                    Recibiste este correo porque te registraste para la beta de Drippia.
                  </p>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `
      })
    });

    if (!userEmailResponse.ok) {
      throw new Error('Failed to send user email');
    }

    // Enviar notificación al equipo
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'edgar@innovatio.dev',
        subject: '🎯 Nuevo registro para Beta de Drippia',
        html: `
          <!DOCTYPE html>
          <html lang="es">
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
            <h2>☕ Nuevo registro para la Beta</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX')}</p>
          </body>
          </html>
        `
      })
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Registro exitoso' }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  } catch (error) {
    console.error('Error al procesar registro:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar el registro' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
