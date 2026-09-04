import { getPropertyAmenities } from "@/lib/queries/properties/propertyAmenities/propertyAmenities";
import { getPropertiesSearch } from "@/lib/queries/properties/properties";
import { getPropertyLocationType } from "@/lib/queries/properties/propertyType/propertyLocationType";
import { getParishData } from "@/lib/queries/parish/parish";
import PropertiesSearch from "@/components/PropertySearch/PropertySearch";

export default async function PropertiesPage({ searchParams }) {
  const filters = await searchParams;

  const [properties, parishes, property_location_types, property_amenities] =
    await Promise.all([
      getPropertiesSearch(filters),
      getParishData(),
      getPropertyLocationType(),
      getPropertyAmenities(),
    ]);

  return (
    <PropertiesSearch
      allProperties={properties}
      parishes={parishes}
      propertyLocationTypes={property_location_types}
      propertyAmenities={property_amenities}
      initialFilters={filters}
    />
  );
}
