import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageTransition } from "@/components/PageTransition";
import wisecheck from "@/assets/project-wisecheck.jpg";
import ims from "@/assets/project-ims.jpg";
import tracker from "@/assets/project-tracker.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Himanshu Bhardwaj" },
      { name: "description", content: "Selected projects by Himanshu Bhardwaj — full-stack web applications, real-time systems, and dashboards." },
    ],
  }),
  component: Work,
});

const projects = [
  {
    title: "Wisecheck",
    sub: "Expense tracking application",
    year: "2026",
    stack: ["Next.js", "PostgreSQL", "Supabase", "OAuth"],
    img: wisecheck,
    desc: "A secure, scalable expense tracker with OAuth, JSONB-driven flexible categories, and PostgreSQL Row-Level Security to keep every user's financial data isolated.",
    links: {
      github: "https://github.com/itz-himanshu128/Wisecheck---an-expense-tracker-application",
    },
  },
  {
    title: "Hospital IMS",
    sub: "Information management system",
    year: "2026",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    img: ims,
    desc: "End-to-end IMS for hospitals — patients, staff, records, scheduling, and admin workflows wrapped in clear, usable interfaces.",
    links: {
      github: "https://github.com/itz-himanshu128/hospitle_IMS",
      live: "https://hospitleims-7lungh6uf-himanshu87701-2106s-projects.vercel.app",
    },
  },
  {
    title: "Live Tracker",
    sub: "Real-time location streaming",
    year: "2025",
    stack: ["WebSocket", "Express", "Leaflet", "EJS"],
    img: tracker,
    desc: "A real-time location tracker with live WebSocket streams and Leaflet map visualization over a secure Express backbone.",
    links: {
      github: "https://github.com/itz-himanshu128/real-time-position-tracker",
    },
  },
];

function Work() {
  return (
    <PageTransition>
      <section className="px-6 md:px-10 pt-20 pb-16 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Selected Work · 2025–2026</p>
        <h1 className="font-display text-6xl md:text-8xl tracking-tight text-balance">
          Selected <span className="gradient-text italic">projects</span>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          A focused set of recent work across fintech, healthcare, and real-time systems. Each project links the underlying problem to the technical decisions behind it.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto space-y-32 pb-20">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`grid gap-10 md:grid-cols-12 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}
          >
            <div className="md:col-span-7 [direction:ltr]">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[16/10] group">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-xs">
                  {p.year}
                </div>
              </div>
              {/* Placeholder slot for additional images */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[0, 1, 2].map((s) => (
                  <div
                    key={s}
                    className="aspect-[4/3] rounded-xl border border-dashed border-border/60 bg-card/40 grid place-items-center text-[10px] uppercase tracking-widest text-muted-foreground/60"
                  >
                    Add image
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 [direction:ltr]">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{p.sub}</p>
              <h2 className="font-display text-5xl md:text-6xl tracking-tight">{p.title}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.desc}</p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    GitHub Code ↗
                  </a>
                )}
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </PageTransition>
  );
}
