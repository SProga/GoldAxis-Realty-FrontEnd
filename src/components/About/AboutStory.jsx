import { HighlightText, RenderText } from "@/components/UI/Helpers/helpers";
import AboutEyebrow from "./AboutEyebrow";
import AboutFeatureList from "./AboutFeatureList";
import AboutReveal from "./AboutReveal";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function AboutStory({ data }) {
  const image = data.story_image;
  return (
    <section
      aria-labelledby="about-story-title"
      className="border-b border-foreground/5 px-6 py-16 md:py-28"
    >
      <div className="mx-auto grid max-w-[1152px] items-center gap-12 lg:grid-cols-[1.05fr_1fr_0.6fr] lg:gap-10">
        <AboutReveal direction="left" className="relative mb-5 mr-4">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 inset-4 rounded border border-primary/80"
          />
          <div className="relative aspect-[1.1] overflow-hidden rounded">
            {image?.url && (
              <ImageRenderer
                src={image.url}
                alt={image.alternativeText || ""}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            )}
          </div>
          <div className="absolute -bottom-4 -left-3 rounded border border-primary bg-background px-6 py-4">
            <p className="font-display text-3xl">
              <HighlightText text={data?.story_stats} lineBreak={true} />
            </p>
            <span
              aria-hidden="true"
              className="mt-4 block h-px w-8 bg-primary"
            />
          </div>
        </AboutReveal>
        <AboutReveal delay={0.1}>
          <AboutEyebrow>{data.story_eyebrow}</AboutEyebrow>
          <h2
            id="about-story-title"
            className="text-3xl leading-tight md:text-4xl"
          >
            <HighlightText text={data.story_title ?? ""} lineBreak />
          </h2>
          <p className="mt-6 whitespace-pre-line text-sm leading-6 text-muted">
            {RenderText(data.story_description ?? "")}
          </p>
          {data.story_subtitle && (
            <span className="block font-light mt-5 italic uppercase text-primary">
              {data.story_subtitle}
            </span>
          )}
        </AboutReveal>
        <AboutReveal
          delay={0.2}
          className="border-t border-foreground/15 pt-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
        >
          <AboutFeatureList features={data.story_features ?? []} />
        </AboutReveal>
      </div>
    </section>
  );
}
