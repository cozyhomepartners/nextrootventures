import { Mail } from "lucide-react";
import { CALENDLY, SCALE_GTM } from "./Header";

export function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-24 md:px-10">
        <span className="eyebrow">Fractional sales leadership</span>
        <h1 className="mt-6 max-w-[52rem] text-ink">
          A revenue leader who has done it four times, without the full-time hire
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-ink-soft">
          Fractional VP of Sales and GTM leadership for seed to Series B founders.
        </p>
        <p className="mt-6 max-w-xl text-base text-ink-soft">
          Most startups hire a VP of Sales too early, too expensively, and against a motion nobody
          has proven yet. I come in part-time to prove the motion, build the playbook, hire the team
          that runs it, and then hand it over.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Book a 30-minute call
          </a>
          <a
            href={SCALE_GTM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-rule px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Scale GTM ↗
          </a>
        </div>
      </div>
    </section>
  );
}
