import { getAppGlobalServer } from "@/lib/init/appGlobalsInit.server";
import HomeClient from "../components/Home/HomeClient";

export default async function Home() {
  const { properties, homeData, parishData, siteSettings } = await getAppGlobalServer();

  return (
    <div>
      <HomeClient
        siteSettings={siteSettings}
        homeData={homeData}
        parishData={parishData}
        allProperties={properties}
      />
    </div>
  );
}
