"use client"

import Image from "next/image";
import { check } from "@/public/assets";
import { pricing } from "@/constants";
import {Button} from "@/components/Button";

const PricingList = () => {
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

                    <Button text={"Suscribe"} handleClick={() => {}} />
                    

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
            ))}
        </main>
    );
};

export default PricingList;