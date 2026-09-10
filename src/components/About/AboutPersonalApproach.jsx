import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/UI/Button/Button";
import AboutEyebrow from "./AboutEyebrow";
import AboutReveal from "./AboutReveal";

export default function AboutPersonalApproach({ image = "/about-owner-v1.png", contactHref = "mailto:info@prestigeestates.com" }) {
  return (
    <section id="personal-approach" aria-labelledby="personal-approach-title" className="relative isolate scroll-mt-8 overflow-hidden border-b border-foreground/5">
      <AboutReveal direction="left" className="relative h-80 md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-1/2">
        <Image src={image} alt="Your personal real estate advisor" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-l" />
      </AboutReveal>
      <div className="relative mx-auto grid max-w-[1200px] px-6 md:grid-cols-2">
        <AboutReveal delay={0.15} className="py-12 md:col-start-2 md:py-20 md:pl-8">
          <AboutEyebrow>A Personal Approach</AboutEyebrow>
          <h2 id="personal-approach-title" className="text-3xl leading-tight md:text-4xl">Real Estate<br />with a <span className="text-primary">Human Touch</span></h2>
          <p className="mt-5 max-w-[530px] text-base leading-7 text-muted">As a solo operator, I work directly with every client, ensuring a consistent, transparent and personalised experience from start to finish. You’ll always deal with me — no call centres, no handoffs, just dedicated support whenever you need it.</p>
          <ButtonLink href={contactHref} className="mt-6 inline-flex items-center gap-8">Let’s talk <ArrowRight size={18} /></ButtonLink>
        </AboutReveal>
      </div>
    </section>
  );
}
