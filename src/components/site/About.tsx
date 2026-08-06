import about from "@/assets/about.png.asset.json";
import upArrow from "@/assets/up-arrow.png.asset.json";
import downArrow from "@/assets/down-arrow.png.asset.json";

export function About() {
  return (
    <section id="about" className="pt-24 pb-14 lg:pt-32">
      <div className="mx-auto w-full max-w-[1321px] px-6 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="w-full max-w-[500px]">
            <span className="eyebrow mb-4">About</span>
            <h2 className="mb-8">Tailored Solutions for Startup Success</h2>
            <p className="mb-6 text-muted-foreground">
              Annual Recurring Revenue (ARR) is the most critical revenue metric for successful and
              profitable SaaS companies. I specialize in helping businesses transition from zero to
              one by accelerating product-market fit, establishing early sales playbooks,
              experimenting with pricing models, coaching sales representatives, and recruiting top
              talent. At Scale GTM, our goal is to assist you in achieving your next milestone,
              whether it is the first $100k, to $1M, to $10M, to $100M in ARR.
            </p>
            <p className="text-muted-foreground">
              Charles has a rich background as an early employee and a leader at Google, Blind,
              HackerRank, and LinkedIn. Throughout his sales career, he and his teams have closed
              over $100 million in business and led teams over 80+ people. He holds a BS in
              Electrical and Computer Engineering with a minor in Computer Science from the
              University of Illinois, Urbana-Champaign.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[531px]">
            <img
              src={upArrow.url}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-12 h-full w-auto object-contain md:-left-16"
            />
            <img
              src={downArrow.url}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-12 h-full w-auto object-contain md:-right-16"
            />
            <img
              src={about.url}
              alt="Charles Hsieh with his family"
              className="relative z-10 w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}