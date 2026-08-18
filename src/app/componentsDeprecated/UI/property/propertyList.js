// app/components/properties/PropertyList.jsx
import Property from "@/app/components/UI/property/property";

export default function PropertyList({ allProperties = [] }) {
  console.log("allPropertiesList", allProperties);
  return (
    <section className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProperties.data.map((p) => (
          <Property key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
