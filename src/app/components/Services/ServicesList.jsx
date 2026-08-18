import { Building2, House, KeyRound, TrendingUp } from "lucide-react";
import ServiceCard from "./ServiceCard";

const default_services = [
  {
    id: 1,
    title: "Buy",
    description:
      "Discover exclusive properties curated for the most discerning buyers.",
    icon: House,
  },
  {
    id: 2,
    title: "Rent",
    description: "Premium rental properties that redefine luxury living.",
    icon: KeyRound,
  },
  {
    id: 3,
    title: "Sell",
    description:
      "Maximize your property value with our elite marketing strategies.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Manage",
    description: "White-glove property management for peace of mind.",
    icon: Building2,
  },
];

export default function ServicesList({ services }) {
  const service_list = services?.length ? services : default_services;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {service_list.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
