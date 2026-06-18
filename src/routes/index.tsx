import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SeasonsLandscapers — Luxury Landscape Architecture Studio" },
      { name: "description", content: "Boutique design–build studio shaping private estates, architectural gardens and contemplative outdoor environments. By appointment only." },
      { property: "og:title", content: "SeasonsLandscapers — Luxury Landscape Architecture" },
      { property: "og:description", content: "Landscapes that breathe, gardens that endure. A 22-person atelier accepting twelve commissions a year." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
