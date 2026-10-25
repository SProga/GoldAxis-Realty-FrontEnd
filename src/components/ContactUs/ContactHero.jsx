export default function ContactHero() {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
          Get in touch
        </p>
        <h1 className="mt-4 text-center text-4xl leading-[1.1] text-foreground md:text-6xl lg:text-[64px]">
          Contact Us
        </h1>
        <p className="mx-auto mt-5 max-w-[700px] text-center text-base leading-7 text-foreground/75">
          Ready to begin your luxury real estate journey? Our team is here to
          help with any enquiry, property search, or tailored guidance you may
          need.
        </p>
      </div>
    </header>
  );
}
