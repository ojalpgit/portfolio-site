import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ojalprasad@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;background:#0f0f0f;color:#e0e0e0;border-radius:12px;">
          <h2 style="color:#4d96ff;margin-top:0;">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:80px;">Name</td><td style="padding:8px 0;color:#fff;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#4d96ff;">${email}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #222;margin:16px 0;" />
          <p style="color:#888;margin-bottom:8px;font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Message</p>
          <p style="color:#e0e0e0;line-height:1.7;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
