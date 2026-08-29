"use client";

import { useRouter } from "next/navigation";
import {
  Bath,
  BedDouble,
  DollarSign,
  Home,
  MapPin,
  MapPinned,
  SlidersHorizontal,
  X,
} from "lucide-react";
import FilterSection from "./FilterSection";
import { Button } from "../UI/Button/Button";
import { InputNumber } from "../UI/InputNumber/InputNumber";
import { PriceInput } from "../UI/PriceInput/PriceInput";

const min_price_options = [
  { label: "No Minimum", value: "" },
  { label: "$200k & above", value: 200000 },
  { label: "$500k & above", value: 500000 },
  { label: "$750k & above", value: 750000 },
  { label: "$1M & above", value: 1000000 },
  { label: "$2M & above", value: 2000000 },
  { label: "$5M & above", value: 5000000 },
];

const max_price_options = [
  { label: "No Maximum", value: "" },
  { label: "Up to $200k", value: 200000 },
  { label: "Up to $500k", value: 500000 },
  { label: "Up to $750k", value: 750000 },
  { label: "Up to $1M", value: 1000000 },
  { label: "Up to $2M", value: 2000000 },
  { label: "Up to $5M", value: 5000000 },
];

const property_statuses = [
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
];

export default function PropertyFilters({
  parishes = [],
  propertyLocationTypes = [],
  filters,
  show_filters,
  on_change,
  on_reset,
  on_close,
}) {
  const router = useRouter();

  const toggle_array_filter = (name, value) => {
    const current = filters[name] || [];

    on_change(
      name,
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  };

  const search_properties = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== "" && item != null) params.append(key, item);
        });

        return;
      }

      if (value !== "" && value != null) params.set(key, value);
    });

    router.push(
      `/properties${params.toString() ? `?${params.toString()}` : ""}`,
    );

    on_close?.();
  };

  const reset_filters = () => {
    on_reset();
  };

  return (
    <>
      {show_filters && (
        <button
          type="button"
          aria-label="Close filters"
          onClick={on_close}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-[330px] overflow-y-auto border-r border-foreground/10 bg-background pt-[86px] transition-transform duration-300 lg:sticky lg:top-[86px] lg:z-10 lg:h-[calc(100vh-86px)] lg:translate-x-0 lg:pt-0 ${
          show_filters ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-30 border-b border-foreground/10 bg-background px-6 pb-4 pt-7">
          <div className="flex items-center justify-between border-b border-primary/30 pb-5">
            <div className="flex items-center gap-3">
              <SlidersHorizontal
                className="h-4 w-4 text-primary"
                strokeWidth={1.5}
              />

              <h2 className="font-display text-[16px] uppercase tracking-[0.06em] text-foreground">
                Advanced Search
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={reset_filters}
                className="cursor-pointer font-sans text-[11px] text-primary transition-opacity hover:opacity-70"
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={on_close}
                className="cursor-pointer text-muted lg:hidden"
                aria-label="Close filters"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          <Button
            className="mt-3 w-full cursor-pointer"
            onClick={search_properties}
          >
            Search
          </Button>
        </div>

        <div className="px-6 pb-7">
          <FilterSection title="Property Status" icon={Home}>
            <div className="flex flex-col gap-3">
              {property_statuses.map((status) => (
                <FilterCheckbox
                  key={status.value}
                  label={status.label}
                  checked={(filters.property_status || []).includes(
                    status.value,
                  )}
                  on_change={() =>
                    toggle_array_filter("property_status", status.value)
                  }
                />
              ))}
            </div>
          </FilterSection>

          {!!parishes.length && (
            <FilterSection title="Location" icon={MapPin}>
              <div className="flex flex-col gap-3">
                {parishes.map((parish) => (
                  <FilterCheckbox
                    key={parish.documentId || parish.id || parish.name}
                    label={parish.name}
                    checked={(filters.parish || []).includes(parish.name)}
                    on_change={() => toggle_array_filter("parish", parish.name)}
                  />
                ))}
              </div>
            </FilterSection>
          )}

          <FilterSection title="Price" icon={DollarSign}>
            <div className="grid grid-cols-2 gap-3">
              <PriceInput
                value={filters.min_price}
                placeholder="Min price"
                options={min_price_options}
                onChange={(value) => on_change("min_price", value)}
              />

              <PriceInput
                value={filters.max_price}
                placeholder="Max price"
                options={max_price_options}
                onChange={(value) => on_change("max_price", value)}
              />
            </div>
          </FilterSection>

          <FilterSection title="Bedrooms" icon={BedDouble}>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((bedrooms) => (
                <FilterButton
                  key={bedrooms}
                  active={String(filters.bedrooms) === String(bedrooms)}
                  on_click={() =>
                    on_change(
                      "bedrooms",
                      String(filters.bedrooms) === String(bedrooms)
                        ? ""
                        : bedrooms,
                    )
                  }
                >
                  {bedrooms}
                  {bedrooms === 4 ? "+" : ""}
                </FilterButton>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Bathrooms" icon={Bath}>
            <InputNumber
              value={filters.bathrooms}
              placeholder="e.g. 1.5"
              min={0}
              step={0.5}
              onChange={(value) => on_change("bathrooms", value)}
            />
          </FilterSection>

          <FilterSection title="Property Size" icon={SlidersHorizontal}>
            <div className="flex flex-col gap-3">
              <InputNumber
                value={filters.min_square_feet}
                placeholder="Min sqft"
                min={0}
                step={50}
                onChange={(value) => on_change("min_square_feet", value)}
              />

              <InputNumber
                value={filters.max_square_feet}
                placeholder="Max sqft"
                min={0}
                step={50}
                onChange={(value) => on_change("max_square_feet", value)}
              />
            </div>
          </FilterSection>

          {!!propertyLocationTypes.length && (
            <FilterSection title="Location Type" icon={MapPinned}>
              <div className="flex flex-col gap-3">
                {propertyLocationTypes.map((location_type) => (
                  <FilterCheckbox
                    key={
                      location_type.documentId ||
                      location_type.id ||
                      location_type.slug
                    }
                    label={location_type.label}
                    checked={(filters.property_location_types || []).includes(
                      location_type.slug,
                    )}
                    on_change={() =>
                      toggle_array_filter(
                        "property_location_types",
                        location_type.slug,
                      )
                    }
                  />
                ))}
              </div>
            </FilterSection>
          )}
        </div>
      </aside>
    </>
  );
}

function FilterCheckbox({ label, checked, on_change }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 font-sans text-[12px] text-foreground/80">
      <input
        type="checkbox"
        checked={checked}
        onChange={on_change}
        className="peer sr-only"
      />

      <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[3px] border border-foreground/30 transition-colors peer-checked:border-primary peer-checked:bg-primary">
        {checked && (
          <span className="text-[11px] font-bold text-background">✓</span>
        )}
      </span>

      {label}
    </label>
  );
}

function FilterButton({ children, active, on_click }) {
  return (
    <button
      type="button"
      onClick={on_click}
      className={`h-10 cursor-pointer rounded-[4px] border font-sans text-[11px] transition-all duration-200 ${
        active
          ? "border-primary bg-primary text-background"
          : "border-foreground/10 bg-surface text-muted hover:border-primary/40 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
