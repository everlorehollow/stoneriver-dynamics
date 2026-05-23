"use client";

import Link from "next/link";
import { useState } from "react";

interface ContactFormProps {
  headline: string;
  subheadline: string;
  email: string;
  variant?: "short" | "full";
  fullPageLinkLabel?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  headline,
  subheadline,
  email,
  variant = "short",
  fullPageLinkLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isFull = variant === "full";

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
      phone: String(data.get("phone") ?? ""),
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

  if (status === "success") {
    return (
      <div className="bg-[#f5f5f7] border-l-4 border-[#133963] p-8 text-center">
        <p className="font-display text-3xl text-[#133963] uppercase mb-2">
          Thank you
        </p>
        <p className="text-[#133963]/80">
          We&rsquo;ve received your message and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
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

      <Field
        label="Name"
        name="name"
        type="text"
        required
        placeholder={isFull ? "First name" : undefined}
      />

      <Field
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder={isFull ? "example@company.com" : undefined}
      />

      {isFull && (
        <>
          <Field label="Company" name="company" type="text" />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="999-999-9999"
          />
        </>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold uppercase tracking-widest text-[#133963]/70 mb-2"
        >
          Message{!isFull && <span className="text-[#133963]/40"> *</span>}
        </label>
        <textarea
          id="message"
          name="message"
          rows={isFull ? 5 : 4}
          required={!isFull ? true : false}
          className="w-full px-4 py-3 bg-[#f5f5f7] border border-[#133963]/15 text-[#133963] focus:border-[#133963] focus:outline-none focus:ring-2 focus:ring-[#133963]/20 transition-colors"
          placeholder="Tell us about your project..."
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 text-base text-red-800">
          {errorMessage}
          {errorMessage.toLowerCase().includes("not configured") && (
            <span className="block mt-1 text-red-700/80">
              You can also email us directly at{" "}
              <a href={`mailto:${email}`} className="underline">
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
        className="w-full inline-flex items-center justify-center px-10 py-4 bg-[#133963] text-white font-semibold tracking-wide uppercase text-base hover:bg-[#0c2845] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : isFull ? "Submit" : "Send Message"}
      </button>

      {!isFull && fullPageLinkLabel && (
        <p className="text-center text-base pt-2">
          <Link
            href="/contact"
            className="text-[#133963] hover:text-[#0c2845] underline underline-offset-2 font-semibold"
          >
            {fullPageLinkLabel}
          </Link>
        </p>
      )}
    </form>
  );
}

export function ContactSection({
  headline,
  subheadline,
  email,
  variant = "short",
  fullPageLinkLabel,
}: ContactFormProps) {
  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-5xl md:text-6xl text-[#133963] uppercase">
            {headline}
          </h2>
          <p className="mt-4 text-[#133963]/75">{subheadline}</p>
        </div>
        <ContactForm
          headline={headline}
          subheadline={subheadline}
          email={email}
          variant={variant}
          fullPageLinkLabel={fullPageLinkLabel}
        />
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold uppercase tracking-widest text-[#133963]/70 mb-2"
      >
        {label}
        {required && <span className="text-[#133963]/40"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#f5f5f7] border border-[#133963]/15 text-[#133963] placeholder-[#133963]/30 focus:border-[#133963] focus:outline-none focus:ring-2 focus:ring-[#133963]/20 transition-colors"
      />
    </div>
  );
}
