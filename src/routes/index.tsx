import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Expertise } from "@/components/site/Expertise";
import { Process } from "@/components/site/Process";
import { Experience } from "@/components/site/Experience";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const title = "Fractional Sales & Real Estate Consulting | NextRoot Ventures";
const description =
  "Charles Hsieh offers fractional sales leadership and GTM consulting for startup founders, plus real estate investment consulting. Book a free consultation.";
const url = "https://nextrootventures.com/";

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
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": `${url}#website`, name: "NextRoot Ventures", url },
            {
              "@type": "Organization",
              "@id": `${url}#organization`,
              name: "NextRoot Ventures",
              url,
              description,
              founder: { "@id": `${url}#charles-hsieh` },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Consulting services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@id": `${url}#gtm-consulting` } },
                  { "@type": "Offer", itemOffered: { "@id": `${url}#real-estate-consulting` } },
                ],
              },
            },
            {
              "@type": "Person",
              "@id": `${url}#charles-hsieh`,
              name: "Charles Hsieh",
              jobTitle: "Founder, NextRoot Ventures",
              url,
              sameAs: ["https://www.linkedin.com/in/chsieh", "https://charleshsieh.com/"],
            },
            {
              "@type": "Service",
              "@id": `${url}#gtm-consulting`,
              name: "Fractional sales leadership and tech go-to-market consulting",
              url: `${url}#services`,
              serviceType: "Fractional sales and GTM leadership",
              description:
                "V1 GTM playbooks, pricing and packaging, founder-led sales handoff, and first sales hires for seed to Series B founders.",
              provider: { "@id": `${url}#organization` },
              areaServed: "US",
            },
            {
              "@type": "Service",
              "@id": `${url}#real-estate-consulting`,
              name: "Real estate investment consulting",
              url: `${url}#services`,
              serviceType: "Real estate investing advisory",
              description:
                "How to get started in real estate investing: market selection, underwriting, financing, management, and portfolio P&L tracking.",
              provider: { "@id": `${url}#organization` },
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
      </main>
      <Footer />
    </div>
  );
}

