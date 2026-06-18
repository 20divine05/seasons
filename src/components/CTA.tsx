import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Glass } from "./Glass";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.07_155)] via-[oklch(0.42_0.08_152)] to-[oklch(0.25_0.05_155)]" />

          {/* Responsive glow circles */}
          <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-accent/40 blur-[140px]" />

          <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-mint/20 blur-[140px]" />
        </div>

        <Glass
          variant="strong"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative m-2 md:m-10 p-8 md:p-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-accent/60" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent">
              Limited commissions · 2026 season
            </span>
            <span className="h-px w-10 bg-accent/60" />
          </div>

          <h2 className="font-display text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] max-w-5xl mx-auto">
            The garden you imagine
            <br />
            is <span className="italic text-gradient">closer than you think.</span>
          </h2>

          <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl mx-auto">
            Book a private consultation with a founding partner. No fee,
            no obligation — only an unhurried conversation about possibility.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-foreground text-background px-8 py-5 text-sm font-medium hover:bg-mint transition-all w-full sm:w-auto"
            >
              Reserve a consultation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/portfolio"
              className="glass rounded-full px-7 py-5 text-sm hover:bg-white/15 transition-colors w-full sm:w-auto"
            >
              See more of our work
            </Link>
          </div>
        </Glass>
      </div>
    </section>
  );
}