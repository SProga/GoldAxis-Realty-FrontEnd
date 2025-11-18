import { getHomeData } from "@/app/lib/queries/home/home";

export default async function Home() {
  const home = await getHomeData();
  return <div></div>;
}
