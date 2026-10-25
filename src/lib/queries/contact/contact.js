import { client } from "@/lib/strapiClient";
import { requestHandler } from "@/lib/requestHandler";

export async function getContactData() {
  return requestHandler(async () => {
    return client.single("contact").find({
      populate: "*",
    });
  });
}
