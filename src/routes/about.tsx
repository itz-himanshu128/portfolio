import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Himanshu Bhardwaj" },
      { name: "description", content: "About Himanshu Bhardwaj — Computer Science student and full-stack developer based in Bhopal, India." },
    ],
  }),
  component: About,
});

const skills = {
  Stack: ["React", "Next.js", "Node.js", "Express", "Python"],
  Data: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  AI: ["LLMs", "Prompt Engineering", "Generative AI"],
  Tools: ["GitHub", "VS Code", "Vercel"],
};

const timeline = [
  { y: "Dec 2025 — Jan 2026", t: "Software Development Intern", s: "Global Bluegrid IT Solution Pvt. Ltd. — Full-stack work on client-facing products, APIs, and live deployments." },
  { y: "2022 — 2026", t: "B.Tech, Computer Science", s: "LNCT University, Bhopal · CGPA 7.9" },
  { y: "2022", t: "Class XII — Kendriya Vidyalaya, Dewas", s: "" },
];

const certs = [
  "Programming Fundamentals using Python — Infosys Springboard",
  "Prompt Engineering for AI — DeepLearning.AI",
  "Google Gemini AI Bootcamp — SmartBridge",
];

function About() {
  return (
    <PageTransition>
      <section className="px-6 md:px-10 pt-20 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About</p>
        <h1 className="font-display text-6xl md:text-8xl tracking-tight text-balance max-w-5xl">
          Computer Science engineer
          <br />
          <span className="gradient-text italic">based in Bhopal, India.</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mt-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl border border-dashed border-border/60 bg-card/40 grid place-items-center text-xs uppercase tracking-widest text-muted-foreground/60 overflow-hidden noise">
            Add portrait
          </div>
        </div>
        <div className="md:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground">Himanshu Bhardwaj</span> is a final-year Computer Science Engineering student
            at LNCT University, Bhopal, focused on full-stack web development, system design, and real-time applications.
          </p>
          <p>
            During a recent internship at Global Bluegrid IT Solution, I worked across the stack — building client-facing
            websites, integrating third-party APIs, and managing production deployments. My personal projects extend this
            work into authentication, row-level data security, and real-time data streams.
          </p>
          <p>
            I am currently seeking software engineering roles where I can contribute to well-engineered products and continue
            growing as an engineer.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-12">Technical skills</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {Object.entries(skills).map(([cat, list], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{cat}</p>
              <ul className="space-y-2 text-sm">
                {list.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-12">Experience &amp; education</h2>
        <div className="relative border-l border-border pl-8 space-y-12">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.y}</p>
              <h3 className="font-display text-2xl mt-2">{t.t}</h3>
              {t.s && <p className="text-muted-foreground mt-1">{t.s}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certs */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-12">Certifications</h2>
        <ul className="divide-y divide-border border-y border-border">
          {certs.map((c) => (
            <li key={c} className="py-6 flex items-center justify-between gap-6">
              <span className="text-base md:text-lg">{c}</span>
              <span className="text-primary text-sm">↗</span>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
