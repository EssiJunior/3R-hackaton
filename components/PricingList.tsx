/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image";
import { check } from "@/public/assets";
import { pricing } from "@/constants";
import { Button } from "@/components/Button";
import { AnimatedModal } from "./Modal";
import { ModalBody, ModalContent, ModalFooter } from "./ui/AnimatedModal";

import { motion } from "framer-motion";
import { mtn, orange } from "@/public/assets";
import { useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRouter } from "next/navigation";

const PricingList = () => {
    const [step, setStep] = useState(1)
    const [timerEnded, setTimerEnded] = useState(false)
    const [operator, setOperator] = useState('')
    const [validated, setValidated] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')

    const router = useRouter()

    const operators = [
        {
            id: 0,
            name: 'Orange Money',
            icon: orange
        },
        {
            id: 1,
            name: 'MTN Mobile Money',
            icon: mtn
        }];
    const handleStep = (e: any, tag: string) => {
        e.preventDefault();
        setTimerEnded(false)
        if (step < 4 && tag === 'forward') {
            setStep(prev => prev + 1)
        }
        if (step > 1 && tag === 'backward') {
            setStep(prev => prev - 1)
        }
    }
    return (
        <main className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div
                    key={item.id}
                    className="w-[19rem] max-lg:w-full h-full px-6 bg-secondary dark:bg-n-8 border-2 border-primary dark:border-n-6/60 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-6 [&>h4]:last:text-color-3"
                >
                    <h4 className="h4 mb-4 text-2xl font-bold">{item.title}</h4>

                    <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                    </p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                            <div className="text-white flex items-end">
                                <div className="text-[4.25rem] leading-none font-bold">
                                    {item.price}
                                </div>
                                <div className="text-[15px] leading-none mb-3 ms-2">XAF <span>/ month</span></div>
                            </div>
                        )}
                    </div>

                    <AnimatedModal trigger={<Button text={"Suscribe"} handleClick={() => { }} />}>

                        <ModalBody>
                            <ModalContent>
                                {
                                    step === 1 &&
                                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">

                                        Select your{" "}
                                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                            payment method
                                        </span>{" "}
                                        💳
                                    </h4>
                                }
                                {
                                    step === 3 &&
                                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">

                                        Enter your{" "}
                                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                            {operator}
                                        </span>{" "}
                                        phone number 📲💳
                                    </h4>
                                }
                                {
                                    step === 1 &&
                                    <div className="flex justify-center items-center">
                                        {operators.map((operator) => (
                                            <motion.div
                                                key={operator.id}
                                                style={{
                                                    rotate: Math.random() * 20 - 10,
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 0,
                                                    zIndex: 100,
                                                }}
                                                whileTap={{
                                                    scale: 1.1,
                                                    rotate: 0,
                                                    zIndex: 100,
                                                }}
                                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                                                onClick={(e) => {
                                                    setOperator(operator.name)
                                                    handleStep(e, 'forward')
                                                }}
                                            >
                                                <Image
                                                    src={operator.icon}
                                                    alt={`${operator.name} icon`}
                                                    width="500"
                                                    height="500"
                                                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                }
                                {
                                    step === 2 &&
                                    <div className="flex justify-center items-center">
                                        <TextGenerateEffect words={`You are about to pay us ${item.price} XAF through ${operator}. This corresponds to the suscription for the ${item.title} plan.`} />
                                    </div>
                                }
                                {
                                    step === 3 &&
                                    <div className="flex justify-center items-center">

                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                                Phone number
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 bg-n-3/40 dark:bg-n-5/40 px-3 text-neutral-800 dark:text-neutral-200"
                                            />
                                        </div>
                                    </div>
                                }
                                {
                                    step === 4 && !validated &&
                                    <div className="flex flex-col justify-center items-center text-black dark:text-white">
                                        <p className="mb-4">We have initiated a payment</p>
                                        <div onClick={() => setValidated(true)}>
                                            <CountdownCircleTimer
                                                isPlaying
                                                duration={45}
                                                colors="url(#your-unique-id)"
                                                onComplete={() => setTimerEnded(true)}
                                            >
                                                {({ remainingTime }) => remainingTime}
                                            </CountdownCircleTimer>
                                        </div>
                                        {
                                            timerEnded ?
                                                <>
                                                    <p className="mt-4 text-red-500">Time has expired ! </p>
                                                    <p className="">Please take over the previous step</p>
                                                </>
                                                :
                                                <p className="mt-4">Take your phone and follow the steps or Dial <span className="text-orange-500 font-bold">{operator === 'Orange Money' ? '#150#' : '*126#'}</span> before the timer expires</p>
                                        }
                                        <svg className="h-0 w-0 m-0 p-0">
                                            <defs>
                                                <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
                                                    <stop offset="5%" stopColor="gold" />
                                                    <stop offset="95%" stopColor="red" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                }
                                {
                                    validated &&
                                    <div className="flex flex-col justify-center items-center gap-3 text-black dark:text-white m-auto">
                                        <div className="flex items-center justify-center">
                                            <div className="p-1 bg-secondary rounded-full">
                                                <Image
                                                    src={check}
                                                    width={24}
                                                    height={24}
                                                    alt="Check" />
                                            </div>
                                            <p className="body-2 ml-4 font-extrabold text-2xl">Suscription done</p>
                                        </div>
                                        <button className="px-2 py-1 bg-black dark:bg-gray-200 text-white dark:text-black  border border-black dark:border-gray-300 rounded-md text-sm ease-in-out duration-200 hover:scale-105" onClick={() => router.push('/dashboard')}>Go to Dashboard
                                        </button>
                                    </div>
                                }
                            </ModalContent>
                            {
                                !validated &&
                                <ModalFooter className="gap-4">
                                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28" onClick={(e) => handleStep(e, 'backward')}>
                                        {step > 1 ? 'Previous' : 'Cancel'}
                                    </button>
                                    {
                                        step < 4 &&
                                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28" onClick={(e) => handleStep(e, 'forward')}>
                                            {step < 3 ? 'Next' : 'Pay'}
                                        </button>
                                    }
                                </ModalFooter>
                            }
                        </ModalBody>
                    </AnimatedModal>


                    <ul className="[&>li]:first:bg-red-200">
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start pt-3 border-t border-n-1/30 dark:border-n-5  mt-3"
                            >
                                <Image
                                    src={check}
                                    width={24}
                                    height={24}
                                    alt="Check" />
                                <p className="body-2 ml-4">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
            }
        </main >
    );
};

export default PricingList;