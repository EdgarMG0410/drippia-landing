import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    let email: string;
    
    // Intentar obtener el email del body
    try {
      const data = await request.json();
      email = data.email;
    } catch {
      // Si falla JSON, intentar con FormData
      const formData = await request.formData();
      email = formData.get('email') as string;
    }

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: 'beta@drippia.app',
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
                  
                  <!-- Header con gradiente -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1C1C1C 0%, #3a3a3a 100%); padding: 40px 40px 60px; border-radius: 16px 16px 0 0; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: -0.5px;">
                        ☕ Bienvenido a Drippia
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Contenido principal -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 20px; color: #1C1C1C; font-size: 24px; font-weight: 600;">
                        ¡Gracias por registrarte!
                      </h2>
                      
                      <p style="margin: 0 0 16px; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                        Estás oficialmente en la lista de espera para acceder a la <strong>beta exclusiva de Drippia</strong>.
                      </p>
                      
                      <p style="margin: 0 0 16px; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                        Te notificaremos por email cuando tu acceso esté listo. Mientras tanto, prepárate para:
                      </p>
                      
                      <table role="presentation" style="width: 100%; margin: 24px 0;">
                        <tr>
                          <td style="padding: 16px; background-color: #f9f9f9; border-radius: 8px; margin-bottom: 12px;">
                            <p style="margin: 0; color: #1C1C1C; font-size: 15px;">
                              <strong>✨ Dominar el arte del café</strong><br>
                              <span style="color: #666; font-size: 14px;">Guías paso a paso para cada método de preparación</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px; background-color: #f9f9f9; border-radius: 8px; margin-bottom: 12px;">
                            <p style="margin: 0; color: #1C1C1C; font-size: 15px;">
                              <strong>🤖 Tu asistente personal de café</strong><br>
                              <span style="color: #666; font-size: 14px;">Recomendaciones personalizadas con IA</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
                            <p style="margin: 0; color: #1C1C1C; font-size: 15px;">
                              <strong>📊 Lleva un registro completo</strong><br>
                              <span style="color: #666; font-size: 14px;">Documenta y mejora cada preparación</span>
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="margin: 24px 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                        Cupos limitados disponibles. Te contactaremos pronto.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f9f9f9; border-radius: 0 0 16px 16px; text-align: center;">
                      <p style="margin: 0 0 8px; color: #1C1C1C; font-size: 14px; font-weight: 600;">
                        El equipo de Drippia
                      </p>
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        Preparando el futuro del café, una taza a la vez
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
    });

    // Enviar notificación al equipo
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'edgar@innovatio.dev',
      subject: '🎯 Nuevo registro para Beta de Drippia',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #1C1C1C; padding: 24px 32px; border-radius: 12px 12px 0 0;">
                      <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">
                        ☕ Nuevo registro para la Beta
                      </h2>
                    </td>
                  </tr>
                  
                  <!-- Contenido -->
                  <tr>
                    <td style="padding: 32px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                            <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Email
                            </p>
                            <p style="margin: 4px 0 0; color: #1C1C1C; font-size: 16px; font-weight: 600;">
                              ${email}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                            <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Fecha y hora
                            </p>
                            <p style="margin: 4px 0 0; color: #1C1C1C; font-size: 16px;">
                              ${new Date().toLocaleString('es-MX', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <p style="margin: 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
                              Origen
                            </p>
                            <p style="margin: 4px 0 0; color: #1C1C1C; font-size: 16px;">
                              Landing Page - Formulario Beta
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="margin-top: 24px; padding: 16px; background-color: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 4px;">
                        <p style="margin: 0; color: #0c4a6e; font-size: 14px;">
                          <strong>💡 Acción sugerida:</strong> Agregar a la lista de beta testers y enviar acceso cuando esté disponible.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 32px; background-color: #f9f9f9; border-radius: 0 0 12px 12px; text-align: center;">
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        Notificación automática de Drippia Landing
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
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Registro exitoso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error al procesar registro:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar el registro' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
