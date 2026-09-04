import { ButtonLink } from "@/components/UI/Button/Button";

export default function ServicesFooterCTA({ cta }) {
  if (!cta) return null;

  return (
    <section className="border-y border-foreground/10 px-6 py-16 text-center md:py-20">
      <div className="mx-auto flex max-w-[650px] flex-col items-center">
        {cta?.title && (
          <h2 className="font-display text-[28px] uppercase leading-tight text-foreground md:text-[34px]">
            {cta.title}
          </h2>
        )}

        {cta?.description && (
          <p className="mt-4 max-w-[560px] font-sans ga_text_sm font-light leading-6 text-muted">
            {cta.description}
          </p>
        )}

        {cta?.button?.label && cta?.button?.link && (
          <ButtonLink href={cta.button.link} className="mt-6 inline-flex">
            {cta.button.label}
          </ButtonLink>
        )}
      </div>
    </section>
  );
}
