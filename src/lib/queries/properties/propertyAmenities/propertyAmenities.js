import { requestHandler } from "@/lib/requestHandler";
import { client } from "@/lib/strapiClient";

export async function getPropertyAmenities() {
  return requestHandler(async () => {
    const propertyAmenitiesAPI = client.collection("property-amenities");
    return propertyAmenitiesAPI.find({
      populate: "*",
    });
  });
}
