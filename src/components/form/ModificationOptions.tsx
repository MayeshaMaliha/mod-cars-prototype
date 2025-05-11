import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface ModificationOptionsProps {
  formData: {
    modificationType: string;
    budget: number;
    currency: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
}

const ModificationOptions: React.FC<ModificationOptionsProps> = ({ 
  formData, 
  setFormData,
  onSubmit
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'budget' ? Number(value) : value
    });
  };

  const modificationTypes = [
    { id: 'performance', label: 'Performance', description: 'Focus on engine, suspension, and handling upgrades' },
    { id: 'exterior', label: 'Exterior', description: 'Body kits, wheels, paint, and visual enhancements' },
    { id: 'interior', label: 'Interior', description: 'Seats, dashboard, entertainment, and comfort upgrades' },
    { id: 'balanced', label: 'Balanced', description: 'Equal distribution across performance and aesthetics' },
  ];

  const getQualityTier = (budget: number) => {
    if (budget < 5000) return { tier: 'Entry', color: 'text-gray-400' };
    if (budget < 15000) return { tier: 'Mid-Range', color: 'text-blue-400' };
    if (budget < 30000) return { tier: 'Premium', color: 'text-purple-400' };
    return { tier: 'Elite', color: 'text-amber-400' };
  };

  const qualityTier = getQualityTier(formData.budget);

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <div>
        <label className="block text-gray-300 mb-4">
          Modification Type
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modificationTypes.map((type) => (
            <div 
              key={type.id}
              className={`
                p-4 border rounded-lg cursor-pointer transition-all duration-300
                ${formData.modificationType === type.id 
                  ? 'border-amber-500 bg-gray-800' 
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'}
              `}
              onClick={() => setFormData({...formData, modificationType: type.id})}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  id={type.id}
                  name="modificationType"
                  value={type.id}
                  checked={formData.modificationType === type.id}
                  onChange={handleInputChange}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${formData.modificationType === type.id ? 'bg-amber-500' : 'bg-gray-700'}`}>
                  {formData.modificationType === type.id && (
                    <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                  )}
                </div>
                <label htmlFor={type.id} className="font-medium cursor-pointer">
                  {type.label}
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-400 ml-6">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="budget" className="block text-gray-300">
            Budget
          </label>
          <div className="flex items-center space-x-2">
            <select
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              className="input-field py-1 px-2 text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
            </select>
            <span className="text-lg font-semibold text-gray-200">
              {formatCurrency(formData.budget, formData.currency)}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <input
            type="range"
            id="budget"
            name="budget"
            min="1000"
            max="50000"
            step="1000"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$1,000</span>
            <span>$25,000</span>
            <span>$50,000</span>
          </div>
        </div>
        
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Quality Tier:</span>
            <span className={`font-semibold ${qualityTier.color}`}>{qualityTier.tier}</span>
          </div>
          <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gray-400 via-blue-400 to-amber-400"
              style={{ width: `${(formData.budget / 50000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <button 
          type="submit" 
          className="btn btn-primary w-full py-3 text-lg"
          disabled={!formData.make || !formData.model}
        >
          Visualize Modifications
        </button>
      </div>
    </form>
  );
};

export default ModificationOptions;