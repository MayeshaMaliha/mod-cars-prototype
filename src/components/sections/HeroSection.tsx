import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4 text-white drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              BUILD IT
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              YOUR WAY
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The AI-powered platform that helps you visualize car modifications before making real investments. Design your dream ride with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="btn btn-primary text-lg py-3 px-8 animate-pulse-slow">
              Start Visualizing
            </button>
            <button className="btn btn-secondary text-lg py-3 px-8">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 animate-bounce-slow">
            <a href="#visualizer" className="inline-block text-amber-500 hover:text-amber-400 transition-colors">
              <span className="block text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;