"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AboutEyebrow from "./AboutEyebrow";
import AboutReveal from "./AboutReveal";
import { motion, useReducedMotion } from "framer-motion";

// Reference copy; replace with approved client testimonials when available.
const defaultItems = [{ id: "barbados", text: "Professional, knowledgeable and always available. The entire process was seamless and I couldn’t be happier with my new home in Barbados.", name: "Client in Barbados", rating: 5 }];

export default function AboutTestimonials({ items = defaultItems }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  if (!items.length) return null;
  const activeIndex = index % items.length;
  const current = items[activeIndex];
  const move = (step) => setIndex((previous) => (previous + step + items.length) % items.length);
  const controlClass = "rounded-full p-3 text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary";

  return (
    <section aria-labelledby="about-testimonials-title" aria-roledescription="carousel" className="px-6 py-16 md:py-20">
      <AboutReveal className="mx-auto max-w-[1050px] text-center">
        <div className="flex justify-center"><AboutEyebrow>Clients Say</AboutEyebrow></div>
        <h2 id="about-testimonials-title" className="text-2xl leading-tight md:text-4xl">Kind Words, Lasting Relationships</h2>
        <div className="mt-7 flex items-center justify-center gap-3 md:gap-12">
          {items.length > 1 && <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)} className={controlClass}><ChevronLeft size={26} /></button>}
          <div aria-live="polite" aria-atomic="true" className="max-w-[720px] flex-1">
            <motion.div key={current.id} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>
            <blockquote className="text-base italic leading-7 text-muted">“{current.text}”</blockquote>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <span aria-label={`${current.rating} out of 5 stars`} className="flex gap-1 text-primary">{Array.from({ length: current.rating }, (_, i) => <Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}</span>
              <p className="text-sm text-muted">— {current.name}</p>
            </div>
            </motion.div>
          </div>
          {items.length > 1 && <button type="button" aria-label="Next testimonial" onClick={() => move(1)} className={controlClass}><ChevronRight size={26} /></button>}
        </div>
        {items.length > 1 && <div className="mt-6 flex justify-center">{items.map((item, i) => <button type="button" key={item.id} aria-label={`Show testimonial ${i + 1}`} aria-current={i === activeIndex ? "true" : undefined} onClick={() => setIndex(i)} className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"><span className={`h-2.5 w-2.5 rounded-full ${i === activeIndex ? "bg-primary" : "bg-foreground/25"}`} /></button>)}</div>}
      </AboutReveal>
    </section>
  );
}
