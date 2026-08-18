import { Mail } from "lucide-react";
import { CALENDLY } from "./Header";

const tracks = [
  {
    kicker: "Track 01",
    title: "Tech go-to-market consulting",
    intro:
      "For seed to Series B founders who need a proven motion before they hire an expensive full-time VP of Sales.",
    items: [
      "First revenue from zero: ICP, outbound motion, discovery and demo scripts, first reference logos",
      "Founder-led sales handoff: turn founder instinct into a documented playbook",
      "Pricing and packaging so deal size and win rate move together",
      "Hiring and ramping the AEs, SDRs, and leaders who take it over",
      "Stalled growth reset: pipeline, forecasting, comp, and territory design",
    ],
  },
  {
    kicker: "Track 02",
    title: "Real estate investing consulting",
    intro:
      "For people who want to get started in real estate investing and want a candid, numbers-first walkthrough from an active operator.",
    items: [
      "Getting to your first deal: goals, budget, and a realistic timeline",
      "Choosing a market and a property type that fits your life, not a guru's",
      "Underwriting basics: rent comps, cap rate, cash flow, and what actually breaks a deal",
      "Financing paths: conventional, DSCR, partnerships, and what lenders look for",
      "Self-managing vs. property manager, and how to run the first year",
    ],
  },
];

export function Expertise() {
  return (
    <section id="services" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          {tracks.map((t) => (
            <div key={t.title} className="border-t border-rule pt-6">
              <span className="text-xs tracking-[0.18em] text-rust uppercase">{t.kicker}</span>
              <h3 className="mt-3 text-ink">{t.title}</h3>
              <p className="mt-3 max-w-lg text-sm text-ink-soft">{t.intro}</p>
              <ul className="mt-6 space-y-3">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink">
                    <span className="text-rust">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Free consultation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

