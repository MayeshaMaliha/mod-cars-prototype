import React from 'react';
import { carMakes, getModelsForMake } from '../../data/carData';

interface CarFormProps {
  formData: {
    make: string;
    model: string;
    year: number;
    color: string;
    vin: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const CarForm: React.FC<CarFormProps> = ({ formData, setFormData }) => {
  const years = Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 2025 - i);
  const models = formData.make ? getModelsForMake(formData.make) : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If changing make, reset model
    const newFormData = { ...formData, [name]: value };
    if (name === 'make') {
      newFormData.model = '';
    }
    
    setFormData(newFormData);
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="make" className="block text-gray-300 mb-2">
            Make
          </label>
          <select
            id="make"
            name="make"
            value={formData.make}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          >
            <option value="">Select Make</option>
            {carMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="model" className="block text-gray-300 mb-2">
            Model
          </label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            className="input-field w-full"
            disabled={!formData.make}
            required
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="year" className="block text-gray-300 mb-2">
            Year
          </label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="color" className="block text-gray-300 mb-2">
            Color
          </label>
          <div className="flex input-field p-1">
            <input
              type="color"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="w-10 h-10 rounded border-0 cursor-pointer"
            />
            <input
              type="text"
              value={formData.color}
              onChange={handleInputChange}
              name="color"
              className="flex-grow bg-transparent border-0 ml-2 focus:outline-none text-gray-300"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="vin" className="block text-gray-300 mb-2">
          Chassis/VIN (Optional)
        </label>
        <input
          type="text"
          id="vin"
          name="vin"
          value={formData.vin}
          onChange={handleInputChange}
          placeholder="Enter VIN for more accurate results"
          className="input-field w-full"
        />
        <p className="mt-1 text-xs text-gray-500">
          Providing your VIN helps us deliver more accurate modification recommendations.
        </p>
      </div>
    </form>
  );
};

export default CarForm;