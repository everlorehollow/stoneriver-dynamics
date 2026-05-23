/**
 * Site configuration — edit this file to customize the client site.
 * Everything brand-specific lives here so the components stay generic.
 */
export const siteConfig = {
  // ── Branding ──────────────────────────────────────────────
  businessName: "Acme Co",
  tagline: "We build things that matter",
  description: "Acme Co helps businesses grow with modern solutions.",
  logo: "/logo.svg", // place in /public

  // ── Colors (CSS custom properties set in globals.css via these values) ──
  colors: {
    primary: "#2563eb",    // blue-600
    secondary: "#1e293b",  // slate-800
    accent: "#f59e0b",     // amber-500
    background: "#ffffff",
    foreground: "#0f172a",
  },

  // ── Navigation ────────────────────────────────────────────
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: "Grow Your Business with Confidence",
    subheadline:
      "We provide the tools and expertise you need to scale — without the headaches.",
    cta: { label: "Get Started", href: "#contact" },
    secondaryCta: { label: "Learn More", href: "#services" },
    image: "/hero.jpg", // place in /public, or null to skip
  },

  // ── Services / Features ───────────────────────────────────
  services: [
    {
      title: "Strategy",
      description: "A clear roadmap tailored to your business goals.",
      icon: "Target",
    },
    {
      title: "Implementation",
      description: "We handle the heavy lifting so you can focus on growth.",
      icon: "Rocket",
    },
    {
      title: "Support",
      description: "Ongoing guidance to keep everything running smoothly.",
      icon: "Headphones",
    },
  ],

  // ── Social proof ──────────────────────────────────────────
  testimonials: [
    {
      quote: "They transformed how we operate. Couldn't recommend them more.",
      name: "Jane Smith",
      role: "CEO, Smith & Co",
    },
  ],

  // ── Contact / CTA ─────────────────────────────────────────
  contact: {
    headline: "Ready to get started?",
    subheadline: "Book a free consultation and let's talk about your goals.",
    cta: { label: "Book a Call", href: "https://cal.com/your-link" },
    email: "hello@example.com",
    phone: null as string | null,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copyright: `© ${new Date().getFullYear()} Acme Co. All rights reserved.`,
    builtBy: {
      label: "Built by Build with Travis",
      href: "https://buildwithtravis.com",
    },
  },

  // ── Self-healing chat widget ──────────────────────────────
  selfHealing: {
    enabled: false, // flip to true once the client is live + paying
    apiEndpoint: "https://buildwithtravis.com/api/self-healing",
    siteId: "", // set per-client after repo creation
  },
};

export type SiteConfig = typeof siteConfig;
