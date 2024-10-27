'use client'

import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { Map, Calendar, Bell, User, Truck } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState('map')
  const [selectedHouse, setSelectedHouse] = useState(null)
  const [collectedHouses, setCollectedHouses] = useState([])
  const [showCollectionModal, setShowCollectionModal] = useState(false)
  const [sortingScore, setSortingScore] = useState(5)

  // Mock data for subscribed houses and route
  const subscribedHouses = [
    { id: 1, position: [3.848, 11.502], address: "123 Rue de la Paix" },
    { id: 2, position: [3.850, 11.505], address: "456 Avenue des Fleurs" },
    { id: 3, position: [3.852, 11.508], address: "789 Boulevard du Soleil" },
  ]

  const route = [
    [3.848, 11.502],
    [3.850, 11.505],
    [3.852, 11.508],
  ]

  const handleHouseClick = (house) => {
    setSelectedHouse(house)
    setShowCollectionModal(true)
  }

  const handleCollectionComplete = () => {
    if (selectedHouse) {
      setCollectedHouses([...collectedHouses, selectedHouse.id])
      // Here you would typically send this data to your backend
      alert(`Collection completed for ${selectedHouse.address}. Sorting score: ${sortingScore}/10`)
      setShowCollectionModal(false)
      setSelectedHouse(null)
      setSortingScore(5)
    }
  }

  const renderMap = () => (
    <div className="h-[calc(100vh-120px)] w-full rounded-lg overflow-hidden">
      <MapContainer center={[3.850, 11.505]} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {subscribedHouses.map(house => (
          <Marker
            key={house.id}
            position={house.position}
            eventHandlers={{
              click: () => handleHouseClick(house),
            }}
            icon={new L.Icon({
              iconUrl: collectedHouses.includes(house.id) 
                ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
                : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
          >
            <Popup>{house.address}</Popup>
          </Marker>
        ))}
        <Polyline positions={route} color="blue" />
      </MapContainer>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Carte des collectes</h2>
            {renderMap()}
          </div>
        )
      case 'schedule':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Planning des collectes</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-white dark:bg-gray-800 rounded shadow">Lundi: Secteur Nord</li>
              <li className="p-2 bg-white dark:bg-gray-800 rounded shadow">Mercredi: Secteur Centre</li>
              <li className="p-2 bg-white dark:bg-gray-800 rounded shadow">Vendredi: Secteur Sud</li>
            </ul>
          </div>
        )
      case 'alerts':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Alertes</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-white dark:bg-gray-800 rounded shadow">Collecte supplémentaire requise au 123 Rue de la Paix</li>
              <li className="p-2 bg-white dark:bg-gray-800 rounded shadow">Problème de tri signalé au 456 Avenue des Fleurs</li>
            </ul>
          </div>
        )
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profil de l'agent</h2>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <img src="/placeholder.svg" alt="Agent" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center mb-2">Jean Dupont</h3>
              <p className="text-center mb-4">Agent de collecte</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> jean.dupont@3r.com</p>
                <p><strong>Téléphone:</strong> +237 123 456 789</p>
                <p><strong>Zone assignée:</strong> Secteur Nord</p>
                <p><strong>Performance du mois:</strong> 95%</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const renderTabBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex justify-around">
        {[
          { id: 'map', icon: <Map className="h-6 w-6" />, label: 'Carte' },
          { id: 'schedule', icon: <Calendar className="h-6 w-6" />, label: 'Planning' },
          { id: 'alerts', icon: <Bell className="h-6 w-6" />, label: 'Alertes' },
          { id: 'profile', icon: <User className="h-6 w-6" />, label: 'Profil' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === tab.id ? 'text-primary' : 'text-gray-500'
            }`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )

  const renderCollectionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Confirmer la collecte</h3>
        <p className="mb-4">Adresse: {selectedHouse?.address}</p>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Qualité du tri:</label>
          <input 
            type="range" 
            min="0" 
            max="10" 
            value={sortingScore} 
            onChange={(e) => setSortingScore(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between">
            <span>0</span>
            <span>{sortingScore}</span>
            <span>10</span>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={() => setShowCollectionModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Annuler
          </button>
          <button 
            onClick={handleCollectionComplete}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Confirmer la collecte
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-16">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">3R Agent</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-6 w-6 text-primary mr-2" />
              <span>En service</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {renderContent()}
        </div>
      </main>

      {renderTabBar()}
      {showCollectionModal && renderCollectionModal()}
    </div>
  )
}

export default AgentDashboard