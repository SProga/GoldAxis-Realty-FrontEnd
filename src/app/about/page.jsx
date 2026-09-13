import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutPersonalApproach from "@/components/About/AboutPersonalApproach";
import { getAboutData } from "@/lib/queries/about/about";
import AboutTestimonials from "@/components/About/AboutTestimonials";

export const metadata = {
  title: "About | Gold Axis",
  description:
    "Personalised real estate guidance in Barbados, built on local knowledge, lasting relationships and a commitment to exceptional service.",
};

export default async function AboutPage() {
  const about = await getAboutData();
  if (!about) return <main className="pt-[86px]" />;
  return (
    <main className="pt-[86px]">
      <AboutHero data={about} />
      <AboutStory data={about} />
      <AboutPersonalApproach data={about} />
      <AboutTestimonials
        items={about.testimonials ?? []}
        eyebrow={about.testimonial_eyebrow}
        title={about.testimonial_title}
      />
    </main>
  );
}
