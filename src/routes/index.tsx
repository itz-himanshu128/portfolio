import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import wisecheck from "@/assets/project-wisecheck.jpg";
import ims from "@/assets/project-ims.jpg";
import tracker from "@/assets/project-tracker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshu Bhardwaj — Full-Stack Developer" },
      { name: "description", content: "Portfolio of Himanshu Bhardwaj. Full-stack engineer crafting scalable, well-designed web applications." },
    ],
  }),
  component: Home,
});

const projects = [
  {
    title: "Wisecheck",
    year: "2026",
    tag: "Fintech · Next.js",
    img: wisecheck,
    links: {
      github: "https://github.com/itz-himanshu128/Wisecheck---an-expense-tracker-application",
    },
  },
  {
    title: "Hospital IMS",
    year: "2026",
    tag: "MERN · JWT",
    img: ims,
    links: {
      github: "https://github.com/itz-himanshu128/hospitle_IMS",
      live: "https://hospitleims-7lungh6uf-himanshu87701-2106s-projects.vercel.app",
    },
  },
  {
    title: "Live Tracker",
    year: "2025",
    tag: "WebSocket · Leaflet",
    img: tracker,
    links: {
      github: "https://github.com/itz-himanshu128/real-time-position-tracker",
    },
  },
];

const marquee = [
  "React", "Next.js", "Node", "PostgreSQL", "Supabase",
  "MongoDB", "Prisma", "WebSockets", "Tailwind", "TypeScript",
];

const ease = [0.22, 1, 0.36, 1] as const;

function Home() {
  return (
    <PageTransition>
      {/* HERO — minimal, designer-style */}
      <section className="relative min-h-[92vh] flex items-center px-6 md:px-10">
        {/* subtle grid + glow */}
        <div className="absolute inset-0 -z-10 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute inset-0 -z-10 glow-bg" />

        <div className="relative max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for new roles · 2026
          </motion.div>

          <h1 className="font-display tracking-tight leading-[1.02]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="block text-[clamp(2.4rem,7vw,5.2rem)]"
            >
              Himanshu Bhardwaj.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="block text-[clamp(1.6rem,4.2vw,3rem)] italic text-muted-foreground mt-2"
            >
              Full-stack <span className="gradient-text not-italic">developer</span> & designer.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-10 grid gap-8 md:grid-cols-[1.2fr_auto] md:items-end"
          >
            <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              I'm a Computer Science engineer who builds reliable, well-crafted web
              applications across the full stack — from data models to interface.
              Currently focused on fintech, internal tools, and realtime systems.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:gap-3 transition-all"
              >
                Selected work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm hover:border-foreground/40 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground border-t border-border/60 pt-6"
          >
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Bhopal, India</span>
            <span>B.Tech · CSE</span>
            <span>3+ yrs building products</span>
            <span className="ml-auto hidden md:inline">↓ scroll</span>
          </motion.div>
        </div>
      </section>

      {/* Marquee — faster */}
      <section className="relative py-8 border-y border-border/40 overflow-hidden">
        <div className="flex gap-10 marquee-track whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-muted-foreground/70">
              {m} <span className="text-primary mx-1">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Selected work — minimal index */}
      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Index — 01</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">Selected projects</h2>
            </div>
            <Link to="/work" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              All work <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <ul className="divide-y divide-border/60 border-y border-border/60">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 md:py-7">
                <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                <div className="flex items-baseline gap-4 min-w-0">
                  <Link to="/work" className="font-display text-2xl md:text-3xl truncate hover:translate-x-1 transition-transform">
                    {p.title}
                  </Link>
                  <span className="hidden sm:inline text-xs text-muted-foreground truncate">{p.tag}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex items-center gap-4">
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">Code</a>
                    )}
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">Live</a>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">{p.year}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </div>
                {/* hover image preview */}
                <motion.div
                  initial={false}
                  className="col-span-3 overflow-hidden rounded-xl border border-border/60"
                  whileHover={{}}
                  style={{ height: 0 }}
                >
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA — minimal */}
      <section className="px-6 md:px-10 py-28">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Let's talk</p>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-balance">
              Have a role or project in mind? <span className="gradient-text italic">Let's build it.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full border border-border text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
            >
              Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
