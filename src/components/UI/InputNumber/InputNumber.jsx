"use client";

import { Minus, Plus } from "lucide-react";

const min_price_options = [
  { label: "No Minimum", value: "" },
  { label: "$200k+", value: 200000 },
  { label: "$500k+", value: 500000 },
  { label: "$750k+", value: 750000 },
  { label: "$1M+", value: 1000000 },
  { label: "$2M+", value: 2000000 },
  { label: "$5M+", value: 5000000 },
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

export const InputNumber = ({
  value = "",
  onChange,
  step = 1,
  min,
  max,
  placeholder = "",
  className = "",
  inputClassName = "",
  ...props
}) => {
  const update_value = (direction) => {
    const step_value = Number(step);
    const current_value = value === "" ? Number(min ?? 0) : Number(value);

    let new_value =
      direction === "increase"
        ? current_value + step_value
        : current_value - step_value;

    if (min !== undefined) new_value = Math.max(Number(min), new_value);
    if (max !== undefined) new_value = Math.min(Number(max), new_value);

    onChange?.(String(Number(new_value.toFixed(10))));
  };

  const handle_change = (event) => {
    const new_value = event.target.value;

    if (new_value === "" || /^\d*\.?\d*$/.test(new_value)) {
      onChange?.(new_value);
    }
  };

  return (
    <div
      className={`flex h-11 w-full overflow-hidden rounded-[4px] border border-foreground/15 bg-surface transition-colors focus-within:border-primary ${className}`}
    >
      <input
        {...props}
        type="text"
        inputMode="decimal"
        value={value}
        placeholder={placeholder}
        onChange={handle_change}
        className={`min-w-0 flex-1 border-0 bg-transparent px-3 font-sans text-[11px] text-foreground outline-none placeholder:text-muted/60 ${inputClassName}`}
      />

      <button
        type="button"
        onClick={() => update_value("decrease")}
        className="flex h-full w-10 shrink-0 cursor-pointer items-center justify-center border-l border-foreground/10 text-primary transition-colors hover:bg-primary hover:text-background"
        aria-label="Decrease value"
      >
        <Minus size={14} strokeWidth={2} />
      </button>

      <button
        type="button"
        onClick={() => update_value("increase")}
        className="flex h-full w-10 shrink-0 cursor-pointer items-center justify-center border-l border-foreground/10 text-primary transition-colors hover:bg-primary hover:text-background"
        aria-label="Increase value"
      >
        <Plus size={14} strokeWidth={2} />
      </button>
    </div>
  );
};
