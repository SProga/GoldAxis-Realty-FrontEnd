// components/about/About.js
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import Button from "../../UI/button/button";

export default function About({
  role = "Owner",
  firstName = "Chad",
  lastName = "Proverbs",
  tagline = "Helping you find more than a house — a place to call home.",
  points = [
    "Integrity-driven guidance",
    "Deep local expertise",
    "Results-focused strategies",
    "Trusted by buyers & sellers",
  ],
  paragraphs = [
    {
      bold: "Chad Proverbs",
      text: " is a dedicated real estate professional with ",
      highlight: "Gold Axis Realty",
      tail: ", known for his integrity, energy, and commitment to outstanding results.",
    },
    {
      text: "Combining deep local market insight with modern marketing strategies, Chad helps clients buy and sell with clarity and confidence. His approach is personal, strategic, and always centered on long-term relationships — not just transactions.",
    },
    {
      text: "Whether guiding first time buyers, supporting growing families, or managing complex investment deals, Chad delivers service tailored to each client's goals.",
    },
  ],
  ctaText = "Meet Chad",
  ctaHref = "/about",
  imageSrc = "/owner_photo.png", // put in /public/about/chad.jpg or pass remote URL
  imageAlt = "Portrait of Chad Proverbs",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f4ef]">
      {/* Background texture + subtle geometry */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft paper gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fbf8f3] to-[#f1eee8]" />
        {/* faint diagonal sheen */}
        <div className="absolute -right-40 top-[-140px] h-[520px] w-[720px] rotate-[18deg] rounded-[64px] bg-white/45 blur-[1px]" />
        {/* subtle gold dust */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_20%_15%,#c7a24a_0,transparent_38%),radial-gradient(circle_at_70%_65%,#c7a24a_0,transparent_42%)]" />
        {/* big X watermark vibe */}
        <div className="absolute right-[-160px] top-[-120px] h-[520px] w-[520px] rotate-45 rounded-[90px] border border-black/5 bg-white/10" />
        <div className="absolute right-[-80px] top-[-40px] h-[380px] w-[380px] rotate-45 rounded-[80px] border border-black/5 bg-white/10" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          {/* Left: Portrait */}
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority={false}
            />
          </div>

          {/* Right: Content */}
          <div className="relative">
            {/* Role pill */}
            <div className="mb-5">
              <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c7a24a] to-primary px-8 py-2 text-sm font-semibold tracking-[0.22em] text-black/90 shadow-sm ring-1 ring-black/5">
                {role.toUpperCase()}
              </span>
            </div>

            {/* Name (thin + bold like mockup) */}
            <h2 className="leading-[0.95]">
              <span className="block font-[300] tracking-[0.12em] text-zinc-900/95 text-4xl sm:text-5xl">
                {firstName.toUpperCase()}
              </span>
              <span className="mt-1 block text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
                {lastName.toUpperCase()}
              </span>
            </h2>

            {/* Tagline */}
            <p className="mt-6 text-xl font-medium text-zinc-800/90">
              {tagline}
            </p>

            {/* Divider line */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#c7a24a]/40 via-black/10 to-transparent" />

            {/* Points (2 columns) */}
            <div className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#c7a24a]/18 ring-1 ring-[#c7a24a]/30">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-base font-medium text-zinc-800">
                    {p}
                  </span>
                </div>
              ))}
            </div>

            {/* Body copy */}
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-zinc-700">
              {/* Paragraph 1 (with bold + highlight like mockup) */}
              <p>
                <span className="font-semibold text-zinc-900">
                  {paragraphs?.[0]?.bold ?? `${firstName} ${lastName}`}
                </span>
                {paragraphs?.[0]?.text ??
                  " is a dedicated real estate professional with "}
                <span className="font-medium text-primary">
                  {paragraphs?.[0]?.highlight ?? "Gold Axis Realty"}
                </span>
                {paragraphs?.[0]?.tail ?? ", known for integrity and results."}
              </p>

              {paragraphs?.slice(1).map((p, idx) => (
                <p key={idx}>{p.text}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button className="py-2">
                {ctaText}
                <span className="inline-flex ml-4 h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition group-hover:bg-white/15">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
