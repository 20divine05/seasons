import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-landscape.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury estate landscape at dusk"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.03_155/0.55)] via-[oklch(0.15_0.03_155/0.7)] to-[oklch(0.13_0.02_155)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.03_155/0.6)] to-transparent" />
      </div>

      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-primary/30 blur-[120px] pulse-glow pointer-events-none" />
      <div
        className="absolute top-1/3 -right-32 sm:-right-40 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-accent/25 blur-[140px] pulse-glow pointer-events-none"        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-44 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 sm:w-12 bg-accent/60" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent">
            SeasonsLandscapers · Landscape Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,12vw,8rem)] leading-[1] tracking-tight max-w-5xl"
        >
          Landscapes that{" "}
          <span className="text-gradient italic">breathe</span>,
          <br />
          gardens that{" "}
          <span className="text-gradient italic">endure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed"
        >
          A boutique design–build studio shaping private estates,
          architectural gardens and contemplative outdoor environments
          for clients who measure beauty in decades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex justify-center items-center gap-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground px-7 py-4 text-sm font-medium"
          >
            Begin your project
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="https://www.instagram.com/p/DSpOzLlkTz6/"
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-full px-6 py-4 text-sm inline-flex justify-center items-center gap-3"
          >
            <span className="grid place-items-center w-7 h-7 rounded-full bg-white/10">
              <Play className="w-3 h-3 fill-current" />
            </span>
            Watch our reel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
