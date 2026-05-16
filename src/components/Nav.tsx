import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const loc = useLocation();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b border-border/40"
    >
      <Link to="/" className="font-display text-xl tracking-tight">
        Himanshu<span className="text-primary">.</span>
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {links.map((l) => {
          const active = loc.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="relative h-10 w-10 grid place-items-center rounded-full border border-border bg-card hover:border-primary/50 transition-colors"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="block"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </button>
    </motion.header>
  );
}
