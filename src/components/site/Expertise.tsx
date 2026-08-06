const items = [
  {
    title: "First revenue, from zero",
    body: "Pre-revenue to first repeatable deals: ICP definition, outbound motion, discovery and demo scripts, and the first 10–20 reference logos.",
  },
  {
    title: "Founder-led sales handoff",
    body: "Turn what the founder does intuitively into a documented playbook, then hire and ramp the AEs and SDRs who can run it without you.",
  },
  {
    title: "Pricing and packaging",
    body: "Rebuild pricing, tiers, and contract structure so deal size and win rate move together instead of trading off.",
  },
  {
    title: "Stalled growth reset",
    body: "Diagnose pipeline, conversion, and team performance; rebuild forecasting, comp, and territory design to restart compounding growth.",
  },
];

export function Expertise() {
  return (
    <section id="help" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-title">Where I help</h2>
        <p className="mt-6 max-w-2xl text-base text-ink-soft">
          I am Charles Hsieh, a four-time revenue leader and founder of Scale GTM. I work with a
          small number of seed to Series B teams at a time so the work stays hands-on.
        </p>
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.title}>
              <h3 className="text-ink">{i.title}</h3>
              <p className="mt-2 max-w-lg text-sm text-ink-soft">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
