'use client'

import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, Circle, ZoomControl, LayersControl, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import styled from 'styled-components'

interface MapProps {
  latitude: number;
  longitude: number;
  photoUrl: string;
  childname: string;
  lastupdateTime: string;
  neighborhood :string
}

const StyledMapContainer = styled(MapContainer)`
  height: 600px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`

const InfoWindow = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const ChildPhoto = styled.img`
  width: 65%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const InfoTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`

const InfoText = styled.p`
  margin: 4px 0;
  color: #34495e;
  font-size: 12px;
  line-height: 1.4;
`

const CustomLayersControl = styled(LayersControl)`
  .leaflet-control-layers-toggle {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

const locationIcon = new L.Icon({
    iconUrl: 'assets/location/1.png',  // Remplacez par le chemin de l'image de localisation
    iconSize: [50, 50],  // Ajustez la taille selon vos besoins
    iconAnchor: [25, 50], // Ancre au centre bas de l'icône
  });


const Map: React.FC<MapProps> = ({ latitude, longitude, childname, photoUrl, lastupdateTime ,neighborhood}) => {
  const mapRef = useRef<L.Map | null>(null);
  const [zoomLevel, setZoomLevel] = useState(13);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], zoomLevel);
    }
  }, [latitude, longitude, zoomLevel]);

  const customIcon = new L.Icon({
    iconUrl: '/marker1.png',  // Remplacez par le chemin de votre icône personnalisée
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const handleZoomEnd = () => {
    if (mapRef.current) {
      setZoomLevel(mapRef.current.getZoom());
    }
  };

  return (
    <StyledMapContainer 
      center={[latitude, longitude]} 
      zoom={zoomLevel} 
      ref={mapRef}
      zoomControl={false}  // Désactive le contrôle de zoom par défaut
      whenReady={(map) => {
        map.target.on('zoomend', handleZoomEnd);
      }}
    >
      
      <CustomLayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Localisation de l'enfant">
          <FeatureGroup>
            {/* <Marker position={[latitude, longitude]} icon={customIcon}>
              <Tooltip permanent direction="top" offset={[0, -20]} opacity={1}>
                <InfoWindow>
                 <InfoText>Latitude: {latitude.toFixed(4)}</InfoText>

                <ChildPhoto src={'assets/location/1.jpg'} alt={childname} />   
                <InfoTitle>{childname}</InfoTitle>
                  <InfoText>Latitude: {latitude.toFixed(4)}</InfoText>
                  <InfoText>Longitude: {longitude.toFixed(4)}</InfoText>
                  <InfoText>Dernière mise à jour: {lastupdateTime}</InfoText>
                  <InfoText>Zoom actuel: {zoomLevel}</InfoText>
                  <InfoText>Neighborhood : {neighborhood }</InfoText>
                </InfoWindow>
              </Tooltip>
            </Marker> */}
           <Marker
           position={[latitude,longitude]}
           icon={locationIcon}
           >
           </Marker>
          </FeatureGroup>
        </LayersControl.Overlay>
      </CustomLayersControl>
      <ZoomControl position="bottomright" />
    </StyledMapContainer>
  )
}

export default Map