import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const getHref = (item: string) => {
    if (item.includes("@")) return `mailto:${item}`;
    if (item.startsWith("+91")) return "tel:+91 9900053707";
    if (item === "Instagram") return "https://www.instagram.com/seasonslandscapers/";
    return "#";
  };

  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-10 md:p-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="mb-5 max-w-80">
              <BrandLogo />
            </div>
            <p className="text-foreground/65 max-w-sm leading-relaxed text-sm">
              A boutique design–build studio for private landscapes, gardens
              and outdoor environments of lasting consequence.
            </p>
          </div>

          {[
            { h: "Studio", l: ["Services", "Portfolio", "About"] },
            { h: "Contact", l: ["SeasonsLandscapers", "+91 9900053707", "bskoushik06@gmail.com"] },
            { h: "Follow", l: ["Instagram"] },
          ].map((col) => (
            <div key={col.h} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">{col.h}</div>
              <ul className="space-y-2.5 text-sm text-foreground/70">
                {col.l.map((i) => (
                  <li key={i} className="min-w-0">
                    <a href={getHref(i)} className="break-words hover:text-foreground transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between gap-4 text-xs text-foreground/50">
          <span>© 2026 SeasonsLandscapers. All rights reserved.</span>
          <span>A legacy written in green.</span>
        </div>
      </div>
    </footer>
  );
}
