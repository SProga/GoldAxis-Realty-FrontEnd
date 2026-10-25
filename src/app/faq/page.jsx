import FAQClient from "@/components/FAQs/FAQPage";

export const metadata = {
  title: "FAQs | Gold Axis",
  description:
    "Find answers to common questions about property buying, renting, and investing with Gold Axis.",
};
export default async function FAQPage() {
  return <FAQClient />;
}
