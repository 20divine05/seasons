import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Glass } from "@/components/Glass";
import { PageHero } from "@/components/PageHero";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — SeasonsLandscapers" },
      { name: "description", content: "Field notes, essays and slow observations from the studio." },
      { property: "og:title", content: "Journal — SeasonsLandscapers" },
      { property: "og:description", content: "On patience, materials, and the long arc of a garden." },
    ],
  }),
  component: JournalPage,
});

const posts = [
  { img: p1, cat: "Essay", date: "May 2026", title: "On the slow garden — designing for a fifty-year horizon.", read: "8 min" },
  { img: about, cat: "Field notes", date: "Apr 2026", title: "Observing a site through four seasons before lifting a shovel.", read: "5 min" },
  { img: p2, cat: "Material", date: "Mar 2026", title: "Limestone from the same quarry, twelve years apart.", read: "6 min" },
  { img: p3, cat: "Travel", date: "Feb 2026", title: "Lessons from Kyoto's moss temples and their quiet authority.", read: "9 min" },
  { img: p4, cat: "Studio", date: "Jan 2026", title: "Why we accept no more than twelve commissions a year.", read: "4 min" },
];

function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="The"
        emphasis="journal."
        intro="Occasional writing from the studio — on patience, materials, and the long arc of a garden."
      />
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.a
              href="#"
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <Glass className="overflow-hidden p-0">
                <div className={`relative overflow-hidden ${i === 0 ? "h-[420px]" : "h-[260px]"}`}>
                  <img src={post.img} alt={post.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.7)] to-transparent" />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
                    <span>{post.cat}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    <span className="text-foreground/55">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    <span className="text-foreground/55">{post.read}</span>
                  </div>
                  <h3 className={`font-display leading-snug ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"} mb-5`}>
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                    Read entry <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Glass>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
