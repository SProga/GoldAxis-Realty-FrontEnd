import { client } from "@/lib/strapiClient";
import { requestHandler } from "@/lib/requestHandler";

export async function getAboutData() {
  return requestHandler(async () => {
    return client.single("about").find({
      populate: {
        hero_image: true,
        story_image: true,
        story_features: true,
        personal_image: true,
        testimonials: {
          fields: ["name", "description", "rating"],
        },
      },
    });
  });
}
