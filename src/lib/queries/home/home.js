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
        section_preview: {
          populate: {
            service_card: {
              populate: "*",
            },
          },
        },
      },
    });
  });
}
