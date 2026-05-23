"use client";

import { useState } from "react";

interface ContactFormProps {
  headline: string;
  subheadline: string;
  email: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ headline, subheadline, email }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-5xl md:text-6xl text-[#133963] uppercase">
            {headline}
          </h2>
          <p className="mt-4 text-[#133963]/75">{subheadline}</p>
        </div>

        {status === "success" ? (
          <div className="bg-[#f5f5f7] border-l-4 border-[#133963] p-8 text-center">
            <p className="font-display text-3xl text-[#133963] uppercase mb-2">
              Thank you
            </p>
            <p className="text-[#133963]/80">
              We&rsquo;ve received your message and will be in touch within one
              business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* honeypot — hidden from users, bots fill it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>

            <Field label="Company" name="company" type="text" />

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-widest text-[#133963]/70 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-[#f5f5f7] border border-[#133963]/15 text-[#133963] focus:border-[#133963] focus:outline-none focus:ring-2 focus:ring-[#133963]/20 transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 text-sm text-red-800">
                {errorMessage}
                {errorMessage.toLowerCase().includes("not configured") && (
                  <span className="block mt-1 text-red-700/80">
                    You can also email us directly at{" "}
                    <a
                      href={`mailto:${email}`}
                      className="underline"
                    >
                      {email}
                    </a>
                    .
                  </span>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#133963] text-white font-semibold tracking-wide uppercase text-sm hover:bg-[#0c2845] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-[#133963]/50 mt-4">
              Prefer email? Reach us at{" "}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-widest text-[#133963]/70 mb-2"
      >
        {label}
        {required && <span className="text-[#133963]/40"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 bg-[#f5f5f7] border border-[#133963]/15 text-[#133963] focus:border-[#133963] focus:outline-none focus:ring-2 focus:ring-[#133963]/20 transition-colors"
      />
    </div>
  );
}
