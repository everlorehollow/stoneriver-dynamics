# BWT Site Template

Starter template for Build with Travis client sites. Config-driven — edit `site.config.ts` to customize branding, copy, colors, and features.

## Quick Start

```bash
# 1. Create a new repo from this template on GitHub (Use this template button)
# 2. Clone it
git clone git@github.com:EverloreHollow/bwt-client-CLIENTNAME.git
cd bwt-client-CLIENTNAME

# 3. Install
npm install

# 4. Edit site.config.ts with the client's info

# 5. Dev
npm run dev
```

## Deploy to Vercel

```bash
npx vercel@latest          # first deploy — creates project
npx vercel@latest --prod   # production deploy
```

Demo URL will be `bwt-client-CLIENTNAME.vercel.app`. When the client buys, add their custom domain in Vercel project settings.

## Self-Healing Widget

Set `selfHealing.enabled: true` and provide the `siteId` in `site.config.ts` to enable the floating chat widget. Clients can submit change requests that route to the BWT API for automatic fixes.

## Structure

```
site.config.ts          ← All client-specific content lives here
src/
  app/
    layout.tsx          ← Shell (header + footer from config)
    page.tsx            ← Assembles sections from config
    globals.css         ← Tailwind + theme colors
  components/
    header.tsx          ← Sticky nav from config.nav
    hero.tsx            ← Hero section
    services.tsx        ← Icon grid
    testimonials.tsx    ← Social proof
    contact.tsx         ← CTA + contact info
    footer.tsx          ← Copyright + "Built by" link
    self-healing-widget.tsx ← Floating change-request chat
```
