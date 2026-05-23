import { siteConfig } from "../../site.config";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <span>{siteConfig.footer.copyright}</span>
        <a
          href={siteConfig.footer.builtBy.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {siteConfig.footer.builtBy.label}
        </a>
      </div>
    </footer>
  );
}
