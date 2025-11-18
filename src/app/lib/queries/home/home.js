import { client } from "@/app/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getHomeData() {
  return requestHandler(async () => {
    const homeAPI = client.single("home");
    return homeAPI.find({
      populate: "*",
    });
  });
}
