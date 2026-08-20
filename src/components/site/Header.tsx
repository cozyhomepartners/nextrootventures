import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nextroot-logo.svg";

export const CALENDLY = "https://calendly.com/charleschsieh/30-minutes";
export const LINKEDIN = "https://www.linkedin.com/in/chsieh";

const links = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Experience", href: "#experience" },
  { label: "Roofolio", href: "https://roofolio.ai/", external: true, divider: true },
  { label: "Cozy Home", href: "https://www.cozyhomepartners.com/", external: true },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="NextRoot Ventures"
      className={`w-auto ${className}`}
      loading="eager"
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" aria-label="NextRoot Ventures">
          <Wordmark className="h-9 md:h-11" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <span key={l.label} className="flex items-center gap-8">
              {l.divider && <span aria-hidden className="h-4 w-px bg-rule" />}
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                {l.external ? " ↗" : ""}
              </a>
            </span>
          ))}
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
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                  onClick={l.external ? undefined : () => setOpen(false)}
                  className="text-sm text-ink-soft"
                >
                  {l.label}
                  {l.external ? " ↗" : ""}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
