"use client";
import FAQAccordion from "@/components/FAQs/FAQAccordion";
import FAQIntro from "@/components/FAQs/FAQIntro";
import { useState } from "react";

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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground md:px-6 md:py-16">
      <div className="mx-auto max-w-[1200px] rounded-[18px] border border-primary/40 bg-background/90 p-6 shadow-[0_0_0_1px_rgba(217,174,43,0.1)] md:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          <FAQIntro />
          <FAQAccordion
            items={faqItems}
            openIndex={openIndex}
            onToggle={(index) => setOpenIndex(openIndex === index ? -1 : index)}
          />
        </div>
      </div>
    </main>
  );
}
