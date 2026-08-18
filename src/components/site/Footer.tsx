import { CALENDLY, LINKEDIN, Wordmark } from "./Header";

export function Footer() {
  return (
    <footer id="contact" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h2 className="max-w-none text-ink">Let's figure out your next move.</h2>
        <p className="mt-4 max-w-none text-base text-ink-soft">
          Whether it is your first sales playbook or your first rental property, start with a free
          consultation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Free consultation
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-rule px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 text-xs tracking-[0.14em] text-ink-soft uppercase">
          <Wordmark className="text-ink" />
          <span>Charles Hsieh — San Francisco, CA</span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn ↗
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
