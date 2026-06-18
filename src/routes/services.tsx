import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SeasonsLandscapers" },
      { name: "description", content: "Six disciplines under one roof: landscape architecture, water features, outdoor living, lighting, hardscape and estate stewardship." },
      { property: "og:title", content: "Our Craft — SeasonsLandscapers" },
      { property: "og:description", content: "A complete design–build studio for private landscapes of lasting consequence." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Services />
      <CTA />
    </>
  );
}
