import { client } from "@/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getAllProperties() {
  return requestHandler(async () => {
    const propertiesAPI = client.collection("properties");
    return propertiesAPI.find({
      populate: "*",
    });
  });
}

export async function getPropertyBySlug(slug) {
  return requestHandler(
    async () => {
      const propertiesAPI = client.collection("properties");
      return propertiesAPI.find({
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: "*",
      });
    },
    { single: true },
  );
}
