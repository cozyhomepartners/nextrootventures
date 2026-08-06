import profile from "@/assets/profile.png.asset.json";

const record = [
  "Scaled products from $0 to $6M, $8M, and double digit millions in ARR",
  "Built GTM orgs from first hire to 50+ across AE, SDR, SE, and ops",
  "Landed enterprise logos including Rivian, Amazon, Chewy, and Salesforce",
  "President's Club and Global Rep of the Year at LinkedIn",
  "Engineering background, fluent with product and technical buyers",
];

export function About() {
  return (
    <section id="track-record" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <span className="eyebrow-muted">Track record</span>
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_18rem] md:items-start">
          <ul className="space-y-4">
            {record.map((r) => (
              <li key={r} className="flex gap-4 border-t border-rule pt-4 text-base text-ink">
                <span className="text-rust">—</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div>
            <img
              src={profile.url}
              alt="Charles Hsieh"
              loading="lazy"
              className="h-40 w-40 rounded-full object-cover"
            />
            <p className="mt-5 text-sm text-ink-soft">
              I am Charles Hsieh, a four-time revenue leader and founder of Scale GTM. I work with a
              small number of seed to Series B teams at a time so the work stays hands-on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
