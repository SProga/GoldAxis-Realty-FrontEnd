import MortgageCalculator from "@/components/MortgageCalculator/MortgageCalculator";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mortgage Calculator | Gold Axis Realty",
  description: "Estimate your mortgage payments and explore a yearly amortization breakdown.",
};

export default function MortgageCalculatorPage() {
  return <MortgageCalculator firstYear={new Date().getFullYear()} />;
}
