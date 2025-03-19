import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <WaitlistForm />
    </div>
  );
}

export default App;
