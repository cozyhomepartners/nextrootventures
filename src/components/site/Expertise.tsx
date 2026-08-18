import { Mail } from "lucide-react";
import { CALENDLY } from "./Header";

const tracks = [
  {
    kicker: "Track 01",
    title: "Tech go-to-market consulting",
    intro: "For seed to Series B founders who need a proven motion before hiring a full-time VP of Sales.",
    items: [
      "First revenue from zero: ICP, outbound, discovery and demo scripts",
      "Founder-led sales turned into a documented playbook",
      "Pricing and packaging that lift deal size and win rate",
      "Hiring and ramping the AEs, SDRs, and leaders who take over",
      "Stalled growth reset: pipeline, forecasting, comp, territories",
    ],
  },
  {
    kicker: "Track 02",
    title: "Real estate investing consulting",
    intro: "For first-time investors who want a candid, numbers-first walkthrough from an active operator.",
    items: [
      "Your first deal: goals, budget, realistic timeline",
      "Choosing a market and property type that fits your life",
      "Underwriting: rent comps, cap rate, cash flow, deal breakers",
      "Financing: conventional, DSCR, partnerships, lender criteria",
      "Self-managing vs. property manager, and running year one",
    ],
  },
];

export function Expertise() {
  return (
    <section id="services" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          {tracks.map((t) => (
            <div key={t.title}>
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
