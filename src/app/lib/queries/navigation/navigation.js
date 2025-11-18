import { client } from "@/app/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getNavigation() {
  return requestHandler(async () => {
    const navigation = client.single("navigation");
    return navigation.find();
  });
}
