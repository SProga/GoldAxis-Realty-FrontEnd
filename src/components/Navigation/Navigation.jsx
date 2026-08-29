"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

export default function Navigation({ navigation }) {
  const pathname = usePathname();

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-foreground/5 bg-background">
      <div className="mx-auto flex h-[86px] max-w-[1450px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span className="font-display text-[22px] font-semibold tracking-[0.03em] text-primary">
            Prestige
          </span>
          <span className="font-display text-[18px] font-normal tracking-[0.05em] text-foreground/75">
            Estates
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.navigation_link.map((nav) => {
            const href = nav.link === "home" ? "/" : nav.link;
            const isActive = pathname === href;

            return (
              <Link
                key={nav.id}
                href={href}
                className={`font-sans text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/55 hover:text-primary"
                }`}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.04em] text-primary transition-opacity hover:opacity-80"
          >
            <Phone size={14} strokeWidth={1.8} />
            <span>(123) 456-7890</span>
          </a>

          <Link
            href="/contact"
            className="rounded-[4px] bg-primary px-6 py-[14px] font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-background transition-colors duration-200 hover:bg-primary-light"
          >
            Schedule Viewing
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
        >
          <span className="flex w-6 flex-col gap-[5px]">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </div>
    </nav>
  );
}
