import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa with Private Garden",
      location: "Bandra West, Mumbai",
      price: "₹3.5 Cr",
      type: "House",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 4,
      baths: 3,
      area: "2500 sq ft",
      status: "for-sale" as const,
      featured: true
    },
    {
      id: 2,
      title: "Commercial Plot Near Highway",
      location: "Andheri East, Mumbai",
      price: "₹2.2 Cr",
      type: "Land",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "5000 sq ft",
      status: "for-sale" as const,
      featured: true
    },
    {
      id: 3,
      title: "Modern Office Building",
      location: "Lower Parel, Mumbai",
      price: "₹12 Cr",
      type: "Building",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "15000 sq ft",
      status: "for-sale" as const,
      featured: true
    },
    {
      id: 4,
      title: "Spacious Family Home",
      location: "Juhu, Mumbai",
      price: "₹4.8 Cr",
      type: "House",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      beds: 5,
      baths: 4,
      area: "3200 sq ft",
      status: "for-sale" as const,
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600">Discover our handpicked premium properties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium text-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;