"use client";
import { useAppStore } from "@/app/lib/stores/useAppStore";
import PropertySearchPanelClient from "../search/PropertySearchPanel/PropertySearchPanelClient";
import Header from "../header/header";
import Container from "../UI/container/container";
import FeaturedSection from "../sections/featured/featuredSection";
import LoadingScreen from "../UI/loadingScreen/loadingScreen";
import DiscoveredSection from "../sections/discovered/discoveredSection";
import Properties from "../sections/properties/properties";
import About from "../sections/about/about";
import Testimonials from "../sections/testimonials/testimonials";

export default function HomeClient({
  navigation,
  homeData,
  parishData,
  allProperties,
}) {
  const initialized = useAppStore((state) => state.initialized);

  if (!initialized) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header navigation={navigation} data={homeData} />
      <div className="max-w-1/2 mx-auto">
        <PropertySearchPanelClient parishData={parishData} />
      </div>
      <Container className="pt-8 my-50" size="sm">
        <FeaturedSection pageData={homeData} />
      </Container>
      <DiscoveredSection />
      <Container className="pt-8 mt-20">
        <Properties allProperties={allProperties} />
      </Container>
      <div className="mt-20">
        <About />
      </div>
      <div className="mt-20">
        <Testimonials
          backgroundSlot={<div className="absolute inset-0"></div>}
          items={[
            {
              id: "t1",
              name: "Sam Kontas",
              text: "As a first-time buyer, I had no idea where to start. The Gold Axis Realty team walked me through every step, found properties that matched my budget, and made sure I felt confident signing the papers. I can't thank them enough!",
              imageSrc: "/home_testimonial.png",
              imageAlt: "Property exterior",
            },
            {
              id: "t2",
              name: "Alicia Browne",
              text: "Professional, responsive, and genuinely helpful. We sold quickly and felt supported throughout the process.",
              imageSrc: "/home_testimonial.png",
              imageAlt: "Home exterior",
            },
          ]}
        />
      </div>
    </>
  );
}
