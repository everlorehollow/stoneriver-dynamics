import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../site.config";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-[#133963] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                width={140}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-lg text-white uppercase mb-4 tracking-wider">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="font-display text-lg text-white uppercase mb-4 tracking-wider">
              {footer.contact.heading}
            </h3>
            <p className="eyebrow text-white/50 mb-1">Email</p>
            <a
              href={`mailto:${footer.contact.email}`}
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              {footer.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>{footer.copyright}</span>
          <a
            href={footer.builtBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {footer.builtBy.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
