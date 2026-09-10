import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutPersonalApproach from "@/components/About/AboutPersonalApproach";
import AboutTestimonials from "@/components/About/AboutTestimonials";

export const metadata = {
  title: "About | Prestige Estates",
  description:
    "Personalised real estate guidance in Barbados, built on local knowledge, lasting relationships and a commitment to exceptional service.",
};

export default function AboutPage() {
  return (
    <main className="pt-[86px]">
      <AboutHero />
      <AboutStory />
      <AboutPersonalApproach />
      <AboutTestimonials />
    </main>
  );
}
