"use client"

import Image from "next/image"
import Link from "next/link"
import { logoDark, logoLight } from '@/public/assets';
import { socials } from "@/constants";
import { PlaceholdersAndVanishInput } from "@/components/ui/VanishInput";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname()

    const placeholders = [
        "Any question about 3R?",
        "Any difficulty in using 3R?",
        "Any bug encountered?",
        "Any feedback?",
        "Join our Newsletter",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <main
            className={`w-full z-50  border-t border-primary lg:bg-n-1 dark:lg:bg-n-8/90 lg:backdrop-blur-sm `}
            style={pathname.search('/dashboard') !== -1 || pathname.search('/client') !== -1 ?{display:'none'}:{}}
        >
            <section className="flex items-start justify-start flex-wrap [&>aside]:min-w-[200px] [&>aside]:h-full  [&>aside]:flex-1 [&>aside]:justify-start px-5 lg:px-7.5 xl:px-10 max-lg:py-4 max-w-[1200px] m-auto py-12">
                <aside className="">
                    <Link className="block dark:hidden w-[12rem] xl:mr-8 py-2" href="/">
                        <Image
                            src={logoDark}
                            alt="Le Do Quintal"
                            width={125}
                            height={50}
                        />
                    </Link>
                    <Link className="hidden dark:block w-[12rem] xl:mr-8 py-2" href="/">
                        <Image
                            src={logoLight}
                            alt="Le Do Quintal"
                            width={125}
                            height={50}
                        />
                    </Link>
                    <h2 className="text-secondary dark:text-primary">Social Media</h2>
                    <div className="flex items-center flex-wrap gap-2 py-2">
                        {
                            socials.map((social: {
                                id: string;
                                title: string;
                                icon: JSX.Element;
                                url: string;
                            }) => (
                                <Link
                                    key={social.title}
                                    href={social.url}
                                    target="_blank"
                                >
                                    {social.icon}
                                </Link>
                            ))
                        }
                    </div>
                </aside>
                <aside className="flex flex-col gap-4">
                    <h2 className="text-secondary dark:text-primary font-bold text-xl">
                        SERVICES
                        <div className="w-[25px] h-1 bg-secondary dark:bg-primary rounded-lg mb-2"></div>
                    </h2>
                    <div className="flex flex-col gap-2 [&>a]:text-black [&>a]:dark:text-white">
                        <Link href="/">Overview</Link>
                        <Link href="/info">Informations</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/faq">FAQ</Link>
                    </div>
                </aside>
                <aside className="flex flex-col gap-4 ">
                    <h2 className="text-secondary dark:text-primary font-bold text-xl">
                        COMPANY
                        <div className="w-[25px] h-1 bg-secondary dark:bg-primary rounded-lg mb-2"></div>
                    </h2>
                    <div className="flex flex-col gap-2 [&>a]:text-black [&>a]:dark:text-white">
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/support">Support</Link>
                    </div>
                </aside>
                <aside className="flex flex-col gap-4 [&>a]:text-black [&>a]:dark:text-white">
                    <h2 className="text-secondary dark:text-primary font-bold text-xl">
                        JOIN NEWSLETTER
                        <div className="w-[45px] h-1 bg-secondary dark:bg-primary rounded-lg mb-2"></div>
                    </h2>
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </aside>
            </section>
            <section className="flex justify-end items-center w-full h-[30px] bg-secondary dark:bg-primary">
                <div className="flex flex-1 h-[2px] bg-white ms-5 rounded-lg"></div>
                <div className="mx-5 flex gap-4">
                    <Link href="/terms">Terms & Conditions</Link>
                    <Link href="/portfolio">Private polycies</Link>
                    <Link href="/cookies">Cookies</Link>
                </div>
            </section>
        </main>
    )
}

export default Footer