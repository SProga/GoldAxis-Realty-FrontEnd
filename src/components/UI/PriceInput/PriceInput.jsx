"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function PriceInput({
  value = "",
  placeholder = "",
  options = [],
  onChange,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const container_ref = useRef(null);

  useEffect(() => {
    const handle_click_outside = (event) => {
      if (!container_ref.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handle_click_outside);

    return () => {
      document.removeEventListener("mousedown", handle_click_outside);
    };
  }, []);

  const handle_change = (event) => {
    const new_value = event.target.value.replace(/\D/g, "");
    onChange?.(new_value);
  };

  const select_value = (option) => {
    onChange?.(option.value);
    setOpen(false);
  };

  return (
    <div ref={container_ref} className={`relative min-w-0 ${className}`}>
      <div className="flex h-11 overflow-hidden rounded-[4px] border border-foreground/15 bg-surface transition-colors focus-within:border-primary">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          placeholder={placeholder}
          onChange={handle_change}
          className="min-w-0 flex-1 bg-transparent px-3 font-sans text-[11px] text-foreground outline-none placeholder:text-muted/60"
        />

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex w-8 shrink-0 cursor-pointer items-center justify-center border-l border-foreground/10 text-primary transition-colors hover:bg-primary hover:text-background"
          aria-label="Show price options"
          aria-expanded={open}
        >
          <ChevronDown
            size={13}
            strokeWidth={1.8}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-[calc(100%+5px)] z-30 min-w-[155px] overflow-hidden rounded-[4px] border border-foreground/10 bg-background py-1 shadow-lg">
          {options.map((option, index) => (
            <button
              key={`${option.value}-${index}`}
              type="button"
              onClick={() => select_value(option)}
              className="block w-full cursor-pointer whitespace-nowrap px-3 py-2 text-left font-sans text-[11px] text-muted transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
