import PropertiesSearch from "@/components/PropertySearch/PropertySearch";
import { getParishData } from "@/lib/queries/parish/parish";
import { getPropertiesSearch } from "@/lib/queries/properties/properties";
import { getPropertyLocationType } from "@/lib/queries/properties/propertyType/propertyLocationType";

export default async function PropertiesPage({ searchParams }) {
  const filters = await searchParams;

  const [properties, parishes, propertyLocationTypes] = await Promise.all([
    getPropertiesSearch(filters),
    getParishData(),
    getPropertyLocationType(),
  ]);

  return (
    <PropertiesSearch
      allProperties={properties}
      parishes={parishes}
      propertyLocationTypes={propertyLocationTypes}
    />
  );
}
