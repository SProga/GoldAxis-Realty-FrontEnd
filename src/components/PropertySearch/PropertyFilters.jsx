"use client";

import {
  Bath,
  BedDouble,
  Building2,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import FilterSection from "./FilterSection";

export default function PropertyFilters({
  properties = [],
  filters,
  show_filters,
  on_change,
  on_reset,
  on_close,
}) {
  const parishes = [
    ...new Set(
      properties.map((property) => property.parish?.name).filter(Boolean),
    ),
  ];
  const statuses = [
    ...new Set(properties.map((property) => property.status).filter(Boolean)),
  ];
  const types = [
    ...new Set(
      properties.map((property) => property.type?.name).filter(Boolean),
    ),
  ];

  const toggle_array_filter = (name, value) => {
    const current = filters[name];

    on_change(
      name,
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
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
        <div className="px-6 py-7">
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
                onClick={on_reset}
                className="font-sans text-[11px] text-primary transition-opacity hover:opacity-70"
              >
                Clear All
              </button>

              <button
                type="button"
                onClick={on_close}
                className="text-muted lg:hidden"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          <FilterSection title="Location" icon={MapPin}>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                strokeWidth={1.5}
              />

              <input
                type="text"
                value={filters.search}
                onChange={(event) => on_change("search", event.target.value)}
                placeholder="Area, address or property"
                className="h-11 w-full rounded-[4px] border border-foreground/10 bg-surface pl-10 pr-3 font-sans text-[12px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
              />
            </div>

            {!!parishes.length && (
              <div className="mt-4 flex flex-col gap-3">
                {parishes.map((parish) => (
                  <FilterCheckbox
                    key={parish}
                    label={parish}
                    checked={filters.parish.includes(parish)}
                    on_change={() => toggle_array_filter("parish", parish)}
                  />
                ))}
              </div>
            )}
          </FilterSection>

          <FilterSection title="Price Range" icon={Building2}>
            <div className="grid grid-cols-2 gap-3">
              <FilterInput
                value={filters.min_price}
                placeholder="Min price"
                on_change={(value) => on_change("min_price", value)}
              />

              <FilterInput
                value={filters.max_price}
                placeholder="Max price"
                on_change={(value) => on_change("max_price", value)}
              />
            </div>
          </FilterSection>

          {!!statuses.length && (
            <FilterSection title="Listing Type" icon={Building2}>
              <div className="flex flex-col gap-3">
                {statuses.map((status) => (
                  <FilterCheckbox
                    key={status}
                    label={status}
                    checked={filters.status.includes(status)}
                    on_change={() => toggle_array_filter("status", status)}
                  />
                ))}
              </div>
            </FilterSection>
          )}

          {!!types.length && (
            <FilterSection title="Property Type" icon={Building2}>
              <div className="flex flex-col gap-3">
                {types.map((type) => (
                  <FilterCheckbox
                    key={type}
                    label={type}
                    checked={filters.type.includes(type)}
                    on_change={() => toggle_array_filter("type", type)}
                  />
                ))}
              </div>
            </FilterSection>
          )}

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
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((bathrooms) => (
                <FilterButton
                  key={bathrooms}
                  active={String(filters.bathrooms) === String(bathrooms)}
                  on_click={() =>
                    on_change(
                      "bathrooms",
                      String(filters.bathrooms) === String(bathrooms)
                        ? ""
                        : bathrooms,
                    )
                  }
                >
                  {bathrooms}
                  {bathrooms === 4 ? "+" : ""}
                </FilterButton>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Property Size" icon={SlidersHorizontal}>
            <div className="grid grid-cols-2 gap-3">
              <FilterInput
                value={filters.min_square_feet}
                placeholder="Min sqft"
                on_change={(value) => on_change("min_square_feet", value)}
              />

              <FilterInput
                value={filters.max_square_feet}
                placeholder="Max sqft"
                on_change={(value) => on_change("max_square_feet", value)}
              />
            </div>
          </FilterSection>
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

      <span className="flex h-[17px] w-[17px] items-center justify-center rounded-[3px] border border-foreground/30 transition-colors peer-checked:border-primary peer-checked:bg-primary">
        {checked && (
          <span className="text-[11px] font-bold text-background">✓</span>
        )}
      </span>

      {label}
    </label>
  );
}

function FilterInput({ value, placeholder, on_change }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(event) => on_change(event.target.value)}
      placeholder={placeholder}
      className="h-10 w-full rounded-[4px] border border-foreground/10 bg-surface px-3 font-sans text-[11px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
    />
  );
}

function FilterButton({ children, active, on_click }) {
  return (
    <button
      type="button"
      onClick={on_click}
      className={`h-10 rounded-[4px] border font-sans text-[11px] transition-all duration-200 ${
        active
          ? "border-primary bg-primary text-background"
          : "border-foreground/10 bg-surface text-muted hover:border-primary/40 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
