import { requestHandler } from "@/lib/requestHandler";
import { client } from "@/lib/strapiClient";

export async function getServicesPageData() {
  return requestHandler(async () => {
    const servicePageAPI = client.single("service");

    return servicePageAPI.find({
      populate: {
        hero: true,
        services: {
          populate: {
            icon: true,
            background_image: true,
            features: {
              populate: {
                icon: true,
              },
            },
          },
        },
        footer_cta: true,
      },
    });
  });
}
