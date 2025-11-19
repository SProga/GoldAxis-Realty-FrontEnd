import { getAllProperties } from "../queries/properties/properties";
import { getNavigation } from "../queries/navigation/navigation";
import { getHomeData } from "../queries/home/home";

let cachedInit = null;

export async function getAppGlobalServer() {
  if (!cachedInit) {
    try {
      const [navigation, properties, homeData] = await Promise.all([
        getNavigation(),
        getAllProperties(),
        getHomeData(),
      ]);

      cachedInit = {
        navigation,
        properties,
        homeData,
      };
    } catch (e) {
      console.error("Failed to initialize global app data:", e);
      cachedInit = {};
    }
  }

  return cachedInit;
}
