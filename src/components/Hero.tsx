import React from 'react';
import { Search, MapPin, Home, Building, TreePine } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Find Your Perfect Property
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover premium lands, houses, and commercial buildings with Suryahh Developers
          </p>
          
          {/* Search bar */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                  <option>All Types</option>
                  <option>House</option>
                  <option>Land</option>
                  <option>Building</option>
                  <option>Commercial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Enter location"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                  <option>Any Budget</option>
                  <option>Under ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2Cr</option>
                  <option>Above ₹2Cr</option>
                </select>
              </div>
              
              <button className="bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 font-medium">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-blue-200">Properties Listed</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-blue-200">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-blue-200">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;