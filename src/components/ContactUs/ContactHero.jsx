export default function ContactHero({ contactData = {} }) {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
          {contactData?.eyebrow}
        </p>
        <h1 className="mt-4 text-center text-4xl leading-[1.1] text-foreground md:text-6xl lg:text-[64px]">
          {contactData?.title}
        </h1>
        <p className="mx-auto mt-5 max-w-[700px] text-center text-base leading-7 text-foreground/75">
          {contactData?.description}
        </p>
      </div>
    </header>
  );
}
