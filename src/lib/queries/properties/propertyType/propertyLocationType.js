import { requestHandler } from "@/lib/requestHandler";
import { client } from "@/lib/strapiClient";

export async function getPropertyLocationType() {
  return requestHandler(async () => {
    const propertyLocationTypeAPI = client.collection(
      "property-location-types",
    );
    return propertyLocationTypeAPI.find({
      populate: "*",
    });
  });
}
