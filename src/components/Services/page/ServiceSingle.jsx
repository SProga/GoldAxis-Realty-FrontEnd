import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";
import ChkEditorDefault from "../UI/ChkeditorDefault/ChkeditorDefault";

export default function ServicesSingle({ service }) {
  if (!service) return null;

  const image_on_right = service?.image_alignment === "right";
  const background_image = service?.background_image?.[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={image_on_right ? "lg:order-2" : "lg:order-1"}>
        {background_image?.url && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
            <ImageRenderer
              src={background_image.url}
              alt={background_image.alternativeText || service?.title || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className={image_on_right ? "lg:order-1" : "lg:order-2"}>
        {service?.icon?.url && (
          <div className="relative mb-5 h-11 w-11 overflow-hidden rounded-full border border-primary/20 bg-primary/10 p-3">
            <ImageRenderer
              src={service.icon.url}
              alt={service.icon.alternativeText || ""}
              fill
              className="object-contain p-3"
            />
          </div>
        )}

        {service?.eyebrow && (
          <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
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
            <ChkEditorDefault content={service.description} />
          </div>
        )}

        {!!service?.features?.length && (
          <div className="mt-6 flex flex-col gap-3">
            {service.features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-3">
                {feature?.icon?.url && (
                  <div className="relative mt-[2px] h-4 w-4 shrink-0">
                    <ImageRenderer
                      src={feature.icon.url}
                      alt={feature.icon.alternativeText || ""}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <span className="font-sans text-[12px] leading-5 text-foreground/80">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
