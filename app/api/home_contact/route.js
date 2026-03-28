import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "eesharsolutions@gmail.com",
      subject: "New Contact Request",
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

   return Response.json({ success: true });
  } catch (error) {
   return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}