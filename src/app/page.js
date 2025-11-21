import { getAppGlobalServer } from "@/app/lib/init/appGlobalsInit.server";
import AppGlobalsInit from "@/app/lib/init/appGlobalsInit.client";
import Header from "./components/header/header";

export default async function Home() {
  const { navigation, properties, homeData } = await getAppGlobalServer();
  console.log("navigation", navigation);
  console.log("homeData", homeData);
  console.log("properties", properties);
  return (
    <div>
      <AppGlobalsInit globals={{ navigation, properties, homeData }} />
      <Header navigation={navigation.data} data={homeData.data} />
    </div>
  );
}
