import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.businessName}`,
  description:
    "Get a detailed quote and specifications for the Sidekick 3D concrete printing system. Send us a note and we'll get back within one business day.",
};

export default function ContactPage() {
  const { page, email } = siteConfig.contact;

  return (
    <>
      {/* Page header */}
      <section className="bg-[#f5f5f7] pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-[#133963]/70 mb-4">{page.eyebrow}</p>
          <h1 className="font-display text-6xl md:text-7xl text-[#133963] uppercase">
            {page.headline}
          </h1>
          <p className="mt-6 text-[#133963]/75 max-w-2xl mx-auto text-lg">
            {page.subheadline}
          </p>
        </div>
      </section>

      {/* Form card */}
      <section className="bg-[#f5f5f7] pb-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-[#133963]/5 p-6 md:p-10">
          <ContactForm
            headline={page.headline}
            subheadline={page.subheadline}
            email={email}
            variant="full"
          />
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#f5f5f7] pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-[#133963] uppercase mb-8">
            {page.whatToExpect.heading}
          </h2>
          <ul className="space-y-5">
            {page.whatToExpect.items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#133963] text-white flex items-center justify-center mt-0.5">
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-[#133963]/85 leading-relaxed">
                  <span className="font-semibold text-[#133963]">
                    {item.title}
                  </span>{" "}
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Why Stone River card */}
          <div className="mt-10 bg-white rounded-2xl border border-[#133963]/10 p-6 md:p-8">
            <p className="eyebrow text-[#133963]/70 mb-4">
              {page.whyStoneRiver.heading}
            </p>
            <ul className="space-y-2.5">
              {page.whyStoneRiver.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[#133963]/85"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#133963]/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prefer email */}
          <div className="mt-10 pt-8 border-t border-[#133963]/10">
            <p className="text-sm text-[#133963]/60 mb-1">Prefer email?</p>
            <Link
              href={`mailto:${email}`}
              className="text-[#133963] font-semibold underline underline-offset-2 hover:text-[#0c2845]"
            >
              {email}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
