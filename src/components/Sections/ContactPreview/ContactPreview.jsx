import { HighlightText } from "@/components/UI/Helpers/helpers";
import Link from "next/link";

export default function ContactPreviewSection({ data }) {
  return (
    <section className="border-t border-foreground/5 bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.45em] text-primary">
          {data?.eyebrow}
        </p>

        <h2 className="font-display text-[34px] font-semibold uppercase leading-[1.05] text-foreground md:text-[52px]">
          <HighlightText lineBreak={true} text={data?.title} />
        </h2>

        <p className="mx-auto mt-7 max-w-[600px] font-sans text-[14px] font-light leading-6 text-muted md:text-[15px]">
          {data?.description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={data?.primary_button_link || "/contact"}
            className="min-w-[190px] rounded-[4px] bg-primary px-7 py-[16px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-background transition-colors duration-300 hover:bg-primary-light"
          >
            {data?.primary_button_text || "Contact Us Today"}
          </Link>

          <Link
            href={data?.secondary_button_link || "/properties"}
            className="min-w-[190px] rounded-[4px] border border-primary/40 px-7 py-[15px] font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-primary transition-all duration-300 hover:bg-primary hover:text-background"
          >
            {data?.secondary_button_text || "Browse Properties"}
          </Link>
        </div>
      </div>
    </section>
  );
}
