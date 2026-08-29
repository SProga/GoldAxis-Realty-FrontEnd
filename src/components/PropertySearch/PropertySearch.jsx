"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PropertyFilters from "./PropertyFilters";
import PropertiesToolbar from "./PropertyToolbar";
import PropertyList from "../Property/PropertyList";
import { Button } from "../UI/Button/Button";

const default_filters = {
  property_status: [],
  property_location_types: [],
  parish: [],
  bedrooms: "",
  bathrooms: "",
  min_price: "",
  max_price: "",
  min_square_feet: "",
  max_square_feet: "",
};

const normalize_array_filter = (value) => {
  if (Array.isArray(value)) return value;
  if (value) return [value];
  return [];
};

export default function PropertiesSearch({
  allProperties = [],
  parishes = [],
  propertyLocationTypes = [],
  initialFilters = {},
}) {
  const router = useRouter();
  const properties = allProperties || [];

  const [filters, setFilters] = useState({
    ...default_filters,
    ...initialFilters,
    property_status: normalize_array_filter(initialFilters.property_status),
    property_location_types: normalize_array_filter(
      initialFilters.property_location_types,
    ),
    parish: normalize_array_filter(initialFilters.parish),
  });

  const [sort_by, setSortBy] = useState("newest");
  const [show_filters, setShowFilters] = useState(false);

  const sorted_properties = useMemo(() => {
    const result = [...properties];

    if (sort_by === "price_low")
      result.sort((a, b) => Number(a.price) - Number(b.price));

    if (sort_by === "price_high")
      result.sort((a, b) => Number(b.price) - Number(a.price));

    if (sort_by === "newest")
      result.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );

    return result;
  }, [properties, sort_by]);

  const update_filter = (name, value) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const reset_filters = () => {
    setFilters(default_filters);
    router.push("/properties");
  };

  return (
    <main className="min-h-screen bg-background pt-[86px]">
      <div className="mx-auto flex max-w-[1600px]">
        <PropertyFilters
          parishes={parishes}
          propertyLocationTypes={propertyLocationTypes}
          filters={filters}
          show_filters={show_filters}
          on_change={update_filter}
          on_reset={reset_filters}
          on_close={() => setShowFilters(false)}
        />

        <div className="min-w-0 flex-1 px-5 py-8 md:px-8 lg:px-10">
          <PropertiesToolbar
            count={sorted_properties.length}
            sort_by={sort_by}
            on_sort={setSortBy}
            on_filters={() => setShowFilters(true)}
          />

          <div className="mt-8">
            {sorted_properties.length ? (
              <PropertyList allProperties={sorted_properties} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-[8px] border border-foreground/10 bg-surface">
                <div className="text-center">
                  <h2 className="font-display text-[22px] text-foreground">
                    No Properties Found
                  </h2>

                  <p className="mt-2 font-sans text-[13px] text-muted">
                    Try changing or clearing some of your search filters.
                  </p>

                  <Button
                    type="secondary"
                    onClick={reset_filters}
                    className="mt-5 cursor-pointer"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
