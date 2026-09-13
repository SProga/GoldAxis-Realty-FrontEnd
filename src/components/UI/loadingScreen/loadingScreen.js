"use client";

import { motion, useReducedMotion } from "framer-motion";
import ImageRenderer from "../ImageRenderer/ImageRenderer";

export default function LoadingScreen({ siteSettings }) {
  const reduceMotion = useReducedMotion();
  const logo = siteSettings?.logo;

  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-[100] grid min-h-dvh place-items-center overflow-hidden bg-background px-6 text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />
      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={false}
          animate={reduceMotion ? { opacity: 1 } : { opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
        >
          {logo?.url ? (
            <ImageRenderer
              src={logo.url}
              alt={logo.alternativeText || siteSettings?.site_name || ""}
              width={192}
              height={192}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="font-display text-2xl text-primary">
              {siteSettings?.site_name || "Loading"}
            </span>
          )}
        </motion.div>
        <div
          aria-hidden="true"
          className="mt-5 h-6 w-6 animate-spin rounded-full border-2 border-primary/20 border-t-primary motion-reduce:animate-none"
        />
      </div>
    </div>
  );
}
