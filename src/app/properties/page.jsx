import PropertiesSearch from "@/components/PropertySearch/PropertySearch";
import { getAllProperties } from "@/lib/queries/properties/properties";

export default async function PropertiesPage() {
  const allProperties = await getAllProperties();
  console.log(allProperties);

  return <PropertiesSearch allProperties={allProperties} />;
}
