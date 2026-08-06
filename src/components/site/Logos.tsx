import logo2 from "@/assets/logo2.png.asset.json";
import logo3 from "@/assets/logo3.png.asset.json";
import logo4 from "@/assets/logo4.png.asset.json";
import zabal from "@/assets/zabal-new.png.asset.json";
import pebblous from "@/assets/pebblous-new.png.asset.json";
import welcome from "@/assets/welcome-new.png.asset.json";
import pathrise from "@/assets/pathrise.svg";

const logos = [
  { src: logo4.url, alt: "GrowingIO" },
  { src: logo2.url, alt: "Byteboard" },
  { src: logo3.url, alt: "Coding Dojo" },
  { src: zabal.url, alt: "Zabal Media", onDark: true },
  { src: pathrise, alt: "Pathrise" },
  { src: welcome.url, alt: "Welcome" },
  { src: pebblous.url, alt: "Pebblous.ai" },
];

export function Logos() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <h2 className="eyebrow-muted">Companies I have worked with</h2>
        <div className="mt-8 flex flex-wrap items-center gap-x-14 gap-y-8">
          {logos.map((l) =>
            l.onDark ? (
              <span key={l.alt} className="inline-flex items-center bg-ink px-3 py-2">
                <img src={l.src} alt={l.alt} loading="lazy" className="h-6 w-auto" />
              </span>
            ) : (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-8 w-auto opacity-70 brightness-0 saturate-0"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
