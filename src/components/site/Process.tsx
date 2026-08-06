const steps = [
  {
    n: "01",
    title: "Diagnostic",
    body: "Two weeks inside your funnel, calls, and data. You get a written assessment and a prioritized plan.",
  },
  {
    n: "02",
    title: "Build",
    body: "We install the motion: ICP, messaging, pipeline process, pricing, and the metrics that govern them.",
  },
  {
    n: "03",
    title: "Hire and ramp",
    body: "Scorecards, interview loops, onboarding, and coaching for the reps and leaders who take it over.",
  },
  {
    n: "04",
    title: "Hand off",
    body: "Documented playbook and a full-time leader in seat. The goal is to make the role unnecessary.",
  },
];

export function Process() {
  return (
    <section id="engagement" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="eyebrow-muted">How an engagement runs</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-rule pt-4">
              <span className="text-xs tracking-[0.18em] text-rust">{s.n}</span>
              <h3 className="mt-3 text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
