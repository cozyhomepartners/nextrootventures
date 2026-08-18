import { Mail } from "lucide-react";
import { CALENDLY, LINKEDIN } from "./Header";
import family from "@/assets/family.jpg.asset.json";

export function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-12 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="eyebrow">Go-to-market & real estate consulting</span>
          <h1 className="mt-6 max-w-[34rem] text-ink">
            Build revenue. Build roots.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink-soft">
            NextRoots Ventures is Charles Hsieh's consulting practice: tech go-to-market leadership
            for founders, and hands-on guidance for people getting started in real estate investing.
          </p>
          <p className="mt-6 max-w-xl text-base text-ink-soft">
            Two decades building and scaling revenue teams at Google, LinkedIn, Blind, and
            venture-backed startups — plus an active single-family rental portfolio and the tools
            built around it.
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
            alt="Charles Hsieh with his wife and two children outdoors"
            className="aspect-[4/5] w-full object-cover"
          />
          <p className="border-t border-rule px-4 py-3 text-xs tracking-[0.14em] text-ink-soft uppercase">
            Husband, father of two, San Francisco
          </p>
        </div>
      </div>
    </section>
  );
}
