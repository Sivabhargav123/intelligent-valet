import React, { useEffect, useState } from 'react';

const DeliveryETA = () => {
  const [secondsLeft, setSecondsLeft] = useState(60); // assume valet takes 60s

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>⏱️ Car Arrival ETA: {secondsLeft}s</h3>
    </div>
  );
};

export default DeliveryETA;
