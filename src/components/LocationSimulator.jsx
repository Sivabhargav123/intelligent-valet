import React, { useEffect, useState } from 'react';
import { predictGate } from '../utils/gatePrediction';

const LocationSimulator = ({ onGatePredicted, onPositionChange }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported!");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        // Convert real GPS coords to virtual space for simulation
        const x = (pos.coords.latitude % 1) * 100;
        const y = (pos.coords.longitude % 1) * 100;
        const newPosition = { x, y };

        setPosition(newPosition);
        onPositionChange(newPosition);

        const gate = predictGate(newPosition);
        onGatePredicted(gate);

        // Optional: show notification
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(`🚗 Car is heading to ${gate.name}`);
        }
      },
      (error) => console.error("Geolocation error:", error),
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [onGatePredicted, onPositionChange]);

  return (
    <div>
      <h3>📍 Real-Time User Location</h3>
      <p>X: {position.x.toFixed(2)} | Y: {position.y.toFixed(2)}</p>
    </div>
  );
};

export default LocationSimulator;
