import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

const PropertyFilter = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filter Properties</span>
        </h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Reset Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All Types</option>
            <option>House</option>
            <option>Land</option>
            <option>Building</option>
            <option>Commercial</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All Status</option>
            <option>For Sale</option>
            <option>For Rent</option>
            <option>Sold</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>No Min</option>
            <option>₹25L</option>
            <option>₹50L</option>
            <option>₹75L</option>
            <option>₹1Cr</option>
            <option>₹2Cr</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>No Max</option>
            <option>₹50L</option>
            <option>₹1Cr</option>
            <option>₹2Cr</option>
            <option>₹5Cr</option>
            <option>₹10Cr</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <SlidersHorizontal className="w-4 h-4" />
          <span>More Filters</span>
        </button>
        
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Clear
          </button>
          <button className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;