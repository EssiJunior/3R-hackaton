'use client';

import Map from '@/app/localisation/mapComponent';
import { useEffect, useState } from 'react';
import image from '@/public/assets/location/1.jpg'

const HomePage = () => {

  

const companies = [
  {
    latitude: 3.8862848,
    longitude: 11.5081216,
    photoUrl: 'url_to_photo1',
    name: 'Entreprise 1',
    lastUpdateTime: '2024-10-26',
    neighborhood: 'Quartier 1',
    color: '#3498db', // Couleur de l'icône
  },
  {

// 3.8862848
// 11.5081216
    latitude: 3.8575,
    longitude: 11.3585,
    photoUrl: 'url_to_photo2',
    name: 'Entreprise 2',
    lastUpdateTime: '2024-10-26',
    neighborhood: 'Quartier 2',
    color: '#e74c3c', // Couleur de l'icône
  },
  // Ajoutez d'autres entreprises...
];


  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [neighborhood, setNeighborhood] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = async (pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);

      try {
        const neighborhoodName = await getNeighborhood(latitude, longitude);
        setNeighborhood(neighborhoodName);
        console.log('Neighborhood:', neighborhoodName);
      } catch (err) {
        console.error("Erreur lors de la récupération du quartier :", err);
      }
    };

    const handleError = (err) => {
      setError(err.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, handleError);
    } else {
      setError("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }, []);

  const latitude = position.latitude !== null ? position.latitude : 52.5200066; // Valeur par défaut
  const longitude = position.longitude !== null ? position.longitude : 13.404954; // Valeur par défaut

  const getNeighborhood = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data?.address?.neighbourhood || data?.address?.suburb || 'Quartier inconnu';
  };

  return (
    <div>
      <h1>Localisation sur la carte</h1>
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
    <Map companies={companies} />
    </div>
  );
};

export default HomePage;
