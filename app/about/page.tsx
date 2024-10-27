'use client'

import Heading from '@/components/Heading'
import { AnimatedTooltip } from '@/components/ui/AnimatedToolTip'
import { HoverEffect } from '@/components/ui/CardHover'
import { arthur, bevanie, essi, logoDark, logoLight, romaka, yves } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
// import Link from 'next/link'
import { useState } from 'react'

export default function AboutPage() {
  const [activeService, setActiveService] = useState('tutorials')

  const services = [
    {
      icon: '📰',
      title: 'Education and good ecological practices.',
      description: "Ecological education promotes awareness of environmental issues. Adopting good practices, such as recycling, reducing waste, and using sustainable resources, fosters a healthier future.",
      link: '/information'
    },
    {
      icon: '📊',
      title: 'Full control on your data',
      description: "For enterpreises, experience complete control over your data with secure access, customizable privacy settings, and transparent usage policies. Empower yourself to manage, share, and protect your information on your terms.",
      link: '/information'
    },
    {
      icon: '🌍',
      title: 'On map visualisation of information',
      description: "On-map visualization displays data geographically, enhancing understanding of trends and patterns. It enables interactive exploration of information through layers, markers, and heat maps for informed decision-making and engagement.",
      link: '/information'
    },
  ]
  const people = [
    {
      id: 1,
      name: "ROMAKA Benoit",
      designation: "Software Developer",
      image: romaka,
    },
    {
      id: 2,
      name: "FETI Belva Samyra",
      designation: "Software Developer",
      image: bevanie,
    },
    {
      id: 3,
      name: "SANDJON Yves",
      designation: "Software Developer",
      image: yves,
    },
    {
      id: 4,
      name: "SEUMEGNI Arthur",
      designation: "Software Developer",
      image: arthur,
    },
    {
      id: 5,
      name: "NDANG ESSI Pierre Junior",
      designation: "Software Developer",
      image: essi,
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 p-8  max-w-7xl mx-auto">
      <div className="mt-32">

        <Heading
          tag="ABOUT US"
          title="Who we are, what is our goal"
        />

        {/* Section À propos */}
        <div className="flex items-center mb-16">
          <div className="relative flex-shrink-0">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <Link className="block  py-2" href="/">
                <Image
                  src={logoLight}
                  alt="Le Do Quintal"
                  width={150}
                  height={75}
                />
              </Link>
            </div>
          </div>
          <div className="ml-24 bg-n-2/30 dark:bg-n-8/90 px-32 py-16 rounded-lg flex-1">
            <h2 className="text-2xl font-bold text-primary mb-4 text-black dark:text-white">WE ARE "LES GARDIENS DE LA FORET"</h2>
            <p className="mb-1 text-black dark:text-white">
              An important issue is face in Cameroon for already a wile. The problem is the correct use of plastic materials. 
            </p>
            <p className="mb-1 text-black dark:text-white">
              Plastic product are naturally chemical substances, they live for a long time and are not biodegradable. This nature makes them dangerous for our environment and human health. We can also see that non related aspects like tourism can be affected by this problem.
            </p>
            <a href="/info" className='text-secondary dark:text-primary hover:underline text-[14px]'>learn more about the danger of this, from verified sources.</a>
            <p className="mb-1 mt-5 text-black dark:text-white">
              Our objectif is the creation a plateform that will help people to reduce their waste. Firstly, we provide verified informations about the danger of these materials in our environment. Our goal is that it prevents them from complicating our actual condition. 
            </p>
            <p className="mb-1 text-black dark:text-white">Secondly, we provide services to recycling companies to perform a better recycling of waste products. We give them a huge control on how the work done, and more.</p>
            <a href="/pricing" className='mb-4 text-secondary dark:text-primary hover:underline text-[14px]'>learn more about our different services packs, and what we offer to recycling companies.</a>

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

        {/* Section Équipe */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">OUR TEAM</h2>

          <div className="flex flex-row items-center justify-start mb-10 w-full ">
            <AnimatedTooltip items={people} />
          </div>
        </div>

        {/* Section Services */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">OUR SERVICES</h2>
          <HoverEffect items={services} />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-secondary dark:bg-primary text-white py-8">
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