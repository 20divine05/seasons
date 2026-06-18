import { motion } from "motion/react";

type Props = {
  eyebrow: string;
  title: string;
  emphasis: string;
  intro?: string;
};

export function PageHero({ eyebrow, title, emphasis, intro }: Props) {
  return (
    <section className="relative pt-44 pb-20 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/3 w-[520px] h-[520px] rounded-full bg-primary/25 blur-[140px] pointer-events-none" />
      <div className="absolute top-10 -right-20 w-[420px] h-[420px] rounded-full bg-accent/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-accent/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-tight max-w-5xl"
        >
          {title} <span className="italic text-gradient">{emphasis}</span>
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
