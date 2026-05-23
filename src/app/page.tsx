import { siteConfig } from "../../site.config";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Foundation } from "@/components/foundation";
import { Founders } from "@/components/founders";
import { ReadyToBuild } from "@/components/ready-to-build";
import { ContactSection } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Hero config={siteConfig.hero} />
      <Stats items={siteConfig.stats} />
      <Features
        headline={siteConfig.features.headline}
        items={siteConfig.features.items}
      />
      <Foundation
        eyebrow={siteConfig.foundation.eyebrow}
        quote={siteConfig.foundation.quote}
        body={siteConfig.foundation.body}
        tagline={siteConfig.foundation.tagline}
      />
      <Founders
        eyebrow={siteConfig.founders.eyebrow}
        headline={siteConfig.founders.headline}
        items={siteConfig.founders.items}
      />
      <ReadyToBuild
        headline={siteConfig.readyToBuild.headline}
        subheadline={siteConfig.readyToBuild.subheadline}
        cta={siteConfig.readyToBuild.cta}
        secondaryCta={siteConfig.readyToBuild.secondaryCta}
      />
      <ContactSection
        headline={siteConfig.contact.home.headline}
        subheadline={siteConfig.contact.home.subheadline}
        email={siteConfig.contact.email}
        variant="short"
        fullPageLinkLabel={siteConfig.contact.home.fullPageLinkLabel}
      />
    </>
  );
}
