import { getAppGlobalServer } from "@/lib/init/appGlobalsInit.server";
import HomeClient from "../components/Home/HomeClient";

export default async function Home() {
  const { properties, homeData, parishData } = await getAppGlobalServer();

  return (
    <div>
      <HomeClient
        homeData={homeData.data}
        parishData={parishData}
        allProperties={properties}
      />
    </div>
  );
}
