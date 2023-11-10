import React from 'react';
import './index';
import Header from './scenes/Header';
import InfoBox from './scenes/InfoBox';
import ContactUs from './scenes/ContactUs';

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
