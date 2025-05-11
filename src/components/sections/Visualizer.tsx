import React, { useState } from 'react';
import CarForm from '../form/CarForm';
import ModificationOptions from '../form/ModificationOptions';
import VisualizationDisplay from '../visualization/VisualizationDisplay';
import ResultsPanel from '../results/ResultsPanel';

const Visualizer: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: 2022,
    color: '#ff0000',
    vin: '',
    modificationType: 'balanced',
    budget: 15000,
    currency: 'USD'
  });

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data);
    setIsSubmitted(true);
    
    // Scroll to results after a short delay to allow loading animation
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div id="visualizer" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Car Modification Visualizer
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Select your car details and preferred modifications to see a realistic preview 
            of how your car would look after the changes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <h3 className="text-xl font-orbitron font-bold mb-6 text-gray-200">Car Details</h3>
            <CarForm 
              formData={formData} 
              setFormData={setFormData} 
            />
          </div>
          
          <div className="card">
            <h3 className="text-xl font-orbitron font-bold mb-6 text-gray-200">Modification Options</h3>
            <ModificationOptions 
              formData={formData} 
              setFormData={setFormData} 
              onSubmit={() => handleFormSubmit(formData)}
            />
          </div>
        </div>

        {isSubmitted && (
          <>
            <VisualizationDisplay formData={formData} />
            <div id="results">
              <ResultsPanel formData={formData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Visualizer;