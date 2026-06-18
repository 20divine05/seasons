import { motion } from "motion/react";
import { Glass } from "./Glass";
import t1 from "@/assets/team/Clifford.png";
import t2 from "@/assets/team/mam.png";
import t3 from "@/assets/team/kevi.jpeg";

const team = [
  { img: t1, name: "Clifford Prasad", role: "Founder" },
  { img: t2, name: "Sharom Prasad", role: "plant stylist" },
  { img: t3, name: "Kevin Prasad", role: "Founder" },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The atelier</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            People who tend <span className="italic text-gradient">the work.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden h-[560px]"
            >
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.9)] via-transparent to-transparent" />
              <Glass className="absolute left-4 right-4 bottom-4 p-5">
                <div className="font-display text-2xl">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent mt-1.5">{m.role}</div>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
