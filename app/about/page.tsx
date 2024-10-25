'use client'

import Image from 'next/image'
// import Link from 'next/link'
import { useState } from 'react'

export default function AboutPage() {
  const [activeService, setActiveService] = useState('tutorials')

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Section À propos */}
        <div className="flex items-center mb-16">
  <div className="relative flex-shrink-0">
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-48 h-48 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
      <Image
        src="/acceuil.webp"
        alt="3R Team Member"
        width={180}
        height={180}
        className="rounded-full"
      />
    </div>
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <span className="text-white text-2xl font-bold">À PROPOS</span>
    </div>
  </div>
  <div className="ml-16 bg-[#FFF0F5] p-20 rounded-lg flex-1">
    <h2 className="text-2xl font-bold text-primary mb-4">               VOUS CHERCHEZ DES CONSEILS EN GESTION DES DÉCHETS ?</h2>
    <p className="mb-4">
                            Si vous cherchez à faire plus que simplement jeter vos déchets, nous sommes là pour vous aider ! Notre équipe dexperts, dirigée par Léa, est prête à vous assister dans tous vos besoins. Nhésitez pas à nous contacter pour des conseils sur le tri, le recyclage, ou si vous avez des commentaires. Nous sommes impatients de vous entendre !
    </p>
    <div className="flex space-x-4">
      <a href="#" className="text-primary hover:text-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-primary hover:text-secondary">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-primary hover:text-secondary">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</div>


        {/* Section FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">COMMENT SAVOIR SI JE DOIS CHOISIR UN SERVICE DE TRI COMPLET OU PARTIEL ?</h2>
          <p className="mb-4">
            Pour déterminer si vous avez besoin dun service de tri complet ou partiel, considérez le volume et la variété de vos déchets. Un service complet est idéal pour les grandes quantités de déchets variés, tandis qu un service partiel convient mieux aux petits volumes ou aux types de déchets spécifiques. Notre équipe peut vous guider dans ce choix pour optimiser votre gestion des déchets et maximiser le recyclage.
          </p>
        </div>

        {/* Section Équipe */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">LÉQUIPE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF0F5] p-6 rounded-lg text-center">
              <Image
                src="/placeholder.svg"
                alt="Sara Dubois"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sara Dubois</h3>
              <p>Sara est notre experte en recyclage avec plus de 10 ans d\expérience. Elle se spécialise dans la création de programmes de tri efficaces pour différents types dentreprises.</p>
            </div>
            <div className="bg-[#FFF0F5] p-6 rounded-lg text-center">
              <Image
                src="/placeholder.svg"
                alt="Luc Chen"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Luc Chen</h3>
              <p>Luc est notre rédacteur de contenu créatif. Il a un don pour expliquer des concepts complexes de gestion des déchets de manière simple et engageante.</p>
            </div>
            <div className="bg-[#FFF0F5] p-6 rounded-lg text-center">
              <Image
                src="/placeholder.svg"
                alt="Maria Garcia"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Maria Garcia</h3>
              <p>Maria est notre responsable communautaire. Elle organise des événements de sensibilisation et gère nos plateformes en ligne pour éduquer le public sur le recyclage.</p>
            </div>
          </div>
        </div>

        {/* Section Services */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">NOS SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`p-6 rounded-lg cursor-pointer ${activeService === 'tutorials' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveService('tutorials')}
            >
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-2">Tutoriels Vidéo</h3>
              <p>Apprenez à trier et recycler efficacement avec nos guides vidéo faciles à suivre.</p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded">En savoir plus</button>
            </div>
            <div 
              className={`p-6 rounded-lg cursor-pointer ${activeService === 'articles' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveService('articles')}
            >
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-2">Articles dActualité</h3>
              <p>Restez informé des dernières tendances et innovations en matière de gestion des déchets.</p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded">En savoir plus</button>
            </div>
            <div 
              className={`p-6 rounded-lg cursor-pointer ${activeService === 'community' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveService('community')}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Communauté</h3>
              <p>Rejoignez notre communauté engagée pour partager des astuces et des expériences.</p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded">En savoir plus</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Clientèle</h4>
              <p>Lundi - Vendredi</p>
              <p>08:00 - 17:00</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Boutique</h4>
              <ul>
                <li><a href="#" className="hover:underline">Bacs de recyclage</a></li>
                <li><a href="#" className="hover:underline">Composteurs</a></li>
                <li><a href="#" className="hover:underline">Accessoires écologiques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Informations</h4>
              <ul>
                <li><a href="#" className="hover:underline">Mentions légales</a></li>
                <li><a href="#" className="hover:underline">Protection des données</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Notre Entreprise</h4>
              <ul>
                <li><a href="#" className="hover:underline">À propos de nous</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}