import Navigation from "../navigation/navigation";
import ImageRenderer from "../UI/ImageRenderer/ImageRenderer";

export default function Header({ navigation, data }) {
  return (
    <div className="pt-10 h-[70vh] relative">
      <Navigation navigation={navigation} />
      <ImageRenderer
        className="-z-1"
        src={data.hero_image[0].url}
        alt={"Background Image"}
        fill
      />
    </div>
  );
}
