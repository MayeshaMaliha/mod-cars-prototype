import React from 'react';
import { Gauge, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gauge className="h-6 w-6 text-amber-500" />
              <h2 className="text-xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                MOD CARS
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered car modification visualizer that helps you build your dream car virtually before making real investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Visualizer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Modification Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Parts Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Installation Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Custom Builds</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <a href="mailto:info@modcars.com" className="text-gray-400 hover:text-amber-500 transition-colors">info@modcars.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-amber-500 transition-colors">+1 (800) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MOD CARS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;