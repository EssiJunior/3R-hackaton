'use client'

import React, { useState } from 'react'
import { MapPin, Calendar, Bell, ShoppingBag, CreditCard, Map } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import MapClient from '../location/mapClient/page'
import Modal from '@/components/CofirmModal'
import { usePathname } from 'next/navigation'

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});



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
    latitude: 4.9,
    longitude: 11.9585,
    photoUrl: 'url_to_photo2',
    name: 'Entreprise 2',
    lastUpdateTime: '2024-10-26',
    neighborhood: 'Quartier 2',
    color: '#e74c3c', // Couleur de l'icône
  },

  {

    // 3.8862848
    // 11.5081216
        latitude: 3.8575,
        longitude: 12.5,
        photoUrl: 'url_to_photo2',
        name: 'Entreprise 3',
        lastUpdateTime: '2024-10-26',
        neighborhood: 'bonas , cradat',
        color: 'green', // Couleur de l'icône
      },
  // Ajoutez d'autres entreprises...
];


const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('map')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [userPoints, setUserPoints] = useState(100)

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    // Ici, vous pouvez ajouter la logique pour publier la photo
    // Par exemple, envoyer le fichier à une API
    console.log('Uploading:', selectedFile);

    // Réinitialiser le champ après l'envoi (si nécessaire)
    setSelectedFile(null);
    setPreview('');
  };


  const recyclingCompanies = [
    { id: 1, name: "EcoRecycle", position: [3.848, 11.562], schedule: ["Lundi", "Mercredi", "Vendredi"] ,house:['12h','16h','13h'] ,kwatter:[
      'Akwa',
      'Biyem-Assi',
      'Mfoundi',
      'Etoudi',
      'Nkolfoulou',
      'Ngousso',
      'Obili',
      'Siddimé'
    ]},
    { id: 2, name: "GreenWaste", position: [3.860, 11.521], schedule: ["Mardi", "Jeudi", "Samedi"] ,house:['13h','15h','17h'],kwatter:[
      'Bastos',
      'Essos',
      'Ayaba',
      'Nkolbisson',
      'Nkolndongo',
      'Tsinga',
      'Nlongkak',
      'Mendong'
    ]},
    { id: 3, name: "CleanEarth", position: [3.839, 11.486], schedule: ["Lundi", "Jeudi", "Samedi"] ,house:['17h','14h','16h'],kwatter: [
      'Biyem-Assi',
      'Djoungolo',
      'Yaoundé Ville',
      'Nkolndongo',
      'Lynx',
      'Nkolbisson',
      'Wada',
      'Ngousso'
    ]}
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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    setActiveTab('calendar')
    // alert('Choix confirmé !');
    setModalOpen(false);
  };


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


  const [description, setDescription] = useState<string>("");

const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setDescription(event.target.value);
};

  const renderMap = () => (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <MapContainer center={[3.848, 11.502]} zoom={12} style={{ height: '100%', width: '100%' }} 
      
      scrollWheelZoom= {false}
      doubleClickZoom= {false}
     
      >
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
           {/* <MapClient/> */}
            {selectedCompany && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{selectedCompany.name}</h3>
                <p className="mb-2">Nos quartiers : {selectedCompany.kwatter.join(', ')}</p>
                <p className="mb-2">Jours de collecte : {selectedCompany.schedule.join(', ')}</p>
                <p className="mb-2">heure de collection : {selectedCompany.house.join(', ')}</p>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onConfirm={handleConfirm}
                  />
                <button
                  onClick={()=> setModalOpen(true)}
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


                <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
                <form onSubmit={handleUpload}>
  <h2 className="text-lg font-semibold mb-4">Publier vos dechets </h2>
  
  <input
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="mb-4 overflow-hidden"
  />
  
  <textarea
    placeholder="Ajouter une description..."
    onChange={handleDescriptionChange}
    className="w-full p-2 mb-4 border rounded text-gray-800"
  ></textarea>
  
  {preview && (
    <div className="mb-4">
      <img src={preview} alt="Prévisualisation" className="w-full h-auto rounded" />
    </div>
  )}
  
  <button
    type="submit"
    className="bg-green-500 text-white px-4 py-2 rounded"
  >
    Publier
  </button>
</form>

    </div>
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