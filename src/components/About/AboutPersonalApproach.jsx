import Image from "next/image";
import { HighlightText, RenderText } from "@/components/UI/Helpers/helpers";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/UI/Button/Button";
import AboutEyebrow from "./AboutEyebrow";
import AboutReveal from "./AboutReveal";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function AboutPersonalApproach({
  data,
  contactHref = "mailto:info@prestigeestates.com",
}) {
  const image = data.personal_image;
  return (
    <section
      id="personal-approach"
      aria-labelledby="personal-approach-title"
      className="relative isolate scroll-mt-8 overflow-hidden border-b border-foreground/5"
    >
      <AboutReveal
        direction="left"
        className="relative h-80 md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-1/2"
      >
        {image?.url && (
          <ImageRenderer
            src={image.url}
            alt={image.alternativeText || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_30%]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-l" />
      </AboutReveal>
      <div className="relative mx-auto grid max-w-[1200px] px-6 md:grid-cols-2">
        <AboutReveal
          delay={0.15}
          className="py-12 md:col-start-2 md:py-20 md:pl-8"
        >
          <AboutEyebrow>{data.personal_eyebrow}</AboutEyebrow>
          <h2
            id="personal-approach-title"
            className="text-3xl leading-tight md:text-4xl"
          >
            <HighlightText text={data.personal_title ?? ""} />
            {data.personal_subtitle && (
              <span className="block">
                <HighlightText text={data.personal_subtitle} />
              </span>
            )}
          </h2>
          <p className="mt-5 max-w-[530px] whitespace-pre-line text-base leading-7 text-muted">
            {RenderText(data.personal_description ?? "")}
          </p>
          <ButtonLink
            href={contactHref}
            className="mt-6 inline-flex items-center gap-8"
          >
            Let’s talk <ArrowRight size={18} />
          </ButtonLink>
        </AboutReveal>
      </div>
    </section>
  );
}
