import footer1 from "@/assets/footer1.png.asset.json";
import footer2 from "@/assets/footer2.png.asset.json";
import { CALENDLY } from "./Header";

export function Footer() {
  return (
    <footer id="contactme" className="px-4 pb-8 md:px-8">
      <div className="relative overflow-hidden rounded-lg bg-navy py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${footer1.url})` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${footer2.url})` }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1321px] px-6 text-center md:px-12">
          <h2 className="text-gradient-brand">Contact Me</h2>
          <p className="mt-2 mb-8 text-base font-bold tracking-wide text-white uppercase">
            Let's get started with your Scalable sales strategy!
          </p>
          <a href={CALENDLY}>
            <button className="h-[50px] rounded-md bg-mint px-6 text-lg font-semibold text-navy transition-colors hover:bg-mint-bright">
              Get Started
            </button>
          </a>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold uppercase text-steel">
            <li>San Francisco, CA</li>
            <li>Scale GTM Advisors</li>
            <li>Copyright © 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}