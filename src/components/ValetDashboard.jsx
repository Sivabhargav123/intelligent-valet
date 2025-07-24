import React from 'react';

const ValetDashboard = ({ gate }) => {
  return (
    <div style={{ margin: '1rem', background: '#f0f8ff', padding: '1rem', borderRadius: '10px' }}>
      <h2>Valet Dashboard</h2>
      {gate ? (
        <p>🚗 Please deliver the car to <strong>{gate.name}</strong>!</p>
      ) : (
        <p>Waiting for user location...</p>
      )}
    </div>
  );
};

export default ValetDashboard;
