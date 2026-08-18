import logo2 from "@/assets/logo2.png.asset.json";
import logo3 from "@/assets/logo3.png.asset.json";
import logo4 from "@/assets/logo4.png.asset.json";
import zabal from "@/assets/zabal-mono.png.asset.json";
import pebblous from "@/assets/pebblous-new.png.asset.json";
import welcome from "@/assets/welcome-new.png.asset.json";
import pathrise from "@/assets/pathrise.svg";

const logos = [
  { src: logo4.url, alt: "GrowingIO" },
  { src: logo2.url, alt: "Byteboard" },
  { src: logo3.url, alt: "Coding Dojo" },
  { src: zabal.url, alt: "Zabal Media", plain: true, size: "h-5" },
  { src: pathrise, alt: "Pathrise" },
  { src: welcome.url, alt: "Welcome", plain: true },
  { src: pebblous.url, alt: "Pebblous.ai", plain: true },
];

const quotes = [
  {
    quote:
      "Charles was a great asset in our go-to-market planning and implementation — playbook, pricing, objection handling. He gave us the framework and process to scale revenue.",
    author: "Simon Zhang",
    role: "Founder, GrowingIO",
  },
  {
    quote:
      "Charles has been an incredible advisor from pre-launch GTM strategy through the challenges of scaling. His expertise building sales teams from scratch has been a guiding pillar.",
    author: "Sargun Kaur",
    role: "Co-Founder, Byteboard",
  },
  {
    quote:
      "Charles has been fundamental to our revenue success — a detailed playbook for customer calls, coaching, and strategy reviews, plus help hiring the right talent.",
    author: "Wilian Iralzabal",
    role: "Founder, Zabal Media",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h2 className="eyebrow-muted">Companies I have worked with</h2>
        <div className="mt-8 flex items-center gap-8 overflow-x-auto pb-2 scrollbar-hide">
          {logos.map((l) =>
            l.plain ? (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={`${l.size ?? "h-8"} w-auto shrink-0 mix-blend-multiply grayscale contrast-[2.2] opacity-80`}
              />
            ) : (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-8 w-auto shrink-0 opacity-70 brightness-0 saturate-0"
              />
            ),
          )}
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.author} className="border-t border-rule pt-5">
              <blockquote className="text-sm text-ink">“{q.quote}”</blockquote>
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
