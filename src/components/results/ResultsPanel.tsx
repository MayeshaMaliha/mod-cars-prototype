import React, { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';
import { Sliders, ShoppingCart, Info, Star, X, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { getModifications } from '../../data/modificationsData';

interface ResultsPanelProps {
  formData: {
    make: string;
    model: string;
    year: number;
    modificationType: string;
    budget: number;
    currency: string;
  };
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ formData }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('parts');
  
  const modifications = getModifications(formData.modificationType, formData.budget);
  
  // Calculate totals
  const partsTotal = modifications.reduce((sum, mod) => sum + mod.price, 0);
  const laborTotal = Math.round(partsTotal * 0.3); // Estimated labor cost
  const totalCost = partsTotal + laborTotal;
  
  // Categories for grouping
  const categories = Array.from(new Set(modifications.map(mod => mod.category)));
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="card p-6 my-12">
      <h3 className="text-2xl font-orbitron font-bold mb-6">
        Modification Results
      </h3>
      
      {/* Price Summary */}
      <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">Price Breakdown</h4>
          <span className="text-2xl font-orbitron font-bold text-amber-500">
            {formatCurrency(totalCost, formData.currency)}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-gray-300">
            <span>Parts Total</span>
            <span>{formatCurrency(partsTotal, formData.currency)}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Labor (Estimated)</span>
            <span>{formatCurrency(laborTotal, formData.currency)}</span>
          </div>
          <div className="border-t border-gray-700 my-2"></div>
          <div className="flex justify-between font-medium">
            <span>Total Cost</span>
            <span>{formatCurrency(totalCost, formData.currency)}</span>
          </div>
        </div>
        
        <button className="btn btn-primary w-full">
          Book Installation
        </button>
      </div>
      
      {/* Modification Parts */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-800/50 rounded-lg" 
          onClick={() => toggleSection('parts')}
        >
          <h4 className="text-lg font-semibold flex items-center">
            <Sliders className="mr-2 h-5 w-5 text-amber-500" />
            Modification Parts
          </h4>
          {expandedSection === 'parts' ? 
            <ChevronUp className="h-5 w-5 text-gray-400" /> : 
            <ChevronDown className="h-5 w-5 text-gray-400" />
          }
        </div>
        
        {expandedSection === 'parts' && (
          <div className="mt-4 space-y-6">
            {categories.map(category => (
              <div key={category} className="space-y-4">
                <h5 className="font-semibold text-amber-500">{category}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modifications
                    .filter(mod => mod.category === category)
                    .map(mod => (
                      <div key={mod.id} className="bg-gray-800/50 border border-gray-700 hover:border-amber-500/30 rounded-lg p-4 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h6 className="font-medium">{mod.name}</h6>
                          <span className="text-amber-500 font-medium">
                            {formatCurrency(mod.price, formData.currency)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{mod.description}</p>
                        
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < mod.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`} 
                              />
                            ))}
                            <span className="text-xs text-gray-400 ml-1">({mod.reviews})</span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="text-xs mr-1">Compatibility:</span>
                            <span 
                              className={`text-xs font-medium 
                                ${mod.compatibility > 90 ? 'text-green-500' : 
                                  mod.compatibility > 75 ? 'text-amber-500' : 'text-red-500'}`}
                            >
                              {mod.compatibility}%
                            </span>
                          </div>
                        </div>
                        
                        <button className="w-full btn btn-secondary flex items-center justify-center text-sm py-1">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </button>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Alternative Suggestions */}
      <div>
        <div 
          className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-800/50 rounded-lg"
          onClick={() => toggleSection('suggestions')}
        >
          <h4 className="text-lg font-semibold flex items-center">
            <Info className="mr-2 h-5 w-5 text-amber-500" />
            Budget Alternatives
          </h4>
          {expandedSection === 'suggestions' ? 
            <ChevronUp className="h-5 w-5 text-gray-400" /> : 
            <ChevronDown className="h-5 w-5 text-gray-400" />
          }
        </div>
        
        {expandedSection === 'suggestions' && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Lower Budget Option</h5>
                    <p className="text-sm text-gray-400">
                      {formatCurrency(Math.round(formData.budget * 0.7), formData.currency)}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Focus on essential performance upgrades only</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Standard rather than premium components</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-400">Some visual mods excluded</span>
                  </li>
                </ul>
                
                <button className="btn btn-secondary w-full text-sm">
                  View Lower Budget Option
                </button>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                    <ChevronUp className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Premium Option</h5>
                    <p className="text-sm text-gray-400">
                      {formatCurrency(Math.round(formData.budget * 1.3), formData.currency)}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">All current modifications included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Premium brand components throughout</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Additional cosmetic enhancements</span>
                  </li>
                </ul>
                
                <button className="btn btn-primary w-full text-sm">
                  View Premium Option
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPanel;