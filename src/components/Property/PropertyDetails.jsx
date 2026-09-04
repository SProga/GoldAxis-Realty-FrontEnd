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
import PropertyGallery from "./PropertyGallery";
import PropertyContactCard from "./PropertyContact";
import ChkEditorDefault from "../UI/ChkeditorDefault/ChkeditorDefault";

export default function PropertyDetails({ property }) {
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

        <PropertyGallery property={property} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_330px]">
          <div>
            <h1 className="font-display text-[34px] uppercase leading-tight text-foreground md:text-[42px]">
              {property?.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 font-sans ga_text_sm text-muted">
              <MapPin
                className="h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.5}
              />

              <span>
                {property?.full_address}
                {property?.parish?.name ? `, ${property.parish.name}` : ""}
              </span>
            </div>

            <div className="mt-3 font-display text-[28px] text-primary">
              {formatted_price}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <PropertyStat
                icon={BedDouble}
                value={property?.bedrooms ?? 0}
                label="Bedrooms"
              />

              <PropertyStat
                icon={Bath}
                value={property?.bathrooms ?? 0}
                label="Bathrooms"
              />

              <PropertyStat
                icon={Maximize2}
                value={
                  property?.square_feet
                    ? Number(property.square_feet).toLocaleString()
                    : "N/A"
                }
                label="Sq Ft"
              />
            </div>

            <section className="mt-10">
              <h2 className="font-display text-[22px] uppercase text-foreground">
                About This Property
              </h2>

              <div className="mt-4 max-w-[760px] font-sans ga_text_sm font-light leading-7 text-muted">
                {property?.description && (
                  <ChkEditorDefault content={property.description} />
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
                        className="h-4 w-4 shrink-0 text-primary"
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

function PropertyStat({ icon: Icon, value, label }) {
  return (
    <div className="flex min-h-[110px] flex-col items-center justify-center rounded-[6px] border border-foreground/10 bg-surface px-5 py-5 text-center">
      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />

      <div className="mt-2 font-display text-[18px] text-foreground">
        {value}
      </div>

      <div className="mt-1 font-sans text-[11px] text-muted">{label}</div>
    </div>
  );
}
