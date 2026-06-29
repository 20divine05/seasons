import { motion } from "motion/react";
import { Glass } from "./Glass";
import about from "@/assets/sankalp/seasonslandscapers_491493254_18012816347708687_4827157920120815578_n (1).jpg";

const points = [
  { k: "Philosophy", v: "We design slowly. Every project begins with a year of observation — sun, wind, water, wildlife — before a single line is drawn." },
  { k: "Materiality", v: "Stone from local quarries. Plants grown in our own nursery. Steel forged by craftsmen we've worked with for over a decade." },
  { k: "Stewardship", v: "A landscape is never finished. Our maintenance atelier tends each garden as it matures into its intended grace." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl overflow-hidden h-[680px]">
            <img
              src={about}
              alt="Landscape architect in a private garden at golden hour"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.13_0.03_155/0.4)] to-transparent" />
          </div>

          {/* Floating glass info card */}
         
        </motion.div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The studio</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Patience is our <span className="italic text-gradient">first material.</span>
          </h2>
          <p className="mt-8 text-foreground/70 leading-relaxed text-lg max-w-lg">
            SeasonsLandscapers is a 22-person atelier of landscape architects,
            horticulturists, masons and arborists. We accept no more than
            twelve commissions a year — so that every one of them becomes a place
            our clients return to, again and again.
          </p>

          <div className="mt-10 space-y-4">
            {points.map((p, i) => (
              <Glass
                key={p.k}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 flex gap-6"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-accent shrink-0 w-28 pt-1">{p.k}</div>
                <div className="text-foreground/75 text-sm leading-relaxed">{p.v}</div>
              </Glass>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
