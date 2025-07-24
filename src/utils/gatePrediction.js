// Mock gate data (gate coordinates)
const GATES = [
  { id: 'A', name: 'Gate A', x: 10, y: 90 },
  { id: 'B', name: 'Gate B', x: 90, y: 90 },
  { id: 'C', name: 'Gate C', x: 90, y: 10 },
  { id: 'D', name: 'Gate D', x: 10, y: 10 },
];

// Calculate distance between user and each gate
export function predictGate(userPosition) {
  let closestGate = null;
  let minDistance = Infinity;

  GATES.forEach(gate => {
    const dx = gate.x - userPosition.x;
    const dy = gate.y - userPosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < minDistance) {
      minDistance = distance;
      closestGate = gate;
    }
  });

  return closestGate;
}
