import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

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
      from: 'onboarding@resend.dev',
      to: email,
      subject: '¡Bienvenido a la Beta de Drippia! ☕',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1C1C1C;">¡Gracias por registrarte!</h1>
          <p>Estás en la lista de espera para acceder a la beta exclusiva de Drippia.</p>
          <p>Te notificaremos cuando esté lista. Mientras tanto, prepárate para llevar tu café al siguiente nivel.</p>
          <p style="color: #666; font-size: 14px;">- El equipo de Drippia</p>
        </div>
      `
    });

    // Enviar notificación al equipo
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'edgar@innovatio.dev',
      subject: 'Nuevo registro para Beta de Drippia',
      html: `
        <div style="font-family: sans-serif;">
          <h2>Nuevo registro para la beta</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX')}</p>
        </div>
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
