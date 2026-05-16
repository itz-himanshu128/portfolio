import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/40 px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Get in touch</p>
          <a
            href="mailto:himanshu87701@gmail.com"
            className="inline-block mt-3 text-primary hover:underline underline-offset-4"
          >
            himanshu87701@gmail.com
          </a>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>Bhopal, Madhya Pradesh</p>
          <p>+91 87706 12245</p>
        </div>
        <div className="flex md:justify-end gap-5 text-sm">
          <a href="https://github.com/itz-himanshu128" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href="https://linkedin.com/in/himanshu-bhardwaj-2b8749254" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/40 flex justify-between text-xs text-muted-foreground">
        <span>© 2026 Himanshu Bhardwaj. All rights reserved.</span>
        <span>Bhopal, India</span>
      </div>
    </footer>
  );
}
