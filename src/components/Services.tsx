import { useState } from "react";
import { motion } from "motion/react";
import { Trees, Droplets, Flame, Sun, Sparkles, Wrench, X } from "lucide-react";
import { Glass } from "./Glass";
import project1 from "@/assets/land.jpeg";
import project2 from "@/assets/biopool.jpeg";
import project3 from "@/assets/out.jpeg";
import project4 from "@/assets/light.jpeg";
import project5 from "@/assets/main.jpeg";
import project6 from "@/assets/plantauto.jpeg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero-landscape.jpg";

const services = [
  {
    icon: Trees,
    image: project1,
    title: "Landscape Architecture",
    desc: "Master planning, grading and planting design for residential estates and private retreats.",
    detail:
      "We begin with the land itself: slope, drainage, sun path, soil structure, views, privacy and the way people naturally move through the site. From there, we shape a complete landscape plan that balances architecture, planting, circulation and long-term maintenance, so the finished outdoor space feels intentional from the first season and better with age.",
  },
  {
    icon: Droplets,
    image: project2,
    title: "Bio Pool",
    desc: "Natural swimming pools and living water systems filtered through plants, stone and balanced ecology.",
    detail:
      "A bio pool brings the clarity of a swimming pool together with the softness of a natural pond. We design planted regeneration zones, circulation systems, stone edges and water movement so the pool stays clean through biological filtration rather than a harsh chemical-first approach. The result is a calm, living water feature that supports the landscape and feels beautiful in every season.",
  },
  {
    icon: Flame,
    image: project3,
    title: "Outdoor Living",
    desc: "Pergolas, fire elements, summer kitchens - rooms without ceilings, made for slow evenings.",
    detail:
      "Outdoor living areas are planned as real rooms, with comfort, shade, cooking, seating, lighting and seasonal use considered from the beginning. We compose pergolas, fire features, dining terraces and garden lounges around the way you host, rest and move through the home, making the exterior feel like a natural extension of the architecture.",
  },
  {
    icon: Sun,
    image: project4,
    title: "Architectural Lighting",
    desc: "Layered, low-voltage moonlight schemes that turn gardens into nocturnal sculpture.",
    detail:
      "Lighting is designed in quiet layers: path safety, tree canopies, architectural accents, water reflections and soft gathering zones. We avoid glare and over-lighting, instead using low-voltage fixtures and careful placement to reveal texture, depth and atmosphere after sunset while preserving the calm of the garden.",
  },
  {
    icon: Sparkles,
    image: project5,
    title: "Estate Maintenance",
    desc: "Year-round horticultural stewardship by a dedicated team of arborists and gardeners.",
    detail:
      "Our maintenance work is built around stewardship, not just upkeep. Seasonal pruning, soil care, plant health, irrigation review, lawn management and garden editing are handled with the original design intent in mind, helping the landscape mature gracefully instead of drifting away from its purpose.",
  },
  {
    icon: Wrench,
    image: project6,
    title: "Plant Automation",
    desc: "Smart irrigation, misting and plant-care systems that keep gardens healthy with precise control.",
    detail:
      "Plant automation keeps the garden responsive without making it feel mechanical. We integrate smart irrigation zones, soil-moisture sensing, timed misting, pump controls and seasonal schedules so each planting area receives the right care at the right moment. It reduces waste, protects delicate plants and keeps the landscape resilient through changing weather.",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Our craft</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              A complete <span className="italic text-gradient">design-build</span> studio.
            </h2>
          </div>
          <p className="text-foreground/65 max-w-md leading-relaxed">
            Six disciplines under one roof, so every leaf, stone and lumen of light
            answers to a single curatorial vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Glass
              key={s.title}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveService(s)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveService(s);
                }
              }}
              className="group cursor-pointer overflow-hidden p-0 text-left hover:bg-white/10 transition-all hover:shadow-[0_0_60px_-10px_oklch(0.6_0.1_152/0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.7)] via-transparent to-transparent" />
                <div className="absolute left-6 top-6 w-14 h-14 rounded-2xl glass grid place-items-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" strokeWidth={1.4} />
                </div>
              </div>

              <div className="p-8 lg:p-9">
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm min-h-16">{s.desc}</p>
                <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/45 group-hover:text-accent transition-colors">
                  <span>0{i + 1}</span>
                  <span>Explore -&gt;</span>
                </div>
              </div>
            </Glass>
          ))}
        </div>
      </div>

      {activeService ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-detail-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/75 px-4 py-8 backdrop-blur-xl"
          onClick={() => setActiveService(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="glass-strong relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close service details"
              onClick={() => setActiveService(null)}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full glass text-foreground transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-72 md:min-h-[560px]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.75)] to-transparent" />
              <div className="absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-2xl glass">
                <activeService.icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
              </div>
            </div>

            <div className="overflow-y-auto p-8 md:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-accent/60" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent">Service detail</span>
              </div>
              <h3 id="service-detail-title" className="font-display text-4xl leading-tight md:text-6xl">
                {activeService.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-foreground/70">
                {activeService.desc}
              </p>
              <p className="mt-6 text-sm leading-7 text-foreground/65">
                {activeService.detail}
              </p>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
