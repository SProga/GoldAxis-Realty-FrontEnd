import { getIcon } from "../UI/Helpers/getIcon";

export default function AboutFeatureItem({ feature }) {
  const Icon = getIcon(feature.icon);

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {Icon && <Icon size={18} strokeWidth={1.6} />}
      </div>

      <div>
        <h3 className="font-display text-[14px] font-medium uppercase text-foreground">
          {feature.title}
        </h3>

        <p className="mt-1 font-sans text-[12px] font-light leading-5 text-muted">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
