import { HighlightText, RenderText } from "@/components/UI/Helpers/helpers";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/UI/Button/Button";
import AboutEyebrow from "./AboutEyebrow";
import AboutReveal from "./AboutReveal";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function AboutHero({ data }) {
  const image = data.hero_image?.[0];
  return (
    <section className="relative isolate overflow-hidden border-b border-foreground/10">
      {image?.url && (
        <ImageRenderer
          src={image.url}
          alt={image.alternativeText || ""}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/10" />
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:relative lg:min-h-[570px]">
        <AboutReveal className="max-w-[610px]">
          <AboutEyebrow>{data.hero_eyebrow}</AboutEyebrow>
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-[54px]">
            <HighlightText text={data.hero_title ?? ""} lineBreak />
          </h1>
          <p className="mt-6 max-w-[510px] whitespace-pre-line text-base leading-7 text-foreground/80">
            {RenderText(data.hero_description ?? "")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <ButtonLink
              href="#personal-approach"
              className="inline-flex items-center gap-6"
            >
              Get in touch <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </AboutReveal>
        {data.hero_tagline && (
          <AboutReveal
            delay={0.2}
            className="mt-10 w-fit rounded border border-primary/20 bg-background/85 p-6 backdrop-blur-sm lg:absolute lg:bottom-5 lg:right-6"
          >
            <span
              aria-hidden="true"
              className="mb-4 block h-px w-8 bg-primary"
            />
            <p className="font-display text-lg leading-snug">
              {RenderText(data.hero_tagline ?? "")}
            </p>
            <span
              aria-hidden="true"
              className="mt-4 block h-px w-8 bg-primary"
            />
          </AboutReveal>
        )}
      </div>
    </section>
  );
}
