import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Phone } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  beds?: number;
  baths?: number;
  area: string;
  status: 'for-sale' | 'sold' | 'for-rent';
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'for-sale': return 'bg-emerald-500';
      case 'sold': return 'bg-red-500';
      case 'for-rent': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'for-sale': return 'For Sale';
      case 'sold': return 'Sold';
      case 'for-rent': return 'For Rent';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status badge */}
        <div className={`absolute top-3 left-3 ${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {getStatusText(property.status)}
        </div>
        
        {/* Featured badge */}
        {property.featured && (
          <div className="absolute top-3 right-12 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        
        {/* Like button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`}
          />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </span>
          <span className="text-2xl font-bold text-emerald-600">{property.price}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        {/* Property details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {property.beds && (
              <div className="flex items-center space-x-1">
                <Bed className="w-4 h-4" />
                <span>{property.beds} Beds</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4" />
                <span>{property.baths} Baths</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Square className="w-4 h-4" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors font-medium">
            View Details
          </button>
          <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;