import React from 'react';
import './App.css';
import '@saeris/typeface-beleren-bold';
import 'mana-font/css/mana.min.css';

import Honeycomb from './components/Honeycomb/Honeycomb';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Honeycomb />
    </div>
  );
}

export default App;
