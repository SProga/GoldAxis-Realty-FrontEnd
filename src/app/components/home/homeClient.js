"use client";
import { useAppStore } from "@/app/lib/stores/useAppStore";
import Header from "../Header/Header";
import LoadingScreen from "../UI/loadingScreen/loadingScreen";
import ServicesSection from "../sections/ServicesPreview/ServicesPreviewSection";
import PropertiesPreviewSection from "../sections/PropertiesPreview/PropertiesPreview";
import AboutPreviewSection from "../sections/AboutPreview/AboutPreview";
import ContactPreviewSection from "../sections/ContactPreview/ContactPreview";

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
      <ServicesSection />
      <PropertiesPreviewSection allProperties={allProperties} />
      <AboutPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
