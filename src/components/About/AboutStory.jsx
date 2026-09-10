import Image from "next/image";
import AboutEyebrow from "./AboutEyebrow";
import AboutFeatureList from "./AboutFeatureList";
import AboutReveal from "./AboutReveal";

const features = [
  { id: "local", icon: "House", title: "Local Knowledge", description: "In-depth understanding of the Barbados market" },
  { id: "personal", icon: "Heart", title: "Personalised Service", description: "Your goals are my priority" },
  { id: "results", icon: "Gem", title: "Exceptional Results", description: "Committed to your success" },
];

export default function AboutStory({ image = "/demo_home.jpg" }) {
  return (
    <section aria-labelledby="about-story-title" className="border-b border-foreground/5 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1152px] items-center gap-12 lg:grid-cols-[1.05fr_1fr_0.6fr] lg:gap-10">
        <AboutReveal direction="left" className="relative mb-5 mr-4">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 inset-4 rounded border border-primary/80" />
          <div className="relative aspect-[1.1] overflow-hidden rounded">
            <Image src={image} alt="Contemporary property with a private swimming pool" fill sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-3 rounded border border-primary bg-background px-6 py-4">
            <p className="font-display text-3xl text-primary">2009</p>
            <p className="mt-1 text-xs uppercase tracking-wider">Established</p>
            <span aria-hidden="true" className="mt-4 block h-px w-8 bg-primary" />
          </div>
        </AboutReveal>
        <AboutReveal delay={0.1}>
          <AboutEyebrow>Our Story</AboutEyebrow>
          <h2 id="about-story-title" className="text-3xl leading-tight md:text-4xl">Built on Passion<br />For <span className="text-primary">Barbados</span></h2>
          <p className="mt-6 text-sm leading-6 text-muted">Founded in 2009, Prestige Estates has grown from a passion for exceptional properties and the belief that real estate is more than transactions — it’s about people, lifestyle and opportunity.</p>
          <p className="mt-4 text-sm leading-6 text-muted">As an independent, locally based agent, I offer a personal, hands-on approach with the flexibility and dedication that only a boutique service can provide. Every client receives my full attention, honest advice and a commitment to achieving the best possible results.</p>
          <p className="mt-7 font-display italic text-primary">Prestige Estates</p>
        </AboutReveal>
        <AboutReveal delay={0.2} className="border-t border-foreground/15 pt-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"><AboutFeatureList features={features} /></AboutReveal>
      </div>
    </section>
  );
}
