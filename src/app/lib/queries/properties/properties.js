import { client } from "@/app/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getAllProperties() {
  return requestHandler(async () => {
    const propertiesAPI = client.collection("properties");
    return propertiesAPI.find();
  });
}
