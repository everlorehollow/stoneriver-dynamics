/**
 * Site configuration — Stone River Dynamics
 * 3D Concrete Printing systems built by tradeworkers, for tradeworkers.
 */
export const siteConfig = {
  businessName: "Stone River Dynamics",
  tagline: "3DCP for the Real World",
  description:
    "Stone River Dynamics designs and builds 3D concrete printing systems for the real world. Meet the Sidekick — an affordable, KUKA-powered 3DCP system for small to medium construction projects.",
  logo: "/logo.webp",

  colors: {
    primary: "#133963",
    secondary: "#f5f5f7",
    accent: "#133963",
    background: "#ffffff",
    foreground: "#0f172a",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Founders", href: "#founders" },
    { label: "Specs", href: "/sidekick" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Introducing",
    headline: "The Sidekick",
    subheadline: "3DCP for the Real World",
    cta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "View Specs", href: "/sidekick" },
    video: {
      mp4: "/hero/hero.mp4",
      poster: "/hero/hero-poster.webp",
    },
  },

  stats: [
    { value: "23 FT", label: "Print Diameter" },
    { value: "10 FT", label: "Max Height" },
    { value: "3,000", label: "LBS Total Weight" },
    { value: "6-AXIS", label: "Precision Control" },
  ],

  features: {
    headline: "Features",
    items: [
      {
        title: "Industrial Core",
        caption: "Powered by KUKA",
        captionDetail: "A proven industry leader in automation.",
        image: "/photos/photo-3.webp",
        bullets: [
          "6-axis industrial robot built for production environments",
          "Backed by KUKA — the global leader in industrial automation",
          "7-axis controller standard for future upgrades including 7th linear axis",
        ],
      },
      {
        title: "Smart Extrusion",
        caption: "Code-Driven Precision",
        captionDetail: "Clean starts, clean stops, clean cleanouts.",
        image: "/photos/photo-7.webp",
        bullets: [
          "Code-driven extrusion start/stop through pneumatic pinch valve",
          "Assembled easy cleanout — designed for the realities of jobsite concrete",
          "1¼\" – 1½\" hose compatibility, ¼\" air connection",
        ],
      },
      {
        title: "Mobility",
        caption: "Jobsite Ready",
        captionDetail: "Fork pockets, pallet jack, integrated controller.",
        image: "/photos/photo-4.webp",
        bullets: [
          "4 side fork pockets — pallet jack move capable",
          "Compact transport mode: 40\" × 78\" × 64\"",
          "Integrated controller for fast setup and easy transport",
        ],
      },
      {
        title: "Capable Build Volume",
        caption: "Big Footprint, Small Footprint",
        captionDetail: "23 ft diameter print envelope from a compact base.",
        image: "/photos/photo-1.webp",
        bullets: [
          "Print a 14 ft long wall at 10 ft high",
          "23 ft diameter build volume (up to 8 ft high)",
          "19 ft diameter build volume (up to 10 ft high)",
        ],
      },
    ],
  },

  foundation: {
    eyebrow: "Our Foundation",
    quote:
      "Stone River isn't just another 3DCP company jumping on the trend. We're here to honor the foundation laid by the true pioneers — the researchers, engineers, and builders who endured years of trials when few believed in the vision.",
    body: "Built upon hard-won experience and lessons from the field. We've taken invaluable knowledge and focused it into a reliable, repeatable, practical process. Our peers showed it's possible — we're here to make it practical. Advancing 3DCP with sustainable materials, smarter automation, and solutions that address today's housing, infrastructure, and environmental challenges.",
    tagline: "Built by tradeworkers, for tradeworkers",
  },

  founders: {
    eyebrow: "Meet the Team",
    headline: "About the Founders",
    items: [
      {
        name: "Corbin Shea",
        title: "Co-Founder",
        bio: "Corbin leads engineering and product at Stone River Dynamics. With a background in industrial automation and construction, he's spent years translating the promise of 3D concrete printing into systems that actually survive the jobsite.",
        photo: "/founders/corbin-shea.webp",
        linkedin: "https://www.linkedin.com/in/corbin-shea-804383248/",
      },
      {
        name: "Coming Soon",
        title: "Co-Founder",
        bio: "More information about our second co-founder coming soon.",
        photo: null as string | null,
        linkedin: null as string | null,
      },
    ],
  },

  readyToBuild: {
    headline: "Ready to Build?",
    subheadline:
      "Get full specifications and pricing for the Sidekick system. Our team is ready to discuss your project.",
    cta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "View Full Specs", href: "/sidekick" },
  },

  contact: {
    headline: "Get in Touch",
    subheadline:
      "Tell us about your project — we'll get back to you within one business day.",
    formRecipient: "hello@stoneriverdynamics.com",
    email: "hello@stoneriverdynamics.com",
    phone: null as string | null,
  },

  footer: {
    tagline:
      "Built by tradeworkers, for tradeworkers. Advancing 3D concrete printing with practical, jobsite-ready solutions.",
    columns: [
      {
        heading: "Navigation",
        links: [
          { label: "Home", href: "/" },
          { label: "Features", href: "/#features" },
          { label: "Founders", href: "/#founders" },
          { label: "Contact", href: "/#contact" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Sidekick Overview", href: "/sidekick" },
          { label: "Full Specifications", href: "/sidekick#specifications" },
          { label: "Request a Quote", href: "/#contact" },
        ],
      },
    ],
    contact: {
      heading: "Contact",
      email: "hello@stoneriverdynamics.com",
    },
    copyright: `© ${new Date().getFullYear()} Stone River Dynamics. All rights reserved.`,
    builtBy: {
      label: "Built by Build with Travis",
      href: "https://buildwithtravis.com",
    },
  },

  specs: {
    headline: "The Sidekick — Full Specifications",
    intro:
      "Introducing the Sidekick, powered by KUKA. This affordable 3DCP system is optimised for efficiency and ease of use. Compact and lightweight design with integrated controller makes it easy to move and set up. Its simplicity makes it affordable — low initial investment, low maintenance, minimal operating costs. Its respectable build volume for its small footprint and weight makes it the perfect option for a wide variety of small to medium 3DCP projects.",
    features: [
      "Code-driven extrusion start/stop through pneumatic pinch valve",
      "Assembled easy cleanout",
      "4 side fork pockets",
      "Pallet jack move capable",
      "Can print 14 ft long wall, 10 ft high",
      "Integrated controller for fast setup and easy transport",
      "7-axis controller standard for future upgrades including 7th linear axis",
    ],
    specifications: [
      { label: "Weight", value: "3,000 lbs" },
      { label: "Hose Size", value: "1¼″ – 1½″" },
      { label: "Power", value: "20kW 3PH 50/60Hz 400V (custom voltage available)" },
      { label: "Air Connection", value: "¼″ (CFM dependent on number of start/stops per minute)" },
      { label: "Transport Size", value: "40″ × 78″ × 64″ (W × D × H)" },
      { label: "Build Volume", value: "23 ft dia. up to 8 ft high · 19 ft dia. up to 10 ft high" },
      { label: "Deadzone", value: "10 ft diameter" },
      { label: "System Footprint", value: "80″ reach · 48″ length · 40″ width · 64″ height" },
    ],
    galleryImages: [
      { src: "/photos/photo-3.webp", alt: "The Sidekick 3DCP system in the workshop" },
      { src: "/photos/photo-7.webp", alt: "Close-up of the Sidekick extrusion mechanism" },
      { src: "/photos/photo-9.webp", alt: "Detailed view of the Sidekick print head" },
      { src: "/photos/photo-4.webp", alt: "The Sidekick mobile-deployed on a truck bed" },
    ],
  },

  selfHealing: {
    enabled: false,
    apiEndpoint: "https://buildwithtravis.com/api/self-healing",
    siteId: "",
  },
};

export type SiteConfig = typeof siteConfig;
