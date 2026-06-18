import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Studio", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  const top = useTransform(scrollY, [0, 100], [20, 10]);
  const width = useTransform(scrollY, [0, 100], ["82%", "78%"]);

  return (
    <>
      <motion.header
        style={{ top, width }}
        className="fixed left-1/2 -translate-x-1/2 z-50 max-w-7xl"
      >
        <div className="glass-nav rounded-full px-5 py-1 flex items-center justify-between gap-6 overflow-hidden">
          <Link to="/" className="flex min-w-0 shrink-0 items-center group">
            <BrandLogo compact />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-1 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{
                  className:
                    "px-3 py-1.5 rounded-full text-foreground bg-white/10",
                }}
                inactiveProps={{
                  className:
                    "px-3 py-1.5 rounded-full text-foreground/75 hover:text-foreground hover:bg-white/5 transition-colors",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium transition-all"
          >
            Book consultation
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {open && (
        <div className="fixed top-20 left-4 right-4 z-50 glass rounded-3xl p-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-center"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}