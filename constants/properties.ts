export const PROPERTYLISTINGSAMPLE = [
  {
    id: 1,
    name: "Seaside Villa",
    price: "$250/night",
    rating: 4.8,
    image: "/assets/villa.jpg",
  },
  {
    id: 2,
    name: "City Apartment",
    price: "$120/night",
    rating: 4.5,
    image: "/assets/apartment.jpg",
  },
  {
    id: 3,
    name: "Country House",
    price: "$180/night",
    rating: 4.7,
    image: "/assets/countryside.jpg",
  },
];

import { PROPERTYLISTINGSAMPLE } from "@/constants/properties";

{/* Listing Section */}
<section className="py-10 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    {PROPERTYLISTINGSAMPLE.map((property) => (
      <div
        key={property.id}
        className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden"
      >
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <p className="text-sm text-gray-600">{property.price}</p>
          <p className="text-yellow-500 text-sm mt-1">⭐ {property.rating}</p>
        </div>
      </div>
    ))}
  </div>
</section>
