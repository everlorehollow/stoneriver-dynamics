import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "../../../../site.config";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(200),
  company: z.string().max(200).optional().default(""),
  phone: z.string().max(40).optional().default(""),
  message: z.string().max(5000).optional().default(""),
  website: z.string().optional().default(""), // honeypot
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  // Honeypot — silently succeed without sending
  if (parsed.data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please contact us directly." },
      { status: 500 },
    );
  }

  const { name, email, company, phone, message } = parsed.data;
  const recipient = siteConfig.contact.formRecipient;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `${siteConfig.businessName} Website <contact@updates.stoneriverdynamics.com>`;
  const messageBlock = message?.trim() || "(no message provided)";

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "StoneRiverDynamics/1.0",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `New contact form submission from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "—"}`,
          `Phone: ${phone || "—"}`,
          ``,
          `Message:`,
          messageBlock,
        ].join("\n"),
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px;">
            <h2 style="color: #133963;">New website inquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Company:</strong> ${escapeHtml(company) || "—"}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone) || "—"}</p>
            <p style="margin-top: 1.5em;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f5f5f7; padding: 1em; border-left: 3px solid #133963;">${escapeHtml(messageBlock)}</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.json().catch(() => null);
      console.error("Contact form Resend error:", {
        status: resendResponse.status,
        error: getResendErrorMessage(errorBody),
      });
      return NextResponse.json(
        { error: "Failed to send. Please try again or email us directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email us directly." },
      { status: 500 },
    );
  }
}

function getResendErrorMessage(errorBody: unknown): string | undefined {
  if (
    errorBody &&
    typeof errorBody === "object" &&
    "message" in errorBody &&
    typeof errorBody.message === "string"
  ) {
    return errorBody.message;
  }
  return undefined;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
