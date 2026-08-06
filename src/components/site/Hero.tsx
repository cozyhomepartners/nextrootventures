import heroImg from "@/assets/img.png.asset.json";
import arrow from "@/assets/arrow.png.asset.json";
import linkedin from "@/assets/Linkedin.png.asset.json";
import { CALENDLY } from "./Header";

const services = ["Sales Coaching", "Talent Recruiting", "Strategy Planning"];

export function Hero() {
  return (
    <section id="top-hero" className="bg-navy pt-32 pb-16 lg:min-h-screen lg:flex lg:items-center">
      <div className="mx-auto w-full max-w-[1321px] px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="text-gradient-brand text-[clamp(2.75rem,7vw,5.125rem)] font-medium">
              Early stage startup founder?
            </h1>
            <p className="mt-4 mb-12 text-base font-bold tracking-wide text-white uppercase">
              Let's get started with your 10x sales strategy!
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-6">
              <a href={CALENDLY}>
                <button className="h-[50px] rounded-md bg-mint px-6 text-lg font-semibold text-navy transition-colors hover:bg-mint-bright">
                  Free Consultation
                </button>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/chsieh/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Charles Hsieh on LinkedIn"
                >
                  <img src={linkedin.url} alt="LinkedIn" className="h-12 w-12" />
                </a>
                <div>
                  <div className="text-base font-medium text-white">Charles Hsieh</div>
                  <span className="text-xs text-steel">Founder</span>
                </div>
              </div>
            </div>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm font-semibold text-white">
                  <img src={arrow.url} alt="" className="h-4 w-4" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <img
              src={heroImg.url}
              alt="Upward growth arrow illustration"
              className="mx-auto w-full max-w-[520px] lg:-ml-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}