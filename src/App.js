import React from 'react';
import '@saeris/typeface-beleren-bold';
import 'mana-font/css/mana.min.css';


import Header from './components/Header';
import HoneycombContainter from './components/HoneycombContainer';
import Honeycomb from './components/Honeycomb';

function App() {

  const items = Array(50).fill(<Honeycomb />)

  return (
    <div>
      <Header />
      <HoneycombContainter>{items}</HoneycombContainter>
    </div>
  );
}

export default App;
