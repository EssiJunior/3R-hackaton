
import { sponsors, sponsorsDark } from "@/constants";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key } from "react";

const CompanyLogos = ({ className }: { className?: string }) => {
    
    return (
            <div className={className}>
                <h5 className="tagline text-center text-n-13/50 dark:text-n-1/50 ">
                    We are a group of entities which fight for a better environment, and a better Cameroon
                </h5>
                <ul className="hidden dark:flex">
                    {sponsors.map((logo: string | StaticImport, index: Key | null | undefined) => (
                        <li
                            className="flex items-center justify-center flex-1 h-[8.5rem]"
                            key={index}
                        >
                            <Image
                                src={logo}
                                width={134}
                                height={28}
                                alt={'logo'}
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex dark:hidden">
                    {sponsorsDark.map((logo: string | StaticImport, index: Key | null | undefined) => (
                        <li
                            className="flex items-center justify-center flex-1 h-[8.5rem]"
                            key={index}
                        >
                            <Image
                                src={logo}
                                width={134}
                                height={28}
                                alt={'logo'}
                            />
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default CompanyLogos;