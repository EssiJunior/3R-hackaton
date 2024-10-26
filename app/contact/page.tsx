'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      title: "Email",
      content: (
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-primary" />
          <a href="mailto:contact@3r-platform.com" className="text-neutral-800 dark:text-neutral-200 text-sm">
            contact@3r-platform.com
          </a>
        </div>
      ),
    },
    {
      title: "Téléphone",
      content: (
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-primary" />
          <a href="tel:+237123456789" className="text-neutral-800 dark:text-neutral-200 text-sm">
            +237 123 456 789
          </a>
        </div>
      ),
    },
    {
      title: "Adresse",
      content: (
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-neutral-800 dark:text-neutral-200 text-sm">
            123 Rue HOTEL FRANCO, Yaoundé, Cameroun
          </span>
        </div>
      ),
    },
  ]

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="mt-32 bg-n-2/30 dark:bg-n-8/90 max-w-7xl w-full">
        <main className="pb-10">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">Contactez 3R</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-white dark:bg-gray-800 text-neutral-800 dark:text-neutral-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            <div>
              <Image
                src="/3r-contact-image.jpg"
                alt="3R Contact"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-64 mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">{item.title}</h3>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-neutral-800 dark:text-neutral-200 mb-4">En savoir plus sur 3R</h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  3R est une plateforme dédiée à la réduction, réutilisation et au recyclage des déchets plastiques au Cameroun. Nous travaillons pour un avenir plus propre et plus durable.
                </p>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}

export default ContactPage