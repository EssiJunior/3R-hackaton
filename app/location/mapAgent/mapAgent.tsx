'use client';

import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl, LayersControl, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';

interface Household {
  latitude: number;
  longitude: number;
  color: string;
  photoUrl: string;
  childname: string;
  lastupdateTime: string;
  neighborhood: string;
}

interface Agent {
  latitude: number;
  longitude: number;
}

interface MapProps {
  agent: Agent;
  households: Household[];
}

const StyledMapContainer = styled(MapContainer)`
  height: 600px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
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

const Map: React.FC<MapProps> = ({ agent, households }) => {
  const mapRef = useRef<L.Map | null>(null);
  const [zoomLevel, setZoomLevel] = useState(13);
  const [activeHouseholdIndex, setActiveHouseholdIndex] = useState<number | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([agent.latitude, agent.longitude], zoomLevel);
    }
  }, [agent, zoomLevel]);

  const handleZoomEnd = () => {
    if (mapRef.current) {
      setZoomLevel(mapRef.current.getZoom());
    }
  };

  return (
    <StyledMapContainer
      center={[agent.latitude, agent.longitude]}
      zoom={zoomLevel}
      ref={mapRef}
      zoomControl={false}
      whenReady={(map) => {
        map.target.on('zoomend', handleZoomEnd);
      }}
    >
      <CustomLayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution='&copy; Esri' />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Localisation de l'agent">
          <FeatureGroup>
            <Marker position={[agent.latitude, agent.longitude]} icon={new L.DivIcon({ className: 'agent-icon', html: '<div style="background-color: #f39c12; border-radius: 50%; width: 20px; height: 20px;"></div>' })}>
              <Tooltip permanent direction="top" offset={[0, -20]} opacity={1}>
                <InfoText>Agent en cours de déplacement</InfoText>
              </Tooltip>
            </Marker>
            {households.map((household, index) => (
              <Marker
                key={index}
                position={[household.latitude, household.longitude]}
                icon={new L.DivIcon({
                  className: 'household-icon',
                  html: `<div style="background-color: ${household.color}; border-radius: 50%; width: 20px; height: 20px;"></div>`
                })}
                eventHandlers={{
                  click: () => {
                    setActiveHouseholdIndex(activeHouseholdIndex === index ? null : index);
                  },
                }}
              >
                <Tooltip 
                  permanent={activeHouseholdIndex === index}
                  direction="top" 
                  offset={[0, -20]} 
                  opacity={1}
                >
                  {activeHouseholdIndex === index && (
                    <InfoWindow>
                      <ChildPhoto src={household.photoUrl} alt={household.childname} />
                      <InfoTitle>{household.childname}</InfoTitle>
                      <InfoText>Latitude: {household.latitude.toFixed(4)}</InfoText>
                      <InfoText>Longitude: {household.longitude.toFixed(4)}</InfoText>
                      <InfoText>Dernière mise à jour: {household.lastupdateTime}</InfoText>
                      <InfoText>Neighborhood: {household.neighborhood}</InfoText>
                    </InfoWindow>
                  )}
                </Tooltip>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </CustomLayersControl>
      <ZoomControl position="bottomright" />
    </StyledMapContainer>
  );
};

export default Map;