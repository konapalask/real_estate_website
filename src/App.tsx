import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyListings from './components/PropertyListings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProperties />
      <PropertyListings />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;