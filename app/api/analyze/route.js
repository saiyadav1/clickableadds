import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { website, email } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "eesharsolutions@gmail.com",
      subject: "New SEO Analysis Request",
      html: `
        <h2>New Analysis Request</h2>
        <p><b>Website:</b> ${website}</p>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}