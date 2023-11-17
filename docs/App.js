import React from 'react';
import './index';
import Header from './src/scenes/Header';
import InfoBox from './src/scenes/InfoBox';
import ContactUs from './src/scenes/ContactUs';

function App() {
  return (
    <div className="container">
      <Header />
      <InfoBox />
      <ContactUs />
    </div>
  );
}

export default App;
