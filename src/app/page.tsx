import { siteConfig } from "../../site.config";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero config={siteConfig.hero} />
      <Services services={siteConfig.services} />
      {siteConfig.testimonials.length > 0 && (
        <Testimonials testimonials={siteConfig.testimonials} />
      )}
      <Contact config={siteConfig.contact} />
    </>
  );
}
