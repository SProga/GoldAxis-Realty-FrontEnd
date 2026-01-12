import Button from "../../UI/button/button";
import PropertyList from "../../UI/property/propertyList";

const properties = [
  {
    id: "1",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 430000,
    currency: "BBD",
  },
  {
    id: "2",
    href: "/demo_home.jpg",
    status: "Rent",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill rental",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 2800,
    currency: "BBD",
    perMonth: true,
  },
  {
    id: "3",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 830000,
    currency: "BBD",
  },
  {
    id: "7",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 830000,
    currency: "BBD",
  },
  {
    id: "4",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 830000,
    currency: "BBD",
  },
  {
    id: "5",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 830000,
    currency: "BBD",
  },
  {
    id: "6",
    href: "/demo_home.jpg",
    status: "Buy",
    imageSrc: "/demo_home.jpg",
    imageAlt: "Edgehill house",
    bedrooms: 5,
    bathrooms: 3,
    location: "Edgehill, St.Thomas",
    price: 830000,
    currency: "BBD",
  },
  // add more...
];

export default function Properties() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="text-3xl">
            Explore our catalog of premiere homes —
          </div>
          <div className="text-xl mt-4 font-light">
            Each listing offers a unique experience
          </div>
        </div>
        <div className="text-end">
          <Button className="py-4">View all properties</Button>
        </div>
      </div>
      <div className="mt-10">
        <PropertyList properties={properties} />
      </div>
    </div>
  );
}
