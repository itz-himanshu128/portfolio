import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageTransition } from "@/components/PageTransition";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Himanshu Bhardwaj" },
      { name: "description", content: "Get in touch with Himanshu Bhardwaj for projects, collaborations, and opportunities." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "himanshu87701@gmail.com", href: "mailto:himanshu87701@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 87706 12245", href: "tel:+918770612245" },
  { icon: MapPin, label: "Based in", value: "Bhopal, Madhya Pradesh", href: "#" },
  { icon: Github, label: "GitHub", value: "@itz-himanshu128", href: "https://github.com/itz-himanshu128" },
  { icon: Linkedin, label: "LinkedIn", value: "himanshu-bhardwaj", href: "https://linkedin.com/in/himanshu-bhardwaj-2b8749254" },
];

function Contact() {
  return (
    <PageTransition>
      <section className="px-6 md:px-10 pt-20 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
        <h1 className="font-display text-6xl md:text-9xl tracking-tight text-balance">
          Get in <span className="gradient-text italic">touch</span>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          Available for full-time engineering roles, internships, and freelance project work. The fastest way to reach me is by email.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mt-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:border-primary/60 transition-colors"
            >
              <span className="h-10 w-10 grid place-items-center rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                <p className="text-base">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:himanshu87701@gmail.com"; }}
          className="md:col-span-7 p-8 rounded-2xl border border-border bg-card space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Role, project, or inquiry" />
          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Message</label>
            <textarea
              rows={6}
              placeholder="Briefly describe the role or project…"
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform"
          >
            Send message →
          </button>
        </form>
      </section>
    </PageTransition>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3"
      />
    </div>
  );
}
