const quotes = [
  {
    quote:
      "Charles was a great asset in our initial go-to-market planning and implementation, from advisory work to designing a playbook, pricing structure, and objection handling. He provided us with the framework and processes to scale our revenue.",
    author: "Simon Zhang",
    role: "Founder, GrowingIO",
  },
  {
    quote:
      "Charles has been an incredible advisor from our pre-launch days designing GTM strategy through the challenges of scaling. His expertise building sales teams from the ground up has been a guiding pillar.",
    author: "Sargun Kaur",
    role: "Co-Founder, Byteboard",
  },
  {
    quote:
      "Charles has a strong understanding of how to build an effective sales organization and knows how to communicate those insights to entrepreneurs and executives. An invaluable advisor.",
    author: "Michael Choi",
    role: "Founder, Coding Dojo",
  },
  {
    quote:
      "Charles has been fundamental to our revenue success. He gave us a detailed playbook for customer calls, coaching structures, and strategy reviews, and helped us hire the right talent.",
    author: "Wilian Iralzabal",
    role: "Founder, Zabal Media",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="eyebrow-muted">What founders say</h2>
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.author} className="border-t border-rule pt-5">
              <blockquote className="text-base text-ink">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-xs tracking-[0.14em] text-ink-soft uppercase">
                {q.author} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
