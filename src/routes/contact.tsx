import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { ArrowDownRight, CalendarDays, Leaf, Sparkles } from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import projectThree from "@/assets/project-3.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SeasonsLandscapers" },
      { name: "description", content: "Reserve a private consultation with a founding partner. By appointment only." },
      { property: "og:title", content: "Begin — SeasonsLandscapers" },
      { property: "og:description", content: "Tell us about your land. A partner will respond within 48 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactIntro />
      <Contact />
    </>
  );
}

function ContactIntro() {
  const steps = [
    { icon: Leaf, label: "01", title: "Share the site" },
    { icon: Sparkles, label: "02", title: "Shape the vision" },
    { icon: CalendarDays, label: "03", title: "Plan the visit" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,188,138,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(120,188,138,0.12),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-accent/70" />
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              Private Consultation
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Let&apos;s design the next{" "}
            <span className="italic text-gradient">season</span> of your
            landscape.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Send us the essentials and we&apos;ll turn your first note into a
            thoughtful starting point for gardens, pools, outdoor rooms, and
            long-term care.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <step.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                    {step.label}
                  </span>
                </div>
                <div className="font-display text-xl">{step.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute right-0 top-0 h-[430px] w-[78%] overflow-hidden rounded-[2.25rem] border border-white/10 shadow-2xl shadow-black/40">
            <img
              src={heroLandscape}
              alt="Lush landscaped residence"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 h-[290px] w-[62%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
            <img
              src={projectThree}
              alt="Quiet garden detail"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-10 right-6 max-w-xs rounded-[1.75rem] border border-white/10 bg-background/65 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowDownRight className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-foreground/75">
              We respond within 48 hours with the right next step for your
              garden, estate, or outdoor living space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
