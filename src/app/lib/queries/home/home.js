import { client } from "@/app/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

console.log("client2", client.single);
export async function getHomeData() {
  return requestHandler(async () => {
    const homeAPI = client.single("home");
    console.log("homeAPI", homeAPI);
    return homeAPI.find({
      populate: "*",
    });
  });
}
