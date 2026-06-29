import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

const portfolioImageModules = import.meta.glob<string>(
  "/src/assets/{Atmosphere,charkos,grandseran,indpro,Pelicanpub,roys,sankalp,sapa,sjr}/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

const getFolderImages = (folder: string, coverFile?: string) =>
  Object.entries(portfolioImageModules)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .sort(([firstPath], [secondPath]) => {
      const firstIsCover = coverFile ? firstPath.includes(coverFile) : false;
      const secondIsCover = coverFile ? secondPath.includes(coverFile) : false;

      if (firstIsCover && !secondIsCover) return -1;
      if (!firstIsCover && secondIsCover) return 1;

      return firstPath.localeCompare(secondPath);
    })
    .map(([, image]) => image);

const portfolioFolders = {
  Atmosphere: getFolderImages(
    "Atmosphere",
    "seasonslandscapers_518722449_18021745019708687_1887559929821168270_n.jpg",
  ),
  charkos: getFolderImages("charkos"),
  grandseran: getFolderImages("grandseran"),
  indpro: getFolderImages("indpro"),
  Pelicanpub: getFolderImages(
    "Pelicanpub",
    "seasonslandscapers_Pelican_3272743448967225009_51255948686.jpg",
  ),
  roys: getFolderImages("roys"),
  sankalp: getFolderImages("sankalp"),
  sapa: getFolderImages("sapa"),
  sjr: getFolderImages("sjr"),
};

const projectDetails = {
  Atmosphere: {
    desc: "A layered indoor-outdoor planting story with sculptural greens, soft light and intimate garden views.",
    detail:
      "The Atmosphere project is built around mood, texture and close-up landscape moments. Broad foliage, framed views and calm planting compositions create a refined setting that feels lush without becoming heavy. Each photo captures a different part of the spatial experience, from quiet corners to stronger architectural garden gestures.",
  },
  charkos: {
    desc: "A refined landscape commission shaped through layered planting, crisp edges and welcoming outdoor moments.",
    detail:
      "The charkos project brings together clean landscape structure, softened planting layers and carefully composed views. Each garden pocket is planned to feel complete on its own while remaining connected to the larger outdoor experience, creating a calm and polished setting for everyday use.",
  },
  grandserene: {
    desc: "A graceful landscape setting with strong garden rhythm, mature planting character and quiet architectural balance.",
    detail:
      "The grandseran project is arranged as a sequence of planted moments, balancing formal gestures with natural softness. Texture, scale and proportion guide the experience, allowing the landscape to frame the property without overwhelming it.",
  },
  indpro: {
    desc: "A practical and elegant outdoor environment designed around durability, greenery and daily usability.",
    detail:
      "The indpro project focuses on reliable landscape performance with a refined finish. Planting, circulation and open areas are organized to support frequent use while keeping the space visually lush, ordered and easy to maintain.",
  },
  Pelicanpub: {
    desc: "A character-rich landscape with generous planting, warm gathering spaces and a memorable arrival experience.",
    detail:
      "The Pelicanpub project uses planting density, hardscape rhythm and atmospheric details to create a landscape that feels inviting from the first glance. The design supports movement, pause and visual interest across the full site.",
  },
  roys: {
    desc: "A lush residential landscape composed with soft green edges, balanced planting and calm outdoor corners.",
    detail:
      "The roys project softens the built environment through layered greenery, clean ground planes and comfortable garden transitions. It is designed to feel fresh, lived-in and visually composed through changing light and seasons.",
  },
  sankalp: {
    desc: "A thoughtfully organized garden project focused on clean circulation, healthy planting and long-term care.",
    detail:
      "The sankalp project brings structure and softness together through measured pathways, planting groups and practical landscape detailing. The result is an outdoor space that feels considered, manageable and visually generous.",
  },
  sapa: {
    desc: "A vibrant landscape with layered plant palettes, garden detail and a strong connection to outdoor living.",
    detail:
      "The sapa project highlights texture, color and planted depth. From close-up garden details to broader outdoor views, the space is shaped to feel immersive, fresh and easy to enjoy throughout the day.",
  },
  sjr: {
    desc: "A complete landscape transformation with composed greenery, polished outdoor zones and refined finishing.",
    detail:
      "The sjr project is designed as a complete outdoor experience, with planting, paths and usable areas working together as one composition. It balances strong presentation with everyday practicality, creating a landscape that feels finished and welcoming.",
  },
};

const projects = [
  {
    title: "Atmosphere",
    gallery: portfolioFolders.Atmosphere,
    year: "2024",
    layout: "xl:col-span-3 xl:row-span-4",
    tone: "Featured Estate",
  },
  {
    title: "grandserene",
    gallery: portfolioFolders.grandserene,
    year: "2023",
    layout: "xl:col-span-2 xl:row-span-2",
    tone: "Garden Rhythm",
  },
  {
    title: "indpro",
    gallery: portfolioFolders.indpro,
    year: "2024",
    layout: "xl:col-span-1 xl:row-span-2",
    tone: "Built Landscape",
  },
  {
    title: "charkos",
    gallery: portfolioFolders.charkos,
    year: "2024",
    layout: "xl:col-span-2 xl:row-span-2",
    tone: "Private Garden",
  },
  {
    title: "Pelicanpub",
    gallery: portfolioFolders.Pelicanpub,
    year: "2025",
    layout: "xl:col-span-3 xl:row-span-3",
    tone: "Hospitality Landscape",
  },
  {
    title: "roys",
    gallery: portfolioFolders.roys,
    year: "2026",
    layout: "xl:col-span-1 xl:row-span-2",
    tone: "Soft Greens",
  },
  {
    title: "sankalp",
    gallery: portfolioFolders.sankalp,
    year: "2025",
    layout: "xl:col-span-2 xl:row-span-2",
    tone: "Structured Calm",
  },
  {
    title: "sapa",
    gallery: portfolioFolders.sapa,
    year: "2024",
    layout: "xl:col-span-3 xl:row-span-2",
    tone: "Outdoor Living",
  },
  {
    title: "sjr",
    gallery: portfolioFolders.sjr,
    year: "2026",
    layout: "xl:col-span-3 xl:row-span-4",
    tone: "Signature Project",
  },
]
  .filter((project) => project.gallery.length > 0)
  .map((project) => ({
    ...project,
    img: project.gallery[0],
    place: "Seasons Landscapers",
    ...projectDetails[project.title as keyof typeof projectDetails],
  }));

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [activeProjectImage, setActiveProjectImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Selected work
              </span>
            </div>
            <h2 className="font-display max-w-3xl text-5xl leading-[0.95] md:text-7xl">
              Places we have <span className="italic text-gradient">shaped.</span>
            </h2>
          </div>
          <button
            type="button"
            className="glass inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm transition-colors hover:bg-white/10"
          >
            Full portfolio <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:auto-rows-[118px] xl:grid-cols-6 xl:grid-flow-dense">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              onClick={() => {
                setActiveProject(project);
                setActiveProjectImage(project.gallery[0] ?? project.img);
              }}
              className={`group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 text-left shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 md:min-h-[380px] xl:min-h-0 ${project.layout}`}
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.82)] via-[oklch(0.1_0.02_155/0.12)] to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[oklch(0.16_0.02_155/0.5)] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-foreground/80 backdrop-blur-md">
                {project.tone}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-[75%]">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.26em] text-accent">
                      {project.place} - {project.year}
                    </div>
                    <div className="font-display text-[2rem] capitalize leading-none md:text-[2.35rem]">
                      {project.title}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-foreground/65">
                      {project.gallery.length} photos
                    </div>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-[oklch(0.18_0.02_155/0.45)] backdrop-blur-md transition-all group-hover:-translate-y-1 group-hover:bg-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
            </motion.button>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/75 px-4 py-8 backdrop-blur-xl"
          onClick={() => {
            setActiveProject(null);
            setActiveProjectImage(null);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="glass-strong relative grid max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl lg:grid-cols-[1.25fr_0.75fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => {
                setActiveProject(null);
                setActiveProjectImage(null);
              }}
              className="glass absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-80 lg:min-h-[640px]">
              <img
                src={activeProjectImage ?? activeProject.img}
                alt={activeProject.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.02_155/0.65)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex gap-3 overflow-x-auto rounded-2xl p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {activeProject.gallery.map((image, index) => (
                  <button
                    type="button"
                    key={`${activeProject.title}-${index}`}
                    aria-label={`View ${activeProject.title} photo ${index + 1}`}
                    onClick={() => setActiveProjectImage(image)}
                    className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border transition-all ${
                      (activeProjectImage ?? activeProject.img) === image
                        ? "border-accent shadow-[0_0_30px_-10px_oklch(0.72_0.07_152)]"
                        : "border-white/15 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-y-auto p-8 md:p-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-accent/60" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent">
                  {activeProject.place} - {activeProject.year}
                </span>
              </div>
              <h3 id="project-detail-title" className="font-display text-4xl leading-tight md:text-6xl">
                {activeProject.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-foreground/70">
                {activeProject.desc}
              </p>
              <p className="mt-6 text-sm leading-7 text-foreground/65">
                {activeProject.detail}
              </p>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
