export default function FAQIntro() {
  return (
    <aside className="flex flex-col justify-between pb-4 pt-8 lg:pt-14">
      <div className="max-w-[360px]">
        <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-primary">
          FAQ
        </p>

        <div className="mt-6 h-px w-full max-w-[180px] bg-primary/80" />

        <h1 className="mt-6 font-display text-[60px] leading-[0.9] tracking-[-0.06em] text-primary sm:text-[68px] lg:text-[82px]">
          Frequently
          <br />
          Asked
          <br />
          Question?
        </h1>

        <div className="mt-8 h-px w-full max-w-[180px] bg-primary/80" />
      </div>

      <div className="mt-12 max-w-[280px]">
        <p className="font-sans text-[18px] text-foreground/80">
          Still have a question?
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 border-b border-primary pb-1 font-sans text-[18px] font-medium text-primary transition-colors duration-200 hover:text-primary-light"
        >
          Contact us
          <span aria-hidden="true" className="text-base">
            ↗
          </span>
        </a>
      </div>
    </aside>
  );
}
