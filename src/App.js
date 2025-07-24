import React, { useState } from 'react';
import LocationSimulator from './components/LocationSimulator';
import ValetDashboard from './components/ValetDashboard';
import MallMap from './components/MallMap';
import DeliveryETA from './components/DeliveryETA';
import './App.css'


const App = () => {
  const [predictedGate, setPredictedGate] = useState(null);
  const [userPosition, setUserPosition] = useState({ x: 50, y: 50 });

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🅿️ Intelligent Valet System</h1>
      <LocationSimulator
        onGatePredicted={setPredictedGate}
        onPositionChange={setUserPosition}
      />
      <MallMap userPosition={userPosition} />
      <ValetDashboard gate={predictedGate} />
      <DeliveryETA />
    </div>
  );
};

export default App;
