import React from 'react';
import PropertyCard from './PropertyCard';
import PropertyFilter from './PropertyFilter';

const PropertyListings = () => {
  const properties = [
    {
      id: 5,
      title: "Cozy 2BHK Apartment",
      location: "Powai, Mumbai",
      price: "₹85 L",
      type: "House",
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 2,
      baths: 2,
      area: "1200 sq ft",
      status: "for-sale" as const
    },
    {
      id: 6,
      title: "Residential Plot with Clear Title",
      location: "Thane West, Mumbai",
      price: "₹1.5 Cr",
      type: "Land",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "2000 sq ft",
      status: "for-sale" as const
    },
    {
      id: 7,
      title: "Furnished Studio Apartment",
      location: "Malad West, Mumbai",
      price: "₹25K/month",
      type: "House",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 1,
      baths: 1,
      area: "600 sq ft",
      status: "for-rent" as const
    },
    {
      id: 8,
      title: "Industrial Warehouse",
      location: "Bhiwandi, Mumbai",
      price: "₹8 Cr",
      type: "Building",
      image: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "25000 sq ft",
      status: "for-sale" as const
    },
    {
      id: 9,
      title: "Premium 3BHK Penthouse",
      location: "Worli, Mumbai",
      price: "₹6.5 Cr",
      type: "House",
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 3,
      baths: 3,
      area: "2800 sq ft",
      status: "sold" as const
    },
    {
      id: 10,
      title: "Agricultural Land",
      location: "Panvel, Mumbai",
      price: "₹45 L",
      type: "Land",
      image: "https://images.pexels.com/photos/1435659/pexels-photo-1435659.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "8000 sq ft",
      status: "for-sale" as const
    }
  ];

  return (
    <section id="properties" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">All Properties</h2>
          <p className="text-xl text-gray-600">Browse through our complete property portfolio</p>
        </div>
        
        <PropertyFilter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md">1</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">2</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">3</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;