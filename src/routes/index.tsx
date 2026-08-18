import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Expertise } from "@/components/site/Expertise";
import { Process } from "@/components/site/Process";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const title = "NextRoot Ventures | GTM & Real Estate Investing Consulting";
const description =
  "NextRoot Ventures — Charles Hsieh's consulting practice: fractional go-to-market leadership for founders and hands-on guidance for new real estate investors.";
const url = "https://tryscalegtm.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", name: "NextRoot Ventures", url },
            {
              "@type": "Organization",
              name: "NextRoot Ventures",
              url,
              description,
              founder: { "@type": "Person", name: "Charles Hsieh" },
            },
            {
              "@type": "Person",
              name: "Charles Hsieh",
              jobTitle: "Founder, NextRoot Ventures",
              url,
              sameAs: ["https://www.linkedin.com/in/charleschsieh/", "https://charleshsieh.com/"],
            },
            {
              "@type": "Service",
              name: "Tech go-to-market consulting",
              serviceType: "Fractional sales and GTM leadership",
              description:
                "V1 GTM playbooks, pricing and packaging, founder-led sales handoff, and first sales hires for seed to Series B founders.",
              provider: { "@type": "Organization", name: "NextRoot Ventures" },
              areaServed: "US",
            },
            {
              "@type": "Service",
              name: "Real estate investing consulting",
              serviceType: "Real estate investing advisory",
              description:
                "How to get started in real estate investing: market selection, underwriting, financing, management, and portfolio P&L tracking.",
              provider: { "@type": "Organization", name: "NextRoot Ventures" },
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
        <Testimonials />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

