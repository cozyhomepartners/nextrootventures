import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo1 from "@/assets/logo1.svg";
import logo2 from "@/assets/logo2.png.asset.json";
import logo3 from "@/assets/logo3.png.asset.json";
import logo4 from "@/assets/logo4.png.asset.json";

const slides = [
  {
    logo: logo4.url,
    backing: "Backed by Greylock, Matrix Partners",
    quote:
      '"Charles was a great asset in our initial go-to-market planning and implementation. He assisted on multiple fronts, from advisory work, designing a playbook, pricing structure, objection handling, most importantly, how to leverage customer feedback to determine product-market fit quickly. He provided us with the framework and processes to scale our revenue."',
    author: "Simon Zhang",
    role: "Founder",
  },
  {
    logo: logo2.url,
    backing: "Backed by Google, Cowboy Ventures",
    quote:
      "\u201CI met Charles very early on in building Byteboard. He's been an incredible advisor to bounce ideas off of from our pre-launch times when we were designing our GTM launch strategy and building out our sales role, and continues to be incredibly helpful as we encounter a new set of challenges that come with scaling. His deep expertise in building up sales teams from the ground up and in the HR space have been great guiding pillars.\u201D",
    author: "Sargun Kaur",
    role: "Co-Founder",
  },
  {
    logo: logo3.url,
    backing: "Backed by ULU Ventures",
    quote:
      '"Charles has been a great advisor for Coding Dojo as well as other new ventures I\'ve started. Charles is knowledgeable, cares about making a positive impact in the world, and has helped me think more clearly about how to build a product, do customer interviews, and how to think about our go-to-market strategy. Charles has a strong understanding of how to build an effective sales organization and knows how to communicate these insights effectively to entrepreneurs and executives. Charles has been an invaluable advisor for me."',
    author: "Michael Choi",
    role: "Founder",
  },
  {
    logo: logo1,
    backing: "Bootstrap, Profitable",
    quote:
      "\u201CCharles has been fundamental to our revenue success. His attention to detail and experience in the SaaS space has helped us grow tremendously. He not only gave us a detailed playbook on proper customer calls, provided necessary coaching structures, and internal strategy review sessions but also helped us hire the right talent to join our founders who needed sales guidance.\u201D",
    author: "Wilian Iralzabal",
    role: "Founder",
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });

  return (
    <section id="customers" className="overflow-hidden bg-navy py-14 lg:pt-14 lg:pb-28">
      <div className="mx-auto w-full max-w-[1321px] px-6 md:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-4">Customers</span>
            <h2 className="max-w-2xl text-white">Trusted by Leading Innovators</h2>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => embla?.scrollPrev()}
              className="flex h-[50px] w-[50px] items-center justify-center border border-navy-line text-white transition-colors hover:border-mint hover:text-mint"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => embla?.scrollNext()}
              className="flex h-[50px] w-[50px] items-center justify-center border border-navy-line text-white transition-colors hover:border-mint hover:text-mint"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((s) => (
              <article
                key={s.author}
                className="flex min-w-0 shrink-0 grow-0 basis-full flex-col rounded-lg border border-navy-line bg-navy-panel p-8 md:basis-[calc(50%-0.75rem)]"
              >
                <div className="mb-6 flex min-h-20 w-full max-w-[272px] items-center">
                  <img src={s.logo} alt="" className="h-12 w-auto opacity-90" />
                </div>
                <span className="bg-gradient-badge mb-6 block border border-white/10 p-2 text-sm font-semibold text-white">
                  {s.backing}
                </span>
                <p className="mb-8 text-white/90">{s.quote}</p>
                <div className="mt-auto">
                  <div className="text-base font-bold uppercase text-mint">{s.author}</div>
                  <span className="text-sm font-semibold text-white">{s.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}