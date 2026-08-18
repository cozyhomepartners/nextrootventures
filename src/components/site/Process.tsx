const steps = [
  {
    n: "01",
    title: "Diagnostic",
    body: "A working session or two inside the real numbers — your funnel and calls, or your budget and target market. You get a written assessment and a prioritized plan.",
  },
  {
    n: "02",
    title: "Build",
    body: "We install the plan: motion, pricing, and metrics for GTM; market, criteria, and underwriting model for real estate.",
  },
  {
    n: "03",
    title: "Execute together",
    body: "Live coaching through the hard parts — the first hires and deals, or the first offers, inspections, and tenants.",
  },
  {
    n: "04",
    title: "Hand off",
    body: "A documented playbook and the confidence to run it without me. The goal is to make the role unnecessary.",
  },
];

export function Process() {
  return (
    <section id="engagement" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
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
