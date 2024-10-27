'use client';

import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl, LayersControl, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';

interface Company {
  latitude: number;
  longitude: number;
  photoUrl: string;
  name: string;
  lastUpdateTime: string;
  neighborhood: string;
  color: string; // Couleur pour l'icône
}

const StyledMapContainer = styled(MapContainer)`
  height: 400px; /* Taille moyenne ajustée */
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  margin:100px
`;

const InfoWindow = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ChildPhoto = styled.img`
  width: 65%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`;

const InfoText = styled.p`
  margin: 4px 0;
  color: #34495e;
  font-size: 12px;
  line-height: 1.4;
`;

const CustomLayersControl = styled(LayersControl)`
  .leaflet-control-layers-toggle {

    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const createIcon = (color: string) => {
  return new L.DivIcon({
    className: 'custom-icon',
    html: `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
  });
};

const Map: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const mapRef = useRef<L.Map | null>(null);
  const [zoomLevel, setZoomLevel] = useState(13);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null); // État pour l'entreprise sélectionnée

  useEffect(() => {
    if (companies.length > 0 && mapRef.current) {
      mapRef.current.setView([companies[0].latitude, companies[0].longitude], zoomLevel);
    }
  }, [companies, zoomLevel]);

  const handleZoomEnd = () => {
    if (mapRef.current) {
      setZoomLevel(mapRef.current.getZoom());
    }
  };

  const handleMarkerClick = (company: Company) => {
    setSelectedCompany(company); // Met à jour l'entreprise sélectionnée
  };

  return (
    <StyledMapContainer 
    
      center={[companies[0].latitude, companies[0].longitude]} 
      zoom={zoomLevel} 
      ref={mapRef}
      zoomControl={false}
      whenReady={(map) => {
        map.target.on('zoomend', handleZoomEnd);
      }}
    >
      <CustomLayersControl position="topright" >
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; Esri'
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Localisation des entreprises">
          <FeatureGroup>
            {companies.map((company, index) => (
              <Marker 
                key={index} 
                position={[company.latitude, company.longitude]} 
                icon={createIcon(company.color)} 
                eventHandlers={{
                  click: () => handleMarkerClick(company), 
                }}
              >
                <Tooltip permanent direction="top" offset={[0, -20]} opacity={1}>
                  <InfoTitle>{company.name}</InfoTitle>
                </Tooltip>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </CustomLayersControl>
      <ZoomControl position="bottomright" />

      {/* Afficher les détails de l'entreprise sélectionnée */}
      {selectedCompany && (
        <InfoWindow style={{ position: 'absolute', bottom: '10%', left: '10%', zIndex: 1000 }}>
          <InfoTitle>{selectedCompany.name}</InfoTitle>
          <InfoText>Dernière mise à jour: {selectedCompany.lastUpdateTime}</InfoText>
          <InfoText>Neighborhood: {selectedCompany.neighborhood}</InfoText>
          <button className='m-5 text-sm text-red-500' onClick={() => setSelectedCompany(null)}>Fermer</button>
        </InfoWindow>
      )}
    </StyledMapContainer>
  );
};

export default Map;