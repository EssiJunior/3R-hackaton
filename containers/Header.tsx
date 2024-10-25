/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

// import { useParams } from 'next/navigation'
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import { HamburgerMenu } from "@/components/atoms/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useHash } from '@/hooks/useHash';
import { logoDark, logoLight } from '@/public/assets';
import { Button } from "@/components/Button";

const Header = () => {
    // const params = useParams();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [theme, setTheme] = useState('dark');

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    const hash = useHash();

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const toggleTheme = (theme: string) => {
        localStorage.theme = theme
    }

    useEffect(() => {
        toggleTheme(theme)

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])



    return (
        <div
            className={`fixed top-0 left-0 w-full z-50  border-b border-primary lg:bg-n-1 dark:lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-1 dark:bg-n-8" : "bg-n-1 dark:bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 max-w-[1200px] m-auto">
                <a className="block w-[12rem] xl:mr-8 py-2" href="#hero">
                    <Image
                        src={theme === 'light' ? logoDark : logoLight}
                        alt="Le Do Quintal"
                        width={85}
                        height={30}
                    />
                </a>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1  dark:bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item: any) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-9 dark:text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[1.125rem] lg:font-semibold ${item.url === hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-8 dark:lg:text-n-1/50"
                                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#theme"
                    className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                >

                    {
                        theme === 'light' ?

                            <div className='flex w-12 justify-between'>
                                <div className=' w-5 aspect-square bg-n-1 right-2 flex items-center justify-center'>

                                    <Image
                                        src='/assets/images/theme/dark.svg'
                                        alt='logo'
                                        width={30}
                                        height={30}
                                        className='cursor-pointer z-20'
                                        onClick={() => {
                                            setTheme('dark')
                                            toggleTheme('dark')
                                        }}
                                    />
                                </div>
                                <div className='w-[2px] h-8 bg-black rounded' />
                            </div> :
                            <div className='flex w-12 justify-between'>
                                <div className='w-5 aspect-square right-2 flex  items-center justify-center'>
                                    <Image
                                        src='/assets/images/theme/light.svg'
                                        alt='logo'
                                        width={30}
                                        height={30}
                                        className='cursor-pointer z-20 mx-2'
                                        onClick={() => {
                                            setTheme('light')
                                            toggleTheme('light')
                                        }}
                                    />
                                </div>
                                <div className='w-[2px] h-8 bg-white rounded' />
                            </div>

                    }
                </a>
                <Button text="Sign In" />

                <div className="ml-auto lg:hidden flex items-center">
                    <a
                        href="#theme"
                        className="button lg:hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 block"
                    >

                        {
                            theme === 'light' ?

                                <div className='flex w-14 justify-between'>
                                    <div className=' w-7 aspect-square bg-n-1 right-2 flex items-center justify-center'>

                                        <Image
                                            src='/assets/theme/dark.svg'
                                            alt='logo'
                                            width={30}
                                            height={30}
                                            className='cursor-pointer z-20'
                                            onClick={() => {
                                                setTheme('dark')
                                                toggleTheme('dark')
                                            }}
                                        />
                                    </div>
                                    <div className='w-[2px] h-8 bg-black rounded' />
                                </div> :
                                <div className='flex w-14 justify-between'>
                                    <div className='w-6 aspect-square right-2 flex  items-center justify-center'>
                                        <Image
                                            src='/assets/theme/light.svg'
                                            alt='logo'
                                            width={30}
                                            height={30}
                                            className='cursor-pointer z-20 mx-2'
                                            onClick={() => {
                                                setTheme('light')
                                                toggleTheme('light')
                                            }}
                                        />
                                    </div>
                                    <div className='w-[2px] h-8 bg-white rounded' />
                                </div>

                        }
                    </a>

                    <Button text="Sign In" />

                </div>
            </div>
        </div>
    );
};

export default Header;
