'use client';

import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl, LayersControl, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import styled from 'styled-components'
import { AccessTokenDecode } from '@/utils/TokenDecode';

interface MapProps {
  latitude: number;
  longitude: number;
  photoUrl: string;
  childname: string;
  lastupdateTime: string;
  neighborhood: string;
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

const svgIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<svg fill =${AccessTokenDecode.location_color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="#3498db"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`
});

const Map: React.FC<MapProps> = ({ latitude, longitude, childname, photoUrl, lastupdateTime, neighborhood }) => {
  const mapRef = useRef<L.Map | null>(null);
  const [zoomLevel, setZoomLevel] = useState(13);
//   const [user,setUser]  = useState()
  useEffect(() => {
    
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], zoomLevel);
    }
  }, [latitude, longitude, zoomLevel]);

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
      zoomControl={false}
      whenReady={(map) => {
        map.target.on('zoomend', handleZoomEnd);
      }}
    >
      <CustomLayersControl position="topright">
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
        <LayersControl.Overlay checked name="Localisation de l'enfant">
          <FeatureGroup>
            <Marker position={[latitude, longitude]} icon={svgIcon}>
              <Tooltip permanent direction="top" offset={[0, -20]} opacity={1}>
                <InfoWindow>
                  <ChildPhoto src={photoUrl} alt={childname} />
                  <InfoTitle>{childname}</InfoTitle>
                  <InfoText>Latitude: {latitude.toFixed(4)}</InfoText>
                  <InfoText>Longitude: {longitude.toFixed(4)}</InfoText>
                  <InfoText>Dernière mise à jour: {lastupdateTime}</InfoText>
                  <InfoText>Zoom actuel: {zoomLevel}</InfoText>
                  <InfoText>Neighborhood: {neighborhood}</InfoText>
                </InfoWindow>
              </Tooltip>
            </Marker>
          </FeatureGroup>
        </LayersControl.Overlay>
      </CustomLayersControl>
      <ZoomControl position="bottomright" />
    </StyledMapContainer>
  )
}

export default Map
