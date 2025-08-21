import React from 'react';
import { Award, Users, Building, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Building className="w-12 h-12" />,
      number: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "1000+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "15+",
      label: "Years Experience"
    }
  ];

  const features = [
    "Prime location properties",
    "Legal documentation support",
    "Transparent pricing",
    "Expert consultation",
    "Post-sale support",
    "Investment guidance"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Suryahh Developers
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of excellence in the real estate industry, Suryahh Developers 
              has been the trusted partner for thousands of families in finding their dream homes 
              and investment properties.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in premium residential, commercial, and land development projects 
              across Mumbai and its suburbs. Our commitment to quality, transparency, and 
              customer satisfaction has made us one of the most respected names in real estate.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium">
              Learn More
            </button>
          </div>
          
          {/* Image and Stats */}
          <div>
            <div className="relative mb-8">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="About Suryahh Developers"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-blue-50 p-6 rounded-lg">
                  <div className="text-blue-800 flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-600 text-sm">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;