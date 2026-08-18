import Navigation from "../Navigation/Navigation";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function Header({ navigation, data }) {
  return (
    <header className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden bg-background">
      <ImageRenderer
        className="object-cover"
        src={data?.hero_image?.[0]?.url}
        alt={data?.hero_image?.[0]?.alternativeText || "Luxury property"}
        fill
        priority
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/65" />

      <Navigation navigation={navigation} />

      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-[86px]">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.5em] text-primary md:text-[13px]">
            Luxury Real Estate Redefined
          </p>

          <h1 className="font-display text-[42px] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-foreground md:text-[64px] lg:text-[76px]">
            Where Elegance
            <span className="mt-2 block text-primary">Meets Home</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[720px] font-sans text-[15px] font-light leading-7 text-foreground/85 md:text-[17px]">
            Experience the pinnacle of luxury living. From prestigious estates
            to exclusive penthouses, we curate extraordinary properties for
            extraordinary lives.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/properties"
              className="group flex min-w-[190px] items-center justify-center gap-4 rounded-[4px] bg-primary px-7 py-[17px] font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-background transition-all duration-300 hover:bg-primary-light"
            >
              Explore Properties
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/services"
              className="min-w-[160px] rounded-[4px] border border-foreground/30 bg-background/10 px-7 py-[16px] font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-foreground backdrop-blur-[2px] transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
