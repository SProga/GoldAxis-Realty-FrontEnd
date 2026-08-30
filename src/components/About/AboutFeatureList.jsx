import AboutFeatureItem from "./AboutFeatureItem";

export default function AboutFeatureList({ features }) {
  return (
    <div className="flex flex-col gap-5">
      {features.map((feature) => (
        <AboutFeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
