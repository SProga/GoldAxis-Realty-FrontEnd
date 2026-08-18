"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ navigation }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center">
      <div className="flex gap-6 bg-background-light p-1 rounded-3xl mx-auto w-fit">
        {navigation.navigation_link.map((nav) => {
          if (nav.link === "home") nav.link = "/";
          const isActive = pathname === nav.link;

          return (
            <Link
              key={nav.id}
              href={nav.link}
              className={`
                flex items-center justify-center
                py-[6px] px-4 rounded-3xl font-light text-center
                min-w-[120px]
                transition-all duration-200
                
                ${
                  isActive
                    ? "bg-secondary text-primary" // 🔥 active styles
                    : "text-secondary hover:bg-primary/20"
                }
              `}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
