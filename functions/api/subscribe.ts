interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;
    
    // Obtener email del body
    let email: string;
    try {
      const data = await request.json();
      email = data.email;
    } catch {
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

    // Enviar email de confirmación al usuario usando Resend API
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
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
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <tr>
                      <td style="background: linear-gradient(135deg, #1C1C1C 0%, #3a3a3a 100%); padding: 40px 40px 60px; border-radius: 16px 16px 0 0; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: -0.5px;">
                          ☕ Bienvenido a Drippia
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px;">
                        <h2 style="margin: 0 0 20px; color: #1C1C1C; font-size: 24px; font-weight: 600;">
                          ¡Gracias por registrarte!
                        </h2>
                        <p style="margin: 0 0 16px; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                          Estás oficialmente en la lista de espera para acceder a la <strong>beta exclusiva de Drippia</strong>.
                        </p>
                        <p style="margin: 24px 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                          Cupos limitados disponibles. Te contactaremos pronto.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 30px 40px; background-color: #f9f9f9; border-radius: 0 0 16px 16px; text-align: center;">
                        <p style="margin: 0 0 8px; color: #1C1C1C; font-size: 14px; font-weight: 600;">
                          El equipo de Drippia
                        </p>
                      </td>
                    </tr>
                  </table>
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
