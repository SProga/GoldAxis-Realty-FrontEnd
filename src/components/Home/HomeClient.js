"use client";
import { useAppStore } from "@/lib/stores/useAppStore";
import Header from "../Header/Header";

import ServicesSection from "../Sections/ServicesPreview/ServicesPreviewSection";
import PropertiesPreviewSection from "../Sections/PropertiesPreview/PropertiesPreview";
import AboutPreviewSection from "../Sections/AboutPreview/AboutPreview";
import ContactPreviewSection from "../Sections/ContactPreview/ContactPreview";
import LoadingScreen from "../UI/LoadingScreen/LoadingScreen";

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
      <ServicesSection service_preview={homeData.section_preview} />
      <PropertiesPreviewSection allProperties={allProperties} />
      <AboutPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
