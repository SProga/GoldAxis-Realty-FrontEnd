import { getIcon } from "@/components/UI/Helpers/getIcon";
import ImageRenderer from "@/components/UI/ImageRenderer/ImageRenderer";

export default function ServicesSingle({ service }) {
  if (!service) return null;

  const image_on_right = service?.image_alignment === "right";
  const background_image = service?.background_image?.[0];

  const Icon = getIcon(service?.icon?.code);

  return (
    <div className="grid overflow-hidden border-foreground/10 lg:min-h-[520px] lg:grid-cols-2 gap-16">
      <div
        className={`relative rounded-md overflow-hidden min-h-[420px] lg:min-h-0 ${image_on_right ? "lg:order-2" : "lg:order-1"}`}
      >
        {background_image?.url && (
          <ImageRenderer
            src={background_image.url}
            alt={background_image.alternativeText || service?.title || ""}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div
        className={`flex items-start ${image_on_right ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="w-full max-w-[520px]">
          {service?.icon?.code && (
            <div className="grid place-content-center relative mb-5 h-11 w-11 overflow-hidden rounded-full border border-primary/20 bg-primary/10">
              <Icon className="text-primary" />
            </div>
          )}

          {service?.eyebrow && (
            <div className="font-sans font-semibold uppercase tracking-[0.2em] text-primary">
              {service.eyebrow}
            </div>
          )}

          {service?.title && (
            <h2 className="mt-2 font-display text-[28px] uppercase leading-tight text-foreground md:text-[34px]">
              {service.title}
            </h2>
          )}

          {service?.description && (
            <div className="mt-4 font-sans ga_text_sm font-light leading-6 text-muted">
              {service?.description}
            </div>
          )}

          {!!service?.features?.length && (
            <div className="mt-6 flex flex-col gap-3">
              {service.features.map((feature) => {
                const FeatureIcon = getIcon(feature?.icon?.code);
                return (
                  <div key={feature.id} className="flex items-center gap-3">
                    {feature?.icon?.code && (
                      <FeatureIcon className="text-primary" />
                    )}
                    <span className="font-sans text-[12px] leading-5 text-foreground/80">
                      {feature.description}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
