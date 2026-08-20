import { ShieldCheck, Star, Users } from "lucide-react";
import AboutFeatureItem from "./AboutFeatureItem";

const default_features = [
  {
    id: 1,
    title: "Exclusive Access",
    description:
      "Off-market listings and private showings for qualified buyers.",
    icon: Star,
  },
  {
    id: 2,
    title: "Trusted Expertise",
    description: "Award-winning agents with deep market knowledge.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "White-Glove Service",
    description: "Personalized attention from first inquiry to closing.",
    icon: Users,
  },
];

export default function AboutFeatureList({ features }) {
  const feature_list = features?.length ? features : default_features;

  return (
    <div className="flex flex-col gap-5">
      {feature_list.map((feature) => (
        <AboutFeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
