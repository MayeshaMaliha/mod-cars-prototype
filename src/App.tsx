import React from 'react';
import Header from './components/layout/Header';
import MainLayout from './components/layout/MainLayout';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
