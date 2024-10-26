import Section from "@/components/Section"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import Image from "next/image"
import { GradientLight } from "@/components/atoms/Benefits"
import ClipPath from "@/public/assets/images/svg/ClipPath"
import Arrow from "@/public/assets/images/svg/Arrow";
import { services } from "@/constants"
import Link from "next/link"

const Services = () => {
    return (
        <Section>
            <main>
                <TextGenerateEffect words={'Since plastic waste products are bad for the environment and tourism, we developed a variety of services to reduce the quantity of waste products. We will help recycling companies to perform a better recycling of waste products, a huge control on how the work is done, and more.'} />
                <TextGenerateEffect words={'Following are the services classified'} className='!text-primary dark:!text-secondary font-satoshi' duration={13} />

                <div className="flex flex-wrap justify-start gap-10 my-10 cursor-pointer">
                    {services.map((item) => (
                        <Link
                            href={'/pricing'}
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem] "
                            key={item.id}
                        >
                            <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5 font-bold text-white dark:text-black">{item.title}</h5>
                                <p className="body-2 mb-6 text-white dark:text-black">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <div className="p-2 bg-black rounded-lg">
                                        {item.iconUrl}
                                    </div>
                                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider" >
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-secondary dark:bg-primary"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-30 " >
                                    {item.imageUrl && (
                                        <Image
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </Link>
                    ))}
                </div>
            </main>
        </Section>
    )
}

export default Services