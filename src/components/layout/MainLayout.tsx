import React from 'react';
import HeroSection from '../sections/HeroSection';
import Visualizer from '../sections/Visualizer';

const MainLayout: React.FC = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <Visualizer />
    </main>
  );
};

export default MainLayout;