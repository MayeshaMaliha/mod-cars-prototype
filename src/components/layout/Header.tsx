import React from 'react';
import { Gauge } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gauge className="h-8 w-8 text-amber-500" />
          <h1 className="text-2xl md:text-3xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            MOD CARS
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a 
            href="#visualizer" 
            className="font-medium hover:text-amber-500 transition-colors duration-300"
          >
            Visualizer
          </a>
          <a 
            href="#about" 
            className="font-medium hover:text-amber-500 transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="#pricing" 
            className="font-medium hover:text-amber-500 transition-colors duration-300"
          >
            Pricing
          </a>
        </nav>
        <div className="flex space-x-4">
          <button className="btn btn-secondary hidden md:inline-block">
            Login
          </button>
          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;