import { getAllProperties } from "../queries/properties/properties";
import { getNavigation } from "../queries/navigation/navigation";
import { getHomeData } from "../queries/home/home";
import { getParishData } from "../queries/parish/parish";

let cachedInit = null;

export async function getAppGlobalServer() {
  if (!cachedInit) {
    try {
      const [navigation, properties, homeData, parishData] = await Promise.all([
        getNavigation(),
        getAllProperties(),
        getHomeData(),
        getParishData(),
      ]);

      cachedInit = {
        navigation,
        properties,
        homeData,
        parishData,
      };
    } catch (e) {
      console.error("Failed to initialize global app data:", e);
      cachedInit = {};
    }
  }

  return cachedInit;
}
