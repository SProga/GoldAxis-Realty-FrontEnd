import Link from "next/link";
import ServicesList from "../../Services/ServicesList";

export default function ServicesPreviewSection({ data }) {
  return (
    <section className="bg-background px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.45em] text-primary">
            {data?.eyebrow || "What We Offer"}
          </p>

          <h2 className="font-display text-[28px] font-semibold uppercase leading-tight text-foreground md:text-[38px]">
            {data?.title || "Comprehensive Real Estate Services"}
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] font-sans text-[14px] font-light leading-6 text-muted">
            {data?.description ||
              "From acquisition to management, our full-service approach ensures every aspect of your real estate journey is handled with precision and care."}
          </p>
        </div>

        <ServicesList services={data?.services} />

        <div className="mt-10 flex justify-center">
          <Link
            href={data?.button_link || "/services"}
            className="group flex items-center gap-5 rounded-[4px] border border-primary/50 px-7 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-primary transition-all duration-300 hover:bg-primary hover:text-background"
          >
            {data?.button_text || "View All Services"}

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
