'use client'

import React, { useState } from 'react'
import { MapPin, Calendar, Bell, ShoppingBag, CreditCard, Map } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('map')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [userPoints, setUserPoints] = useState(100)

  const recyclingCompanies = [
    { id: 1, name: "EcoRecycle", position: [3.848, 11.502], schedule: ["Lundi", "Mercredi", "Vendredi"] },
    { id: 2, name: "GreenWaste", position: [3.860, 11.521], schedule: ["Mardi", "Jeudi", "Samedi"] },
    { id: 3, name: "CleanEarth", position: [3.839, 11.486], schedule: ["Lundi", "Jeudi", "Samedi"] }
  ]

  const handleCompanyClick = (company) => {
    setSelectedCompany(company)
  }

  const handleSubscribe = () => {
    if (selectedCompany) {
      alert(`Vous êtes maintenant abonné à ${selectedCompany.name}`)
      setUserPoints(prevPoints => prevPoints + 10)
    }
  }

  const handleAlert = () => {
    if (selectedCompany) {
      alert(`Une alerte a été envoyée à ${selectedCompany.name} pour une collecte supplémentaire`)
    } else {
      alert("Veuillez d'abord vous abonner à une entreprise")
    }
  }

  const handlePublishWaste = () => {
    alert("Votre annonce de déchets à vendre a été publiée sur notre plateforme e-commerce")
  }

  const renderMap = () => (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[3.848, 11.502]} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {recyclingCompanies.map(company => (
          <Marker
            key={company.id}
            position={company.position}
            eventHandlers={{
              click: () => handleCompanyClick(company),
            }}
          >
            <Popup>{company.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Carte des entreprises de recyclage</h2>
            {renderMap()}
            {selectedCompany && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{selectedCompany.name}</h3>
                <p className="mb-2">Jours de collecte : {selectedCompany.schedule.join(', ')}</p>
                <button
                  onClick={handleSubscribe}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                >
                  S'abonner
                </button>
              </div>
            )}
          </div>
        )
      case 'calendar':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Calendrier de collecte</h2>
            {selectedCompany ? (
              <div>
                <h3 className="text-xl font-bold mb-2">{selectedCompany.name}</h3>
                <ul>
                  {selectedCompany.schedule.map((day, index) => (
                    <li key={index} className="mb-2">{day}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Veuillez sélectionner une entreprise sur la carte pour voir son calendrier</p>
            )}
          </div>
        )
      case 'alert':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Alerter pour une collecte supplémentaire</h2>
            <button
              onClick={handleAlert}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Envoyer une alerte
            </button>
          </div>
        )
      case 'publish':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Publier des déchets à vendre</h2>
            <textarea
              className="w-full p-2 mb-4 border rounded dark:bg-gray-800"
              rows={4}
              placeholder="Décrivez les déchets que vous souhaitez vendre..."
            ></textarea>
            <button
              onClick={handlePublishWaste}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Publier l annonce
            </button>
          </div>
        )
      case 'points':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Vos points bonus</h2>
            <p className="text-3xl font-bold text-primary mb-4">{userPoints} points</p>
            <p>Vous pouvez échanger vos points contre des services gratuits ou de l argent.</p>
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
          { id: 'calendar', icon: <Calendar className="h-6 w-6" />, label: 'Calendrier' },
          { id: 'alert', icon: <Bell className="h-6 w-6" />, label: 'Alerte' },
          { id: 'publish', icon: <ShoppingBag className="h-6 w-6" />, label: 'Publier' },
          { id: 'points', icon: <CreditCard className="h-6 w-6" />, label: 'Points' },
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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-16">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">3R</span>
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
    </div>
  )
}

export default ClientDashboard