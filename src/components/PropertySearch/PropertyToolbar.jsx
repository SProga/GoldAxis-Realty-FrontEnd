"use client";

import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

export default function PropertiesToolbar({
  count = 0,
  sort_by,
  on_sort,
  on_filters,
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-foreground/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between gap-4">
        <p className="font-sans text-[14px] text-foreground">
          <span className="font-semibold text-primary">{count}</span>{" "}
          {count === 1 ? "Property" : "Properties"} Found
        </p>

        <button
          type="button"
          onClick={on_filters}
          className="flex h-10 items-center gap-2 rounded-[4px] border border-primary/30 px-4 font-sans text-[10px] uppercase tracking-[0.08em] text-primary lg:hidden"
        >
          <SlidersHorizontal size={14} />
          Filters
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden font-sans text-[11px] text-muted sm:block">
          Sort By:
        </span>

        <select
          value={sort_by}
          onChange={(event) => on_sort(event.target.value)}
          className="h-10 min-w-[165px] rounded-[4px] border border-foreground/10 bg-surface px-4 font-sans text-[11px] text-foreground outline-none transition-colors focus:border-primary/50"
        >
          <option value="newest">Newest First</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>

        <button
          type="button"
          aria-label="Grid view"
          className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-primary/50 text-primary"
        >
          <LayoutGrid size={16} />
        </button>

        <button
          type="button"
          aria-label="List view"
          className="hidden h-10 w-10 items-center justify-center rounded-[4px] border border-foreground/10 text-muted transition-colors hover:border-primary/40 hover:text-primary sm:flex"
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}
