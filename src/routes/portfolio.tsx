import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SeasonsLandscapers" },
      { name: "description", content: "Selected private estates and gardens from the Hudson Valley to Kyoto." },
      { property: "og:title", content: "Selected Work — SeasonsLandscapers" },
      { property: "og:description", content: "Places we have shaped — quietly, slowly, and to last." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <CTA />
    </>
  );
}
