"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSection({
  title,
  icon: Icon,
  children,
  default_open = true,
}) {
  const [is_open, setIsOpen] = useState(default_open);

  return (
    <div className="border-b border-foreground/10">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={is_open}
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
          )}

          <span className="font-display text-[12px] uppercase tracking-[0.06em] text-foreground">
            {title}
          </span>
        </div>

        <ChevronDown
          size={15}
          strokeWidth={1.7}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            is_open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          is_open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
