"use client"

import Image from "next/image"
import { ScrollParallax } from "react-just-parallax"

const Hero = () => {
    return (
        <main className="mt-32 flex items-center justify-center text-black dark:text-white py-5">
            <div className="w-1/2 pe-32">
                <h1 className="font-bold text-3xl"><span className="text-primary">3R</span> for effective <br /> Reduce, Recycle and Reuse <br /> of waste products</h1>
                <p className="text-[15px] leading-5 mt-3">3R is an intuitive web app designed to empower users to minimize waste. It offers tips for reducing consumption, guides for recycling materials effectively, and ideas for reusing items creatively. Connect with local services, track your impact, and foster a sustainable community for a greener future.</p>
            </div>
            <div className="relative illustration flex flex-1" style={{background:'url(/assets/images/illustrations/blob.svg) top/cover no-repeat'}}>
                <Image src={'assets/images/illustrations/waste.svg'} width={640} height={320} alt="blob illustration" />

                <ScrollParallax isAbsolutelyPositioned>
                    <ul className={`hidden absolute left-0 top-1/2 px-4 py-2 bg-secondary dark:bg-white text-white dark:text-secondary backdrop-blur border rounded-xl xl:flex flex-col`}>
                        <p className="text-[14px]">600,000 tons of Wastes<br /> in Cameroon according<br /> to Cameroun trubune</p>
                        <a href="https://www.cameroon-tribune.cm/article.html/57887/fr.html/pollution-par-les-matieres-plastiques-600-000-tonnes-de-dechets-au" className="text-[12px] text-blue-200 dark:text-primary hover:underline">https://www.cameroon-tribune...</a>
                    </ul>
                </ScrollParallax>
                
                <ScrollParallax isAbsolutelyPositioned>
                    <ul className={`hidden absolute right-0 top-2/3 px-4 py-2 bg-secondary dark:bg-white text-white dark:text-secondary backdrop-blur border rounded-xl xl:flex flex-col`}>
                        <p className="text-[14px]">Same statistic observed<br /> by France 24 in 2022.</p>
                        <a href="https://www.france24.com/fr/%C3%A9missions/focus/20221027-cameroun-les-start-up-s-attaquent-au-recyclage-des-d%C3%A9chets-plastiques" className="text-[12px] text-blue-200  dark:text-primary hover:underline">https://www.france24...</a>
                    </ul>
                </ScrollParallax>
            </div>
        </main>
    )
}

export default Hero