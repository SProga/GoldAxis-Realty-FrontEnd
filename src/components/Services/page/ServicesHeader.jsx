export default function ServicesHeader({ hero }) {
  if (!hero) return null;

  return (
    <section className="border-b border-foreground/10 px-6 py-16 text-center md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[760px] flex-col items-center">
        {hero?.eyebrow && (
          <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
            {hero.eyebrow}
          </div>
        )}

        {hero?.title && (
          <h1 className="mt-4 font-display text-[36px] uppercase leading-[1.08] text-foreground md:text-[46px] lg:text-[52px]">
            {hero.title}
          </h1>
        )}

        {hero?.description && (
          <p className="mt-5 max-w-[650px] font-sans ga_text_sm font-light leading-6 text-muted">
            {hero.description}
          </p>
        )}
      </div>
    </section>
  );
}
