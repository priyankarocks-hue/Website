import { NextResponse } from "next/server";
import { Resend } from "resend";

// PLACEHOLDER INTEGRATION — set RESEND_API_KEY and CONTACT_TO_EMAIL in your
// environment before launch. Without a key, this route logs submissions
// instead of sending email, so local development still works end to end.
const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL ?? "you@example.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, reason, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!resendApiKey) {
    console.log("[contact] Resend not configured — logging submission instead:", {
      name,
      email,
      reason,
      message,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New ${reason ?? "inquiry"} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason ?? "n/a"}\n\n${message}`,
    });
    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }
}
