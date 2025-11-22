"use client";
import { useAppStore } from "@/app/lib/stores/useAppStore";
import PropertySearchPanelClient from "../search/PropertySearchPanel/PropertySearchPanelClient";
import Header from "../header/header";
import Container from "../UI/container/container";
import FeaturedSection from "../sections/featured/featuredSection";
import LoadingScreen from "../UI/loadingScreen/loadingScreen";

export default function HomeClient({ navigation, homeData }) {
  const initialized = useAppStore((state) => state.initialized);

  if (!initialized) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header navigation={navigation} data={homeData} />
      <div className="max-w-1/2 mx-auto">
        <PropertySearchPanelClient />
      </div>
      <Container className="pt-8 mt-50" size="sm">
        <FeaturedSection pageData={homeData} />
      </Container>
    </>
  );
}
