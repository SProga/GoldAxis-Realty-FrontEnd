import Image from "next/image";
import Navigation from "../navigation/navigation";

export default async function Header({ navigation, data }) {
  console.log(
    "data.hero_image",
    `${process.env.NEXT_PUBLIC_CMS_URL}${data.hero_image[0].url}`
  );
  const imageUrl = new URL(
    data.hero_image[0].url,
    process.env.NEXT_PUBLIC_CMS_URL
  ).toString();

  return (
    <div className="pt-10 h-[70vh] relative">
      <Navigation navigation={navigation} />
      <Image
        className="-z-1"
        src={imageUrl}
        alt={"Background Image"}
        fill
        unoptimized={true}
      />
    </div>
  );
}
