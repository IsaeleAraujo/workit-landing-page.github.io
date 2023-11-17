import React from 'react';
import './index.js';
import Header from './scenes/Header.jsx';
import InfoBox from './scenes/InfoBox.jsx';
import ContactUs from './scenes/ContactUs.jsx';

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
