"use client";

import { useEffect, useRef, useState } from "react";
import { getIcon } from "@/components/UI/Helpers/getIcon";
import ImageRenderer from "@/components/UI/ImageRenderer/ImageRenderer";

export default function ServicesSingle({ service }) {
  const section_ref = useRef(null);
  const [is_visible, setIsVisible] = useState(false);

  if (!service) return null;

  const image_on_right = service?.image_alignment === "right";
  const background_image = service?.background_image?.[0];
  const Icon = getIcon(service?.icon?.code);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    if (section_ref.current) observer.observe(section_ref.current);

    return () => observer.disconnect();
  }, []);

  const image_animation = image_on_right
    ? is_visible
      ? "translate-x-0 opacity-100"
      : "translate-x-20 opacity-0"
    : is_visible
      ? "translate-x-0 opacity-100"
      : "-translate-x-20 opacity-0";

  const content_animation = image_on_right
    ? is_visible
      ? "translate-x-0 opacity-100"
      : "-translate-x-20 opacity-0"
    : is_visible
      ? "translate-x-0 opacity-100"
      : "translate-x-20 opacity-0";

  return (
    <div
      ref={section_ref}
      className="grid gap-16 overflow-hidden border-foreground/10 lg:min-h-[520px] lg:grid-cols-2"
    >
      <div
        className={`relative pb-6 pr-6 transition-all duration-700 ease-out ${image_animation} ${
          image_on_right ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="absolute z-12 bottom-0 right-0 h-[140px] w-[140px] rounded-[12px] border-2 border-primary/40" />
        <div className="relative z-10 min-h-[420px] overflow-hidden rounded-md lg:min-h-full">
          {background_image?.url && (
            <ImageRenderer
              src={background_image.url}
              alt={background_image.alternativeText || service?.title || ""}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>

      <div
        className={`flex items-start transition-all delay-150 duration-700 ease-out ${content_animation} ${
          image_on_right ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="w-full max-w-[520px]">
          {service?.icon?.code && Icon && (
            <div className="relative mb-5 grid h-11 w-11 place-content-center overflow-hidden rounded-full border border-primary/20 bg-primary/10">
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
              {service.description}
            </div>
          )}

          {!!service?.features?.length && (
            <div className="mt-6 flex flex-col gap-3">
              {service.features.map((feature) => {
                const FeatureIcon = getIcon(feature?.icon?.code);

                return (
                  <div key={feature.id} className="flex items-center gap-3">
                    {feature?.icon?.code && FeatureIcon && (
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
