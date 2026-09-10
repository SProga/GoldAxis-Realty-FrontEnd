import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/UI/Button/Button";
import AboutEyebrow from "./AboutEyebrow";
import AboutReveal from "./AboutReveal";

export default function AboutHero({ image = "/about-hero.png", videoUrl }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-foreground/10">
      <Image src={image} alt="Luxury home and pool at sunset" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/10" />
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:relative lg:min-h-[570px]">
        <AboutReveal className="max-w-[610px]">
          <AboutEyebrow>About Prestige Estates</AboutEyebrow>
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-[54px]">Real Estate,<br /><span className="text-primary">A Higher Standard</span></h1>
          <p className="mt-6 max-w-[510px] text-base leading-7 text-foreground/80">Prestige Estates is a boutique real estate service in Barbados, providing personalised guidance for buyers, sellers and investors who expect more. With deep local knowledge and a commitment to excellence, I help clients find not just a property, but a place to call home.</p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <ButtonLink href="#personal-approach" className="inline-flex items-center gap-6">Get in touch <ArrowRight size={18} /></ButtonLink>
            {videoUrl && <a href={videoUrl} className="text-xs uppercase tracking-wider text-foreground hover:text-primary">Explore Barbados · Watch video</a>}
          </div>
        </AboutReveal>
        <AboutReveal delay={0.2} className="mt-10 w-fit rounded border border-primary/20 bg-background/85 p-6 backdrop-blur-sm lg:absolute lg:bottom-5 lg:right-6">
          <span aria-hidden="true" className="mb-4 block h-px w-8 bg-primary" />
          <p className="font-display text-lg leading-snug">Local Expertise<br />Global Perspective</p>
          <span aria-hidden="true" className="mt-4 block h-px w-8 bg-primary" />
        </AboutReveal>
      </div>
    </section>
  );
}
