import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — SeasonsLandscapers" },
      { name: "description", content: "A 22-person atelier of landscape architects, horticulturists, masons and arborists. Twelve commissions a year." },
      { property: "og:title", content: "The Studio — SeasonsLandscapers" },
      { property: "og:description", content: "Patience is our first material." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <About />
      <Team />
      <Testimonials />
    </>
  );
}
