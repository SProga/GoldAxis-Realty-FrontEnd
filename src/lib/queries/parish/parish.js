import { client } from "@/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getParishData() {
  return requestHandler(async () => {
    const parishAPI = client.collection("parishes");
    return parishAPI.find({
      populate: "*",
    });
  });
}
