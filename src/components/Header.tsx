import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@suryahhdevelopers.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-blue-800" />
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Suryahh Developers</h1>
              <p className="text-sm text-gray-600">Premium Real Estate Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Home</a>
            <a href="#properties" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Properties</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">Contact</a>
          </nav>
          
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium">
            List Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;