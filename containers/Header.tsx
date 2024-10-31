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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = ({ className }: { className?: string }) => {
    // const params = useParams();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [theme, setTheme] = useState('dark');
    const pathname = usePathname()
    const router = useRouter();

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
                } ${className}`}
            style={pathname.search('/dashboard') !== -1 ? { display: 'none' } : {}}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 max-w-[1200px] m-auto">
                <Link className="block w-[12rem] xl:mr-8 py-2" href="/">
                    <Image
                        src={theme === 'light' ? logoDark : logoLight}
                        alt="Le Do Quintal"
                        width={85}
                        height={30}
                    />
                </Link>

                <nav
                    className={`${openNavigation ? "flex bg-n-1 dark:bg-n-8" : "hidden"
                        } fixed top-[8rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item: any) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-9 dark:text-n-1 transition-colors hover:text-color-1 px-4 xl:px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[1.125rem] lg:font-semibold ${item.url === hash
                                    ? "z-2 lg:text-n-1 dark:text-white"
                                    : "lg:text-n-8 dark:lg:text-n-1/50"
                                    } lg:leading-5 lg:hover:text-primary lg:hover:dark:text-primary`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#"
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

                <Button text="Sign In" handleClick={() => router.push('/signin')} className='max-lg:hidden' />

                <div className="ml-auto lg:hidden flex items-center">
                    <a
                        href="#"
                        className="button mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
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
                    <Button text="Sign In" handleClick={() => router.push("/signin")} className="max-c-sm:hidden" />

                    <div className="relative w-auto h-auto p-[3px] max-c-sm:flex hidden" onClick={() => router.push("/signin")}>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                        <div className="p-3 bg-white dark:bg-black rounded-[6px]  relative group transition duration-200 text-primary dark:text-white hover:bg-transparent hover:text-white dark:hover:bg-transparent">
                            <Image src={'/assets/images/svg/log-in.svg'} width={24} height={24} alt={'log-in'} className="h-full w-full min-w-6"/>
                        </div>
                    </div>

                    <div onClick={toggleNavigation} className="ml-5 lg:hidden p-3 rounded-md dark:bg-n-2/40 border-2  border-n-8/90 dark:border-n-3/40">
                        {
                            openNavigation ?
                                <X className="text-black dark:text-white" />
                                :
                                <Menu className="text-black dark:text-white" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
