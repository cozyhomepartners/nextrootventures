import { useState } from "react";
import { Menu, X } from "lucide-react";

export const CALENDLY = "https://calendly.com/charleschsieh/30-minutes";
export const LINKEDIN = "https://www.linkedin.com/in/charleschsieh/";

const links = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Ventures", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[-0.01em] ${className}`}>
      NextRoots<span className="text-rust"> Ventures</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" aria-label="NextRoots Ventures">
          <Wordmark className="text-base text-ink md:text-lg" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink underline decoration-rust decoration-2 underline-offset-4"
          >
            Free consultation ↗
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-ink-soft">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="text-sm font-medium text-ink">
                Free consultation ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
