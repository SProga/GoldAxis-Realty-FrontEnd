"use client";

import { useMemo, useState } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertiesToolbar from "./PropertyToolbar";
import PropertyList from "../Property/PropertyList";

const default_filters = {
  search: "",
  parish: [],
  status: [],
  type: [],
  min_price: "",
  max_price: "",
  bedrooms: "",
  bathrooms: "",
  min_square_feet: "",
  max_square_feet: "",
};

export default function PropertiesSearch({ allProperties = [] }) {
  const properties = allProperties?.data || [];
  const [filters, setFilters] = useState(default_filters);
  const [sort_by, setSortBy] = useState("newest");
  const [show_filters, setShowFilters] = useState(false);

  const filtered_properties = useMemo(() => {
    let result = [...properties];

    if (filters.search.trim()) {
      const search = filters.search.toLowerCase();

      result = result.filter((property) => {
        const searchable = [
          property.name,
          property.full_address,
          property.parish?.name,
          property.type?.name,
          property.status,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchable.includes(search);
      });
    }

    if (filters.parish.length) {
      result = result.filter((property) =>
        filters.parish.includes(property.parish?.name),
      );
    }

    if (filters.status.length) {
      result = result.filter((property) =>
        filters.status.includes(property.status),
      );
    }

    if (filters.type.length) {
      result = result.filter((property) =>
        filters.type.includes(property.type?.name),
      );
    }

    if (filters.min_price !== "") {
      result = result.filter(
        (property) => Number(property.price) >= Number(filters.min_price),
      );
    }

    if (filters.max_price !== "") {
      result = result.filter(
        (property) => Number(property.price) <= Number(filters.max_price),
      );
    }

    if (filters.bedrooms !== "") {
      result = result.filter(
        (property) => Number(property.bedrooms) >= Number(filters.bedrooms),
      );
    }

    if (filters.bathrooms !== "") {
      result = result.filter(
        (property) => Number(property.bathrooms) >= Number(filters.bathrooms),
      );
    }

    if (filters.min_square_feet !== "") {
      result = result.filter(
        (property) =>
          Number(property.square_feet) >= Number(filters.min_square_feet),
      );
    }

    if (filters.max_square_feet !== "") {
      result = result.filter(
        (property) =>
          Number(property.square_feet) <= Number(filters.max_square_feet),
      );
    }

    if (sort_by === "price_low")
      result.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort_by === "price_high")
      result.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort_by === "newest")
      result.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );

    return result;
  }, [properties, filters, sort_by]);

  const update_filter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }));
  };

  const reset_filters = () => {
    setFilters(default_filters);
  };

  return (
    <main className="min-h-screen bg-background pt-[86px]">
      <div className="mx-auto flex max-w-[1600px]">
        <PropertyFilters
          properties={properties}
          filters={filters}
          show_filters={show_filters}
          on_change={update_filter}
          on_reset={reset_filters}
          on_close={() => setShowFilters(false)}
        />

        <div className="min-w-0 flex-1 px-5 py-8 md:px-8 lg:px-10">
          <PropertiesToolbar
            count={filtered_properties.length}
            sort_by={sort_by}
            on_sort={setSortBy}
            on_filters={() => setShowFilters(true)}
          />

          <div className="mt-8">
            {filtered_properties.length ? (
              <PropertyList allProperties={{ data: filtered_properties }} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-[8px] border border-foreground/10 bg-surface">
                <div className="text-center">
                  <h2 className="font-display text-[22px] text-foreground">
                    No Properties Found
                  </h2>

                  <p className="mt-2 font-sans text-[13px] text-muted">
                    Try changing or clearing some of your search filters.
                  </p>

                  <button
                    type="button"
                    onClick={reset_filters}
                    className="mt-5 rounded-[4px] border border-primary/40 px-5 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-primary transition-all duration-300 hover:bg-primary hover:text-background"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
