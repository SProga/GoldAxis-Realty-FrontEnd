import Property from "./Property";

export default function PropertyList({ allProperties = [] }) {
  const properties = allProperties || [];

  console.log("properties", properties);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <Property key={property.id} {...property} />
      ))}
    </div>
  );
}
