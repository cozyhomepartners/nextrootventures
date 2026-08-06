import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Expertise } from "@/components/site/Expertise";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Logos } from "@/components/site/Logos";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const title = "Charles Hsieh | Fractional VP of Sales & GTM Leadership";
const description =
  "Charles Hsieh — fractional VP of Sales for seed to Series B founders. Prove the motion, build the playbook, hire the team, hand it over.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://tryscalegtm.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: title,
              url: "https://tryscalegtm.com/",
            },
            {
              "@type": "Person",
              name: "Charles Hsieh",
              jobTitle: "Fractional VP of Sales",
              url: "https://tryscalegtm.com/",
              description,
              sameAs: ["https://www.linkedin.com/in/charleschsieh/"],
            },
            {
              "@type": "Service",
              name: "Fractional VP of Sales & GTM Leadership",
              serviceType: "Fractional sales leadership",
              description:
                "Fractional VP of Sales and GTM leadership for seed to Series B founders: prove the motion, build the playbook, hire the team, hand it over.",
              provider: { "@type": "Person", name: "Charles Hsieh" },
              areaServed: "US",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Process />
        <About />
        <Logos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
