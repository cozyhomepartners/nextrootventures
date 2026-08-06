import img1 from "@/assets/img1.png.asset.json";
import img2 from "@/assets/img2.png.asset.json";
import img3 from "@/assets/img3.png.asset.json";

const items = [
  {
    img: img1.url,
    alt: "Founder presenting a sales strategy on a whiteboard",
    title: "Sales Coaching",
    body: "With years of proven SaaS sales and sales leader experience in diverse industries, I want to be hands-on in helping you to define your pitch, identify ideal customer profile, experiment with different pricing models, close businesses, build the sales playbook, and repeat.",
  },
  {
    img: img2.url,
    alt: "Hiring manager shaking hands with a candidate",
    title: "Talent Recruiting",
    body: "Are you transitioning from founder-led sales and not sure the best way to recruit or assess the sales candidates? Having done hundreds of interviews in top tier companies, let's figure out the best candidate profiles and recruiting process for the stage of your growth plan.",
  },
  {
    img: img3.url,
    alt: "Team mapping out a go-to-market plan on a table",
    title: "Strategy Planning",
    body: 'Not sure how to launch a new product, build a repeatable sales process, setting quota and sales compensation plan, new market expansion, pricing model, and many other "firsts"? We can co-author a strategy or experimentation that fits with company\'s growth plan.',
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-18">
      <div className="mx-auto w-full max-w-[1321px] px-6 md:px-12">
        <span className="eyebrow mb-4">What we do</span>
        <h2 className="mb-12">Expertise</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article
              key={i.title}
              className="h-full rounded-lg border border-card-mint-border bg-card-mint p-2"
            >
              <img src={i.img} alt={i.alt} className="w-full rounded-lg" loading="lazy" />
              <div className="p-4">
                <h3 className="mb-2">{i.title}</h3>
                <p className="text-navy">{i.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}