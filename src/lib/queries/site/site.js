import { client } from "@/lib/strapiClient";
import { requestHandler } from "@/lib/requestHandler";

export async function getSiteData() {
  return requestHandler(async () => {
    return client.single("site-setting").find({
      populate: {
        logo: true,
        favicon: true,
        social_link: {
          populate: { icon: true },
        },
      },
    });
  });
}
