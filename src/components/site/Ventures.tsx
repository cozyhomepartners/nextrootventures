const ventures = [
  {
    name: "Roofolio",
    href: "https://roofolio.ai/",
    years: "2026 – Present",
    body: "All-in-one tool for real estate investors to identify properties, track P&L, and generate investment recommendations.",
  },
  {
    name: "Cozy Home",
    href: "https://www.cozyhomepartners.com/",
    years: "2024 – Present",
    body: "Real estate investment partnership focused on acquiring and operating single-family rentals.",
  },
  {
    name: "Scale GTM",
    href: "https://tryscalegtm.com/",
    years: "2022 – Present",
    body: "The go-to-market practice inside NextRoots: V1 playbooks, pricing, and first sales hires for founder-led teams.",
  },
  {
    name: "VacayBug",
    years: "2015 – 2016",
    href: "http://www.vacaybug.com/",
    body: "Pre-AI social travel site reaching 2K+ monthly visitors; featured on Product Hunt and travel blogs.",
  },
];

export function Ventures() {
  return (
    <section id="ventures" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h2 className="eyebrow-muted">Ventures & projects</h2>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {ventures.map((v) => (
            <div key={v.name} className="border-t border-rule pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-ink">
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-rust decoration-2 underline-offset-4"
                  >
                    {v.name} ↗
                  </a>
                </h3>
                <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">{v.years}</span>
              </div>
              <p className="mt-2 max-w-lg text-sm text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
