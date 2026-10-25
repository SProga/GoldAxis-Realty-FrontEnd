"use client";

import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import FAQIntro from "./FAQIntro";
import classes from "./FAQStyles.module.css";

const faqItems = [
  {
    question: "What types of properties does Urbanest offer?",
    answer:
      "Urbanest offers a wide range of modern, eco-friendly urban living spaces, including apartments, townhouses, and lofts. Our properties are designed to suit different lifestyles, whether you're a single professional, a couple, or a family looking for a sustainable home in the heart of the city.",
  },
  {
    question: "How do I schedule a property tour?",
    answer:
      "You can book a tour directly through our website, or get in touch with our team by phone or email. Once we know your preferred property and timing, we'll coordinate a convenient viewing appointment for you.",
  },
  {
    question: "Are Urbanest homes pet-friendly?",
    answer:
      "Many of our homes are pet-friendly, though individual policies can vary by building and unit. Please share your pet details with our team and we'll confirm availability and any related requirements before you proceed.",
  },
  {
    question: "How do I get started with Urbanest?",
    answer:
      "The first step is to tell us what you're looking for in a home, including location, budget, and move-in timeframe. From there, our advisors will shortlist suitable options and guide you through each stage of the process.",
  },
  {
    question: "Can I rent an Urbanest property instead of purchasing?",
    answer:
      "Yes. Urbanest offers both rental and purchase options depending on your needs. If you're looking for flexibility or a short-term city move, renting may be the ideal fit and we can help you explore the best available homes.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="relative overflow-hidden bg-background px-4 pb-8 pt-[120px] text-foreground md:px-6 md:pb-12">
      <div className="relative isolate mx-auto max-w-[1200px] overflow-hidden rounded-[18px] border border-primary/40 bg-background/90 shadow-[0_0_0_1px_rgba(0,0,0,0.18)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-[444px] w-full max-w-[460px] overflow-hidden lg:h-[400px] lg:w-[38%]"
        >
          <div
            className={`h-full w-full bg-cover bg-center bg-no-repeat ${classes.background}`}
          />
        </div>

        <div className="relative z-10 p-6 pb-[280px] md:p-8 md:pb-[280px] lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
            <div className="lg:pb-[260px]">
              <FAQIntro />
            </div>
            <div className="self-center">
              <FAQAccordion
                items={faqItems}
                openIndex={openIndex}
                onToggle={(index) =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
