// components/testimonials/TestimonialsSection.jsx
"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import classes from "./testimonials.module.css";
import Container from "../../UI/container/container";

/**
 * TestimonialsSection (Next.js / Tailwind)
 * - Matches your mock: left image, right quote card overlay, big quote marks, nav arrows.
 * - Background SVG area: plug anything into `backgroundSlot` (SVG, pattern, etc).
 */
export default function Testimonials({
  heading = {
    line1: "What Our Clients",
    line2: "Say About ",
    highlight: "Gold Axis",
    suffix: " ?",
  },
  reviewsBadge = { label: "More than", count: "10+", suffix: "Reviews" },
  items = [
    {
      id: "t1",
      name: "Sam Kontas",
      text: "As a first-time buyer, I had no idea where to start. The Gold Axis Realty team walked me through every step, found properties that matched my budget, and made sure I felt confident signing the papers. I can't thank them enough!",
      imageSrc: "/demo/testimonial-house.jpg", // put in /public or pass remote
      imageAlt: "Property exterior",
    },
  ],
}) {
  return (
    <section className={`${classes.background} mx-auto px-6 py-14 lg:py-20`}>
      <Container>
        <Header heading={heading} reviewsBadge={reviewsBadge} />
        <TestimonialsCarousel items={items} />
      </Container>
    </section>
  );
}

function Header({ heading, reviewsBadge }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-secondary sm:text-4xl">
        {heading.line1}
        <br />
        {heading.line2}
        <span className="text-primary">{heading.highlight}</span>
        {heading.suffix}
      </h2>

      <div className="flex flex-wrap items-start gap-2 text-right w-[150px]">
        <div className="text-xl font-medium text-secondary">
          {reviewsBadge.label}{" "}
          <span className="font-extrabold text-primary text-2xl">
            {reviewsBadge.count}
          </span>
        </div>
        <div className="text-xl font-medium text-secondary">
          {reviewsBadge.suffix}
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel({ items }) {
  // Simple, dependency-free carousel
  // (You can swap to embla later if you want swipe/drag)
  const [index, setIndex] = useState(0);
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative mt-10">
      <div className="relative grid items-center gap-8 lg:grid-cols-[360px_1fr]">
        {/* Left image card */}
        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
            <Image
              src={current.imageSrc}
              alt={current.imageAlt || "Testimonial image"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority={false}
            />
          </div>

          {/* Left arrow (over image) */}
        </div>

        {/* Right quote card (overlay feel) */}
        <div className="relative">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-[-80px] z-[99999] top-1/2 -translate-y-1/2 rounded-full bg-black p-2 shadow-md ring-1 ring-black/10 transition hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <div className="relative rounded-3xl bg-white p-7 shadow-[0_16px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5 sm:p-10 lg:-ml-16">
            {/* Big quote marks */}
            <div className="pointer-events-none absolute -left-6 -top-7 text-[90px] font-black leading-none text-primary">
              “
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-8 text-[90px] font-black leading-none text-primary">
              ”
            </div>

            <p className="max-w-2xl text-[15px] leading-7 text-zinc-600 sm:text-base">
              {current.text}
            </p>

            <div className="mt-8 font-semibold text-zinc-900">
              {current.name}
            </div>
          </div>
          {/* Right arrow (on quote card edge) */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 shadow-md ring-1 ring-black/10 transition hover:scale-105"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
