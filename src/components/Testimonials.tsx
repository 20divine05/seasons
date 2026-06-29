import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Glass } from "./Glass";

const quotes = [
  {
    quote: "I have been taking their service from the last one year for 3 sites. Clifford and Kevin are very humble and always available for any issues. Satisfied with their maintenance for our garden.",
    name: "Catherine A.",
    role: "Estate owner, Connecticut",
  },
  {
    quote: "Five years in, every stone has settled exactly where it was meant to. The vision is even more present than at install.",
    name: "Marcus & Elin V.",
    role: "Private clients",
  },
  {
    quote: "SeasonsLandscapers are the only studio I'd trust on a project of this scale. They are absolute masters of restraint.",
    name: "Idris Bouchard",
    role: "Architect, Studio Bouchard",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      {/* extra glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-10 bg-accent/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">In their words</span>
            <span className="h-px w-10 bg-accent/60" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            What our <span className="italic text-gradient">clients</span> say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Glass
              key={q.name}
              variant="strong"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 md:p-10 hover:shadow-[0_0_70px_-10px_oklch(0.65_0.1_152/0.55)] transition-shadow ${i === 1 ? "md:-translate-y-6" : ""}`}
            >
              <Quote className="w-8 h-8 text-accent/70 mb-6" strokeWidth={1.2} />
              <p className="font-display text-xl leading-snug mb-8 text-foreground/90">
                "{q.quote}"
              </p>
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <div className="pt-5 border-t border-white/10">
                <div className="font-medium">{q.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55 mt-1">{q.role}</div>
              </div>
            </Glass>
          ))}
        </div>
      </div>
    </section>
  );
}
