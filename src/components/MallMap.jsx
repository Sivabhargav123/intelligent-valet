import React from 'react';

const gates = [
  { id: 'A', name: 'Gate A', x: 10, y: 90 },
  { id: 'B', name: 'Gate B', x: 90, y: 90 },
  { id: 'C', name: 'Gate C', x: 90, y: 10 },
  { id: 'D', name: 'Gate D', x: 10, y: 10 },
];

const MallMap = ({ userPosition }) => {
  return (
    <div style={{ border: '1px solid #ccc', width: 300, height: 300, position: 'relative', marginTop: '1rem' }}>
      {/* Gates */}
      {gates.map(gate => (
        <div
          key={gate.id}
          style={{
            position: 'absolute',
            left: `${gate.x}%`,
            top: `${gate.y}%`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '10px'
          }}
        >
          {gate.name}
        </div>
      ))}

      {/* User */}
      <div
        style={{
          position: 'absolute',
          left: `${userPosition.x}%`,
          top: `${userPosition.y}%`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'blue',
          width: 10,
          height: 10,
          borderRadius: '50%',
          border: '2px solid white'
        }}
      ></div>
    </div>
  );
};

export default MallMap;
