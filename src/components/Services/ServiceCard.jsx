import { getIcon } from "../UI/Helpers/getIcon";

export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <article className="group flex min-h-[230px] flex-col items-center justify-center rounded-[5px] border border-foreground/[0.07] bg-surface px-7 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-background">
        {Icon && <Icon size={20} strokeWidth={1.6} />}
      </div>

      <h3 className="font-display text-[17px] font-normal uppercase text-foreground/90">
        {service.title}
      </h3>

      <p className="mt-4 max-w-[210px] font-sans text-[12px] font-light leading-5 text-muted">
        {service.description}
      </p>
    </article>
  );
}
