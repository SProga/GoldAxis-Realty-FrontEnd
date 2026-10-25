import { ChevronDown, Plus, X } from "lucide-react";

export default function FAQAccordion({ items, openIndex, onToggle }) {
  return (
    <div className="w-full rounded-[18px] border border-primary/45 bg-background/90 shadow-[0_18px_30px_rgba(0,0,0,0.25)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`border-b border-primary/30 last:border-b-0 ${
              isOpen ? "bg-primary/5" : "bg-transparent"
            }`}
          >
            <button
              type="button"
              onClick={() => onToggle(index)}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-8"
            >
              <span className="flex items-center gap-4 text-left">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                  {isOpen ? (
                    <X className="h-5 w-5" strokeWidth={1.8} />
                  ) : (
                    <Plus className="h-5 w-5" strokeWidth={1.8} />
                  )}
                </span>
                <span className="font-sans text-[20px] font-medium leading-snug text-foreground md:text-[20px]">
                  {item.question}
                </span>
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                strokeWidth={1.9}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pt-1 leading-8 text-foreground/70 sm:px-8 sm:pb-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
