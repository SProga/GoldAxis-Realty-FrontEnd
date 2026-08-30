import { HighlightText } from "@/components/UI/Helpers/helpers";
import AboutFeatureList from "../../About/AboutFeatureList";
import ImageRenderer from "../../UI/ImageRenderer/ImageRenderer";

export default function AboutPreviewSection({ data }) {
  return (
    <section className="bg-background px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.45em] text-primary">
            {data?.eyebrow}
          </p>

          <h2 className="font-display text-[32px] font-semibold uppercase leading-tight text-foreground md:text-[42px]">
            <HighlightText lineBreak={true} text={data?.title} />
          </h2>

          <p className="mt-5 max-w-[560px] font-sans text-[14px] font-light leading-7 text-muted">
            {data?.description}
          </p>

          <div className="mt-8">
            <AboutFeatureList features={data?.features} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
            <ImageRenderer
              src={data?.image?.url}
              alt={data?.image?.alternativeText || "Luxury property"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-[6px] bg-primary px-6 py-5 text-background shadow-lg md:px-7 md:py-6">
            <div className="font-display text-[28px] font-semibold leading-none">
              {data?.stat_number}+
            </div>

            <div className="mt-2 font-sans text-[11px] font-medium tracking-[0.03em]">
              {data?.stat_label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
