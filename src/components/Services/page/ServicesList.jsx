import ServicesSingle from "./ServicesSingle";

export default function ServicesList({ services = [] }) {
  if (!services.length) return null;

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-20 md:gap-28">
        {services.map((service) => (
          <ServicesSingle key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
