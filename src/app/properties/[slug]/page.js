import { notFound } from "next/navigation";
import PropertyDetails from "@/components/Property/PropertyDetails";
import { getPropertyBySlug } from "@/lib/queries/properties/properties";

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  return (
    <>
      <PropertyDetails property={property} />
    </>
  );
}
