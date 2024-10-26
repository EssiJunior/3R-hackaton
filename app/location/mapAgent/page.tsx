import React from 'react';
import Map from './mapAgent';

const App = () => {
  const agent = {
    latitude: 48.8566,
    longitude: 2.3522,
  };

  const households = [
    {
      latitude: 48.8606,
      longitude: 2.3376,
      color: '#3498db',
      photoUrl: 'https://example.com/photo1.jpg',
      childname: 'Alice',
      lastupdateTime: '2024-10-01 12:00',
      neighborhood: 'Quartier Latin',
    },
    {
      latitude: 48.8437,
      longitude: 2.3385,
      color: '#e74c3c',
      photoUrl: 'https://example.com/photo2.jpg',
      childname: 'Bob',
      lastupdateTime: '2024-10-02 14:30',
      neighborhood: 'Le Marais',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carte des Ménages et de l'Agent</h1>
      <Map agent={agent} households={households} />
    </div>
  );
};

export default App;