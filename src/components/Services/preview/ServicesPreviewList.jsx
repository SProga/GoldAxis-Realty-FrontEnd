import ServicesPreviewCard from "./ServicesPreviewCard";

export default function ServicesPreviewList({ services = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServicesPreviewCard key={service.id} service={service} />
      ))}
    </div>
  );
}
