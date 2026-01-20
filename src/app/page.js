import { getAppGlobalServer } from "@/app/lib/init/appGlobalsInit.server";
import AppGlobalsInit from "@/app/lib/init/appGlobalsInit.client";
import HomeClient from "./components/home/homeClient";

export default async function Home() {
  const { navigation, properties, homeData, parishData } =
    await getAppGlobalServer();
  console.log("navigation", navigation);
  console.log("homeData", homeData);
  console.log("properties", properties);

  return (
    <div>
      <AppGlobalsInit
        globals={{ navigation, properties, homeData, parishData }}
      />
      <HomeClient
        navigation={navigation.data}
        homeData={homeData.data}
        parishData={parishData}
        allProperties={properties}
      />
    </div>
  );
}
