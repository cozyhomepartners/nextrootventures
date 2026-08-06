import { Mail } from "lucide-react";
import { CALENDLY, LINKEDIN } from "./Header";
import family from "@/assets/family.jpg.asset.json";

export function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-24 pb-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="eyebrow">Fractional sales leadership</span>
          <h1 className="mt-6 max-w-[34rem] text-ink">Sales leadership without the full-time hire</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink-soft">
            Fractional VP of Sales and GTM leadership for seed to Series B founders.
          </p>
          <p className="mt-6 max-w-xl text-base text-ink-soft">
            Most startups hire a VP of Sales too early, too expensively, and against a motion nobody
            has proven yet. I come in part-time to prove the motion, build the playbook, hire the
            team that runs it, and then hand it over.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Free consultation
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-rule px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            LinkedIn ↗
          </a>
          </div>
        </div>
        <div className="border border-rule">
          <img
            src={family.url}
            alt="Charles Hsieh with his family outdoors"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
