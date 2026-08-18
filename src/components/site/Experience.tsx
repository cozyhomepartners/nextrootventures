import blind from "@/assets/co-blind.png";
import switchboard from "@/assets/co-switchboard.png";
import google from "@/assets/co-google.png";
import hackerrank from "@/assets/co-hackerrank.png";
import linkedin from "@/assets/co-linkedin.png";
import agilent from "@/assets/co-agilent.png";
import utc from "@/assets/co-united_technologies.png";

type Role = { title: string; dates: string; points: string[] };
type Company = { name: string; logo?: string; roles: Role[] };

const companies: Company[] = [
  {
    name: "Blind — anonymous professional network (15M+ users)",
    logo: blind,
    roles: [
      {
        title: "Advisor to CEO",
        dates: "Jun 2026 – Present",
        points: ["Advising the CEO on go-to-market strategy, product direction, and US market expansion."],
      },
      {
        title: "Vice President of Sales and Product, North America",
        dates: "Feb 2023 – May 2026",
        points: [
          "Designed, built, and sold new SaaS and Ads products for the US market; scaled $0 to $6M ARR in two years, landing 50 large logos including Rivian, Amazon, Chewy, and Salesforce.",
          "Led a 15-person GTM team plus four dotted-line software engineers.",
        ],
      },
    ],
  },
  {
    name: "Switchboard Software",
    logo: switchboard,
    roles: [
      {
        title: "Vice President of Sales",
        dates: "Sep 2022 – Jan 2023",
        points: [
          "Closed $4M total ARR in 2022 ($1M in Q4), leading a 10-person GTM team of AEs, SDR, solutions engineering, and sales ops.",
        ],
      },
    ],
  },
  {
    name: "Google",
    logo: google,
    roles: [
      {
        title: "Head of Sales, Google Workspace Essentials",
        dates: "Sep 2019 – Sep 2021",
        points: [
          "Grew an incubation SaaS product from $0 to $8M ARR in two years and closed 50+ enterprise logos before it was absorbed by Google Cloud Sales.",
          "Led an 8-person sales team (AEs, SDRs, ops), reporting to the VP of Product.",
        ],
      },
      {
        title: "Head of Sales, Hire by Google",
        dates: "Sep 2016 – Aug 2019",
        points: [
          "Took a new product from $0 to $25M ARR and 3,000+ customers across idea, beta, and public launch in three years.",
          "Led a 50-person global team; promoted twice in three years from first sales rep to global head of sales.",
        ],
      },
    ],
  },
  {
    name: "HackerRank",
    logo: hackerrank,
    roles: [
      {
        title: "Director, Solutions Engineering",
        dates: "Oct 2013 – Jul 2016",
        points: [
          "Generated and supported $5.8M (2014), $10M (2015), and $7M (2016 H1) in sales, leading 14 solutions engineers across the US and India.",
        ],
      },
    ],
  },
  {
    name: "LinkedIn",
    logo: linkedin,
    roles: [
      {
        title: "Senior Enterprise Account Manager",
        dates: "Feb 2010 – Sep 2013",
        points: [
          "President's Club 2010, 2011, 2012 at 179%, 140%, and 159% of quota.",
          "Global Sales Rep of the Year 2010 and 2011; first global Account Manager hire, promoted three times in three years.",
        ],
      },
    ],
  },
  {
    name: "Agilent Technologies",
    logo: agilent,
    roles: [
      {
        title: "Strategic Account Executive",
        dates: "Jul 2007 – Nov 2009",
        points: ["135% of quota in 2008 (President's Club) and 115% of quota in 2009."],
      },
    ],
  },
  {
    name: "United Technologies",
    logo: utc,
    roles: [
      {
        title: "Software Engineer",
        dates: "Jul 2006 – Jun 2007",
        points: [
          "Built a C++ simulation of all Boeing 787 system errors, cutting testing costs by $2M annually.",
        ],
      },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="eyebrow-muted">Experience</h2>
        <div className="mt-12 space-y-12">
          {companies.map((c) => (
            <div key={c.name} className="border-t border-rule pt-6">
              <div className="flex items-center gap-3">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt=""
                    className="h-6 w-6 object-contain grayscale"
                    loading="lazy"
                  />
                )}
                <h3 className="text-ink">{c.name}</h3>
              </div>
              <div className="mt-6 space-y-6">
                {c.roles.map((r) => (
                  <div key={r.title} className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
                    <div>
                      <p className="text-sm font-medium text-ink">{r.title}</p>
                      <p className="mt-1 text-xs tracking-[0.14em] text-ink-soft uppercase">
                        {r.dates}
                      </p>
                    </div>
                    <ul className="mt-3 space-y-2 md:mt-0">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-ink-soft">
                          <span className="text-rust">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
