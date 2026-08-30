import { client } from "@/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getHomeData() {
  return requestHandler(async () => {
    const homeAPI = client.single("home");

    return homeAPI.find({
      populate: {
        hero_image: {
          populate: true,
        },
        service_preview: {
          populate: {
            service_card: {
              populate: "*",
            },
          },
        },
        legacy_preview: {
          populate: {
            image: true,
            features: {
              populate: "*",
            },
          },
        },
        contact_preview: {
          populate: "*",
        },
      },
    });
  });
}
