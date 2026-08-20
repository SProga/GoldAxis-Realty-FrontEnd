import Link from "next/link";
import PropertyList from "../../Property/PropertyList";

export default function PropertiesPreviewSection({ allProperties = [] }) {
  return (
    <section className="bg-surface px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-primary">
              Featured Listings
            </p>

            <h2 className="font-display text-[28px] font-semibold uppercase leading-tight text-foreground md:text-[36px]">
              Exclusive Properties
            </h2>
          </div>

          <Link
            href="/properties"
            className="group hidden items-center gap-4 rounded-[4px] border border-primary/40 px-5 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:bg-primary hover:text-background sm:flex"
          >
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <PropertyList allProperties={allProperties} />

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/properties"
            className="group flex items-center gap-4 rounded-[4px] border border-primary/40 px-5 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:bg-primary hover:text-background"
          >
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
