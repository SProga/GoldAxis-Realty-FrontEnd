import { getAllProperties } from "../queries/properties/properties";
import { getNavigation } from "../queries/navigation/navigation";
import { getHomeData } from "../queries/home/home";
import { getParishData } from "../queries/parish/parish";
import { getSiteData } from "../queries/site/site";

let cachedInit = null;

export async function getAppGlobalServer() {
  if (!cachedInit) {
    try {
      const [navigation, properties, homeData, parishData, siteSettings] =
        await Promise.all([
          getNavigation(),
          getAllProperties(),
          getHomeData(),
          getParishData(),
          getSiteData(),
        ]);

      cachedInit = {
        navigation,
        properties,
        homeData,
        parishData,
        siteSettings,
      };
    } catch (e) {
      console.error("Failed to initialize global app data:", e);
      cachedInit = {};
    }
  }

  return cachedInit;
}
