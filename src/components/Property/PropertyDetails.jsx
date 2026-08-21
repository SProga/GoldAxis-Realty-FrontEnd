"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  MapPin,
  Maximize2,
} from "lucide-react";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";
import PropertyContactCard from "./PropertyContact";
import ChkEditorDefault from "../UI/ChkeditorDefault/ChkeditorDefault";

export default function PropertyDetails({ property }) {
  const image = property?.images?.[0];

  const formatted_price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: property?.currency || "BBD",
    maximumFractionDigits: 0,
  }).format(property?.price || 0);

  return (
    <main className="bg-background px-6 pb-24 pt-[110px]">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/properties"
          className="mb-6 inline-flex items-center gap-2 font-sans text-[12px] text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Back to Properties
        </Link>

        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[7px] bg-surface">
          {image && (
            <ImageRenderer
              src={image.url}
              alt={image.alternativeText || property.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}

          {property?.status && (
            <div className="absolute left-5 top-5 rounded-[3px] bg-primary px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-background">
              {property.status}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_330px]">
          <div>
            <h1 className="font-display text-[34px] uppercase leading-tight text-foreground md:text-[42px]">
              {property?.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 font-sans text-[13px] text-muted">
              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />

              <span>
                {property?.full_address}
                {property?.parish?.name ? `, ${property.parish.name}` : ""}
              </span>
            </div>

            <div className="mt-3 font-display text-[28px] text-primary">
              {formatted_price}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[6px] border border-foreground/10 bg-surface px-5 py-5 text-center">
                <BedDouble className="h-5 w-5 text-primary" strokeWidth={1.5} />

                <div className="mt-2 font-display text-[18px] text-foreground">
                  {property?.bedrooms ?? 0}
                </div>

                <div className="mt-1 font-sans text-[11px] text-muted">
                  Bedrooms
                </div>
              </div>

              <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[6px] border border-foreground/10 bg-surface px-5 py-5 text-center">
                <Bath className="h-5 w-5 text-primary" strokeWidth={1.5} />

                <div className="mt-2 font-display text-[18px] text-foreground">
                  {property?.bathrooms ?? 0}
                </div>

                <div className="mt-1 font-sans text-[11px] text-muted">
                  Bathrooms
                </div>
              </div>

              <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[6px] border border-foreground/10 bg-surface px-5 py-5 text-center">
                <Maximize2 className="h-5 w-5 text-primary" strokeWidth={1.5} />

                <div className="mt-2 font-display text-[18px] text-foreground">
                  {property?.square_feet
                    ? Number(property.square_feet).toLocaleString()
                    : "N/A"}
                </div>

                <div className="mt-1 font-sans text-[11px] text-muted">
                  Sq Ft
                </div>
              </div>
            </div>

            <section className="mt-10">
              <h2 className="font-display text-[22px] uppercase text-foreground">
                About This Property
              </h2>
              <div className="mt-4 max-w-[760px] font-sans text-[13px] font-light leading-7 text-muted">
                {property?.description && (
                  <ChkEditorDefault content={property?.description} />
                )}
              </div>
            </section>

            {!!property?.amenities?.length && (
              <section className="mt-10">
                <h2 className="font-display text-[22px] uppercase text-foreground">
                  Amenities & Features
                </h2>

                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity.id || amenity.name}
                      className="flex items-center gap-2 font-sans text-[12px] text-muted"
                    >
                      <Check
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.8}
                      />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          <PropertyContactCard property={property} />
        </div>
      </div>
    </main>
  );
}
