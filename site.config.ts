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
    { label: "Features", href: "/#features" },
    { label: "Founders", href: "/#founders" },
    { label: "Specs", href: "/sidekick" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Introducing",
    headline: "The Sidekick",
    subheadline: "3DCP for the Real World",
    cta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "View Specs", href: "/sidekick" },
    video: {
      mp4: "/hero/hero.mp4",
      poster: "/hero/hero-poster.webp",
    },
  },

  announcement: {
    eyebrow: "Announcement",
    headline: "Meet the Sidekick",
    subheadline:
      "An up-close look at the system — the build, the print head, and the philosophy behind 3DCP for the real world.",
    video: {
      mp4: "/sidekick/announcement-720p.mp4",
      mp4Mobile: "/sidekick/announcement-480p.mp4",
      poster: "/sidekick/announcement-poster.jpg",
    },
  },

  stats: [
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
          "6-axis industrial robot built for austere environments",
          "Powered by KUKA — a global leader in industrial automation",
          "Sub-millimeter precision for consistent, accurate printing",
        ],
      },
      {
        title: "Reliable Extrusion",
        caption: "Code-Driven Precision",
        captionDetail: "Clean starts, clean stops, clean cleanouts.",
        image: "/photos/photo-7.webp",
        bullets: [
          "Code-driven pneumatic pinch valve for clean start and stop",
          "Easy cleanout — Fast clean-out and tool-less disassembly for maintenance",
          "1¼\" – 1½\" hose compatibility, ¼\" air connection",
        ],
      },
      {
        title: "Mobility",
        caption: "Logistics",
        captionDetail: "Ready to go where the work is.",
        image: "/photos/photo-4.webp",
        bullets: [
          "4 side fork pockets — pallet jack move capable",
          "Compact transport mode: 36\" × 80\" × 72\"",
          "3,000 lbs",
          "Integrated controller for fast setup and easy transport",
        ],
      },
      {
        title: "Intuitive Software",
        caption: "Integrated with Rhino",
        captionDetail: "You paid for the machine, you shouldn't have to pay to use it.",
        image: "/photos/software-screenshot.png",
        imageFit: "contain" as const,
        imageBg: "#0c2845",
        bullets: [
          "Integrated with Rhino",
          "Full Grasshopper Access for experienced users",
          "Lifetime Software access — No subscriptions",
        ],
      },
    ],
  },

  foundation: {
    eyebrow: "Our Foundation",
    body: "Built upon hard-won experience and lessons from the field. We've taken invaluable knowledge and focused it into a reliable, repeatable, practical process. We've shown it's possible, now we're here to make it practical. Advancing 3DCP with smarter automation and solutions that makes 3DCP a viable, mainstream building method.",
    tagline: "Built by tradeworkers, for tradeworkers",
  },

  founders: {
    eyebrow: "Meet the Team",
    headline: "About the Founders",
    items: [
      {
        name: "Corbin Shea",
        title: "Co-Founder",
        bio: "Corbin is a former Navy veteran of 13 years. He leads engineering and product development at Stone River Dynamics. A 3DCP innovator with experience developing multiple 3DCP systems and methods. He's spent years building systems that deliver production-quality prints for real-world projects.",
        photo: "/founders/corbin-shea.jpg",
        photoPosition: "center",
        linkedin: "https://www.linkedin.com/in/corbin-shea-804383248/",
      },
      {
        name: "Wyatt Johnson",
        title: "Co-Founder",
        bio: "Wyatt is a former 75th Ranger Regiment combat veteran (Fire Support Sergeant / JTAC) who brings hard-won operational discipline to 3DCP. Most recently Senior Operations Manager at Alquist 3D — where he led one of the most successful 3D-printed builds to date in partnership with Walmart — he holds a PMP, a Lean Six Sigma Yellow Belt, and a degree in Organizational Leadership.",
        photo: "/founders/wyatt-johnson.webp",
        photoPosition: "center",
        linkedin: "https://www.linkedin.com/in/wyatt-johnson52/",
      },
    ],
  },

  readyToBuild: {
    headline: "Ready to Build?",
    subheadline:
      "Get full specifications and pricing for the Sidekick system. Our team is ready to discuss your project.",
    cta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "View Full Specs", href: "/sidekick" },
  },

  contact: {
    // Short form embedded at the bottom of the home page
    home: {
      headline: "Get in Touch",
      subheadline:
        "Send us a quick note — or visit the full contact page for a detailed quote request.",
      fullPageLinkLabel: "Need a detailed quote? Open the full contact form →",
    },
    // Dedicated /contact page
    page: {
      eyebrow: "Let's Talk",
      headline: "Contact Us",
      subheadline:
        "Tell us about your project and we'll provide detailed pricing and specifications.",
      whatToExpect: {
        heading: "What to Expect",
        items: [
          {
            title: "Response within 24 hours.",
            body: "We review every inquiry personally and will follow up quickly.",
          },
          {
            title: "Custom quote for your project.",
            body: "We'll assess your needs and provide accurate pricing.",
          },
          {
            title: "No obligation.",
            body: "We're happy to answer questions even if you're still exploring.",
          },
        ],
      },
      whyStoneRiver: {
        heading: "Why Stone River",
        items: [
          "Industry-standard KUKA robotics platform",
          "Built by experienced 3DCP engineers",
          "Designed for real job site conditions",
          "Full technical support included",
        ],
      },
    },
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
          { label: "Request a Quote", href: "/contact" },
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
