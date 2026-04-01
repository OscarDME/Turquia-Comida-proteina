import { copy } from "@/lib/copy";

const { footer } = copy;

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Brand */}
        <div className="text-xl font-black text-white mb-2">
          <span className="text-[#8cbc36]">{footer.brandHighlight}</span>{footer.brandSuffix}
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-xs mb-1">{footer.copyright}</p>

        {/* Company */}
        <p className="text-white/20 text-xs mb-3">{footer.company}</p>

        {/* Links */}
        {footer.links && footer.links.length > 0 && (
          <p className="text-white/20 text-xs mb-3">
            {footer.links.join(" · ")}
          </p>
        )}

        {/* Disclaimer */}
        <p className="text-white/15 text-xs max-w-2xl mx-auto mt-3 leading-relaxed">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
