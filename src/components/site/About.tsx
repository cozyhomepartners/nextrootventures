const record = [
  "Scaled products from $0 to $6M, $8M, and double digit millions in ARR",
  "Built GTM orgs from first hire to 50+ across AE, SDR, SE, and ops",
  "Landed enterprise logos including Rivian, Amazon, Chewy, and Salesforce",
  "Consistent President's Club recipient as both an IC and a manager",
  "Engineering background: fluent with technical buyers and effective across cross-functional teams",
];

export function About() {
  return (
    <section id="track-record" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-title">Track record</h2>
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
