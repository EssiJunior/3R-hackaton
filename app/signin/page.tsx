/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect, SetStateAction } from 'react'
// import { useRouter } from 'next/navigation'
// import {  SubmitHandler } from "react-hook-form"

// import Auth from '@/services/request/auth'

// type FormValues = {
//   username: string,
//   email: string,
//   password: string,
//   lacation_color: string,
//   phone_number: string,
// }

export default function AuthPage() {
  const router = useRouter()
  // const auhtentification = new Auth()
  // const { register, handleSubmit } = useForm<FormValues>()
  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   data['lacation_color'] = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
  //   console.log(data)
  //   if (activeForm === "signIn") {
  //     auhtentification.login({ formData: data })
  //   } else {
  //     auhtentification.register({ formData: data })
  //   }

  // }


  //   console.log(data)



  const [activeForm, setActiveForm] = useState('signIn')
  //   const router = useRouter()

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --background: #ffffff;
        --foreground: #171717;
        --primary: #82c247;
        --secondary: #519258;
      }
      
      .bg-background { background-color: var(--background); }
      .text-foreground { color: var(--foreground); }
      .bg-primary { background-color: var(--primary); }
      .text-primary { color: var(--primary); }
      .hover\\:bg-secondary:hover { background-color: var(--secondary); }
      .text-secondary { color: var(--secondary); }
    `;
    document.head.appendChild(style);




    return () => {
      document.head.removeChild(style);
    }
  }, []);

  const showForm = (formName: SetStateAction<string>) => {
    setActiveForm(formName);
  };

  const handlePhoneInput = (e: { target: { value: string } }) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    if (value.length > 0 && value[0] !== '6') {
      value = '6' + value.slice(1);
    }
    e.target.value = value;
  };

  // const handleSubmit = (e: { preventDefault: () => void; target: { id: any } }) => {
  //   e.preventDefault();
  //   const formId = e.target.id;
  //   console.log('Formulaire soumis:', formId);
  // };

  return (
    <div className="text-foreground min-h-screen flex flex-col lg:flex-row mt-24">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 text-center">
              <h1 className="text-2xl font-bold text-primary">3R</h1>
              <p className="text-secondary">Plateforme de gestion de déchets</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex mb-4">
              <button
                onClick={() => showForm('signIn')}
                className={`flex-1 py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeForm === 'signIn' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Connexion
              </button>
              <button
                onClick={() => showForm('signUp')}
                className={`flex-1 py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeForm === 'signUp' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Inscription
              </button>
            </div>

            {/* Sign In Form */}
            {activeForm === 'signIn' && (
              <form id="signInForm" className="space-y-4 text-black dark:text-white" onSubmit={() => router.push('/pricing')}>
                <div>
                  <label className="block text-sm font-bold mb-2 " htmlFor="signInEmail">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="signInEmail" type="email" placeholder="Email" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="signInPassword">Mot de passe</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="signInPassword" type="password" placeholder="Mot de passe" required />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Se connecter
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary" href="#" onClick={(e) => { e.preventDefault(); showForm('forgotPassword'); }}>
                    Mot de passe oublié ?
                  </a>
                </div>
              </form>
            )}

            {/* Sign Up Form */}
            {activeForm === 'signUp' && (
              <form id="signUpForm" className="space-y-4 text-black dark:text-white" onSubmit={() => router.push('/pricing')}>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="signUpName">Nom complet</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="signUpName" type="text" placeholder="Nom complet" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="signUpEmail">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="signUpEmail" type="email" placeholder="Email" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="signUpPhone">Téléphone</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="signUpPhone"
                    type="tel"
                    placeholder="6XXXXXXXX"
                    required
                    maxLength={9}
                    pattern="^6[0-9]{8}$"
                    onChange={handlePhoneInput}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="signUpPassword">Mot de passe</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="signUpPassword" type="password" placeholder="Mot de passe" required />
                </div>

                <div className="flex items-center mb-4">
                  <label className="mr-4">
                    <input type="radio" name="userType" value="menage" required />
                    Ménage
                  </label>
                  <label>
                    <input type="radio" name="userType" value="entreprise" required />
                    Entreprise
                  </label>
                </div>

                <div>
                  <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                    S'inscrire
                  </button>
                </div>
              </form>
            )}

            {/* Forgot Password Form */}
            {activeForm === 'forgotPassword' && (
              <form id="forgotPasswordForm" className="space-y-4 text-black dark:text-white" onSubmit={() => router.push('/pricing')}>
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="forgotPasswordEmail">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="forgotPasswordEmail" type="email" placeholder="Email" required />
                </div>
                <div>
                  <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                    Réinitialiser le mot de passe
                  </button>
                </div>
                <div className="text-center">
                  <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary" href="#" onClick={(e) => { e.preventDefault(); showForm('signIn'); }}>
                    Retour à la connexion
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Image Section */}
      <div className="w-full lg:w-1/2 bg-n-2/40 dark:bg-n-8/90 hidden lg:flex items-center justify-center p-10">
        <img src="/assets/images/signup.jpeg" alt="Auth Image" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}