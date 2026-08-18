const record = [
  "Scaled products from $0 to $6M, $8M, and double digit millions in ARR",
  "Built GTM orgs from first hire to 50+ across AE, SDR, SE, and ops",
  "Landed enterprise logos including Rivian, Amazon, Chewy, and Salesforce",
  "Consistent President's Club recipient as both an IC and a manager",
  "Engineering background: fluent with technical buyers and effective across cross-functional teams",
  "Active single-family rental investor and operator",
];

export function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="eyebrow-muted">About Charles</h2>
        <p className="mt-6 max-w-2xl text-base text-ink-soft">
          I moved from Taiwan when I was twelve, chasing the American dream. I studied electrical and
          computer engineering at Illinois, spent two decades building revenue teams at companies
          from seed stage to Google scale, and started investing in single-family rentals along the
          way. NextRoots Ventures is where both halves of that work live.
        </p>
        <ul className="mt-12 space-y-4">
          {record.map((r) => (
            <li key={r} className="flex gap-4 border-t border-rule pt-4 text-base text-ink">
              <span className="text-rust">—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
