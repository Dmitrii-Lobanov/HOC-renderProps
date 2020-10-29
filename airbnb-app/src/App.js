import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './components/Header';
import Explore from './components/Explore';
import AirbnbPlus from './components/AirbnbPlus';
import Adventures from './components/Adventures';
import Places from './components/Places';
import Experiences from './components/Experiences';
import PopularDestinations from './components/PopularDestinations';
import FeaturedDestinations from './components/FeaturedDestinations';
import Footer from './components/Footer';

library.add(fab);

function App() {
  return (
    <div className="app">
      <Header />
      <Explore />
      <AirbnbPlus />
      <Adventures />
      <Places />
      <Experiences />
      <PopularDestinations />
      <FeaturedDestinations />
      <Footer />
    </div>
  );
}

export default App;
