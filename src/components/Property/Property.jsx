import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function Property({
  slug = "",
  images = [],
  title = "N/A",
  bedrooms = 5,
  bathrooms = 3,
  square_feet = null,
  full_address = "N/A",
  parish = {},
  price = 430000,
  currency = "BBD",
  status = "For Sale",
}) {
  const formatted_price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);

  const image = images?.[0];

  return (
    <Link
      href={`/properties/${slug}`}
      className="group block w-full overflow-hidden rounded-[9px] border border-foreground/10 bg-background transition-[border-color,box-shadow] duration-300 ease-out hover:border-primary/30 hover:shadow-primary"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        {image && (
          <ImageRenderer
            src={image.url}
            alt={image.alternativeText || title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 400px"
            priority={false}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />

        {status && (
          <div className="absolute left-4 top-4 rounded-[3px] bg-primary px-3 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-background">
            {status}
          </div>
        )}

        <div className="absolute bottom-4 left-4 font-display text-[20px] font-semibold text-foreground md:text-[22px]">
          {formatted_price}
        </div>
      </div>

      <div className="px-5 py-5">
        <h3 className="font-display text-[16px] uppercase leading-6 text-primary">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-2 font-sans text-[12px] text-muted">
          <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />

          <span>
            {full_address}
            {parish?.name ? `, ${parish.name}` : ""}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-foreground/[0.06] pt-4 font-sans text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" strokeWidth={1.4} />
            <span>{bedrooms} Beds</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" strokeWidth={1.4} />
            <span>{bathrooms ?? 0} Baths</span>
          </div>

          {square_feet && (
            <div className="flex items-center gap-2">
              <Maximize2 className="h-4 w-4" strokeWidth={1.4} />
              <span>{Number(square_feet).toLocaleString()} sqft</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
