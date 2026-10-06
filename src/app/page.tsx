import { siteConfig } from "../../site.config";
import { Hero } from "@/components/hero";
import { SidekickAnnouncement } from "@/components/sidekick-announcement";
import { FieldStory } from "@/components/field-story";
import { NewsCoverage } from "@/components/news-coverage";
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
      <SidekickAnnouncement
        eyebrow={siteConfig.announcement.eyebrow}
        headline={siteConfig.announcement.headline}
        subheadline={siteConfig.announcement.subheadline}
        video={siteConfig.announcement.video}
      />
      <FieldStory {...siteConfig.fieldStory} />
      <NewsCoverage news={siteConfig.fieldStory.news} />
      <Stats items={siteConfig.stats} />
      <Features
        headline={siteConfig.features.headline}
        items={siteConfig.features.items}
      />
      <Foundation
        eyebrow={siteConfig.foundation.eyebrow}
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
