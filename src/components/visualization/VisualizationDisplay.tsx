import React, { useState, useEffect } from 'react';
import { RefreshCw, RotateCw, Share2, Save } from 'lucide-react';

interface VisualizationDisplayProps {
  formData: {
    make: string;
    model: string;
    year: number;
    color: string;
    modificationType: string;
    budget: number;
  };
}

const VisualizationDisplay: React.FC<VisualizationDisplayProps> = ({ formData }) => {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'split' | '360'>('split');
  const [rotationAngle, setRotationAngle] = useState(0);
  
  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Simulate 360 view rotation
  useEffect(() => {
    if (viewMode === '360') {
      const interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 1) % 360);
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  const originalCarImage = "https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const modifiedCarImage = "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (loading) {
    return (
      <div className="card p-12 my-12 flex flex-col items-center justify-center">
        <RefreshCw className="w-16 h-16 text-amber-500 animate-spin mb-4" />
        <h3 className="text-xl font-orbitron text-center mb-2">Generating Visualization</h3>
        <p className="text-gray-400 text-center">
          Our AI is processing your configuration to create a realistic visualization...
        </p>
      </div>
    );
  }

  return (
    <div className="card p-4 md:p-8 my-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-orbitron font-bold">
          {formData.year} {formData.make} {formData.model}
        </h3>
        
        <div className="flex space-x-4">
          <button 
            className={`btn ${viewMode === 'split' ? 'btn-primary' : 'btn-secondary'} py-1 px-3`}
            onClick={() => setViewMode('split')}
          >
            Split View
          </button>
          <button 
            className={`btn ${viewMode === '360' ? 'btn-primary' : 'btn-secondary'} py-1 px-3`}
            onClick={() => setViewMode('360')}
          >
            360° View
          </button>
        </div>
      </div>
      
      {viewMode === 'split' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src={originalCarImage} 
              alt="Original Car" 
              className="w-full h-64 md:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="font-orbitron text-gray-200 text-lg">Original</span>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src={modifiedCarImage} 
              alt="Modified Car" 
              className="w-full h-64 md:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <span className="font-orbitron text-amber-500 text-lg">Modified</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-96 flex items-center justify-center bg-gray-900">
            <img 
              src={modifiedCarImage} 
              alt="360 View" 
              className="h-full object-contain"
              style={{ 
                transform: `rotateY(${rotationAngle}deg)`,
                transition: 'transform 0.1s ease-out' 
              }}
            />
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="bg-gray-800/80 text-amber-500 p-2 rounded-full">
                <RotateCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-center space-x-4 mt-6">
        <button className="btn btn-secondary py-2 px-4 flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Configuration</span>
        </button>
        <button className="btn btn-secondary py-2 px-4 flex items-center space-x-2">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default VisualizationDisplay;