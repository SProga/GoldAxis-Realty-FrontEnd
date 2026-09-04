import ImageRenderer from "../../UI/ImageRenderer/ImageRenderer";
import { ButtonLink } from "../../UI/Button/Button";

export default function ServicesPreviewHeader({ hero }) {
  if (!hero) return null;

  const background_image = hero?.backgroundImage;
  const has_background = !!background_image?.url;

  const alignment_classes = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <section
      className={`relative overflow-hidden border-b border-foreground/10 px-6 ${
        has_background ? "min-h-[420px]" : "py-16 md:py-20"
      }`}
    >
      {has_background && (
        <div className="absolute inset-0">
          <ImageRenderer
            src={background_image.url}
            alt={background_image.alternativeText || hero?.title || ""}
            fill
            className="object-cover"
          />
        </div>
      )}

      {has_background && hero?.overlay && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      <div
        className={`relative z-10 mx-auto flex max-w-[1200px] flex-col justify-center ${
          has_background ? "min-h-[420px]" : ""
        } ${alignment_classes[hero?.alignment] || alignment_classes.center}`}
      >
        {hero?.eyebrow && (
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            {hero.eyebrow}
          </div>
        )}

        {hero?.title && (
          <h1 className="mt-3 max-w-[760px] font-display text-[36px] uppercase leading-[1.05] text-foreground md:text-[48px]">
            {hero.title}
          </h1>
        )}

        {hero?.description && (
          <div className="mt-4 max-w-[650px] font-sans ga_text_sm font-light leading-6 text-muted">
            {hero.description}
          </div>
        )}

        {hero?.button?.label && hero?.button?.link && (
          <ButtonLink href={hero.button.link} className="mt-6 inline-flex">
            {hero.button.label}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
