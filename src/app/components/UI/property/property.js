// app/components/PropertyCard.jsx
import Link from "next/link";
import { BedDouble, Bath, MapPin } from "lucide-react";
import ImageRenderer from "../ImageRenderer/ImageRenderer";

export default function Property({
  href = "/property_1",
  images = [],
  bedrooms = 5,
  bathrooms = 3,
  full_address = "N/A",
  parish = {},
  price = 430000,
  currency = "BBD",
  badge = "Featured",
}) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Link
      href={href}
      className="group block w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImageRenderer
          src={images[0].url}
          alt={images[0].alternativeText || "None available"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 360px"
          priority={false}
        />

        {/* Soft top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

        {/* Badge */}
        {badge ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-900 backdrop-blur">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
              <span className="text-amber-600">✦</span>
            </span>
            {badge}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Meta row */}
        <div className="flex items-center gap-4 text-sm text-zinc-700">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-zinc-500" />
            <span className="font-medium text-zinc-900">{bedrooms}</span>
            <span className="text-zinc-500">Bedrooms</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-zinc-500" />
            <span className="font-medium text-zinc-900">{bathrooms ?? 0}</span>
            <span className="text-zinc-500">Bathrooms</span>
          </div>
        </div>

        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-zinc-500" />
          <span className="font-semibold text-zinc-900">
            {full_address}
            {parish ? `, ${parish.name}` : ""}
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 text-lg font-extrabold tracking-tight text-zinc-900">
          {formattedPrice}{" "}
          <span className="ml-1 text-sm font-semibold text-zinc-500">
            {currency}
          </span>
        </div>
      </div>
    </Link>
  );
}
