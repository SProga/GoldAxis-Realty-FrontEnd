import { ExternalLink, MapPin } from "lucide-react";

function coordinate(value, limit) {
  if (typeof value !== "number" && typeof value !== "string") return null;
  if (typeof value === "string" && !value.trim()) return null;
  const number = Number(value);
  return Number.isFinite(number) && Math.abs(number) <= limit ? number : null;
}

export default function PropertyLocation({ property }) {
  const latitude = coordinate(property?.latitude, 90);
  const longitude = coordinate(property?.longitude, 180);
  if (latitude === null || longitude === null) return null;

  const params = new URLSearchParams({
    q: `${latitude},${longitude}`,
    z: "16",
    output: "embed",
  });
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${latitude},${longitude}`)}`;
  const address = [property.full_address, property.parish?.name]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="mt-10" aria-labelledby="property-location-title">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2
          id="property-location-title"
          className="font-display text-[22px] uppercase text-primary"
        >
          Location
        </h2>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-[12px] text-primary transition-colors hover:text-primary-light"
        >
          View larger map
          <ExternalLink size={14} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="mt-5 overflow-hidden rounded-[6px] border border-primary/20 bg-surface">
        <iframe
          key={`${latitude},${longitude}`}
          title={`Location map for ${property.title || address || "this property"}`}
          src={`https://maps.google.com/maps?${params}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[300px] w-full border-0 sm:h-[380px]"
        />
      </div>
    </section>
  );
}
