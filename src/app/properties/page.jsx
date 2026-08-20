import PropertiesSearch from "@/components/PropertySearch/PropertySearch";
import { getAllProperties } from "@/lib/queries/properties/properties";

export default async function PropertiesPage() {
  const allProperties = await getAllProperties();

  return <PropertiesSearch allProperties={allProperties} />;
}
