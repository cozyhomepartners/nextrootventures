import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Testimonials } from "@/components/site/Testimonials";
import { Expertise } from "@/components/site/Expertise";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

const title = "Scale GTM | Sales Strategy Advisor for Early Stage Founders";
const description =
  "Scale GTM helps early stage startup founders build a 10x sales strategy through sales coaching, talent recruiting, and go-to-market strategy planning.";

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
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Expertise />
        <About />
      </main>
      <Footer />
    </div>
  );
}
