import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/header-logo.svg";

export const CALENDLY = "https://calendly.com/tryscalegtm/30min";

const links = [
  { label: "Customers", href: "#customers" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-[1321px] items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-10">
          <a href="#top-hero" aria-label="Scale GTM home">
            <img src={logo} alt="Scale GTM" className="h-5 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-mint"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <a href={CALENDLY} className="hidden md:block">
          <button className="h-11 rounded-md bg-mint px-5 text-sm font-semibold text-navy transition-colors hover:bg-mint-bright">
            Contact Me
          </button>
        </a>

        <button
          className="text-mint md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-line bg-navy px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={CALENDLY}>
            <button className="h-11 w-full rounded-md bg-mint px-5 text-sm font-semibold text-navy">
              Contact Me
            </button>
          </a>
        </nav>
      )}
    </header>
  );
}
