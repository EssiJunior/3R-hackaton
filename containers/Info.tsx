"use client"

import { Button } from "@/components/Button";
import Section from "@/components/Section"
import { Timeline } from "@/components/ui/Timeline";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Info = () => {
    const router = useRouter()

    const data = [
        {
            title: "Cameroon tribune",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Pollution by plastic materials: 600,000 tons of waste in Cameroon
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <Image
                            src="https://www.cameroon-tribune.cm//administrateur/photo/normal_2e3a892.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <a href="https://www.cameroon-tribune.cm/article.html/57887/fr.html/pollution-par-les-matieres-plastiques-600-000-tonnes-de-dechets-au" className="text-secondary dark:text-primary" target='_blank'>Read full article...</a>
                </div>
            ),
        },
        {
            title: "France 24",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Cameroun : les start-up s&apos;attaquent au recyclage des déchets plastiques
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Le Cameroun produit 600 000 tonnes de déchets plastiques chaque année qui s'entassent dans des décharges sauvages ou viennent polluer les cours d&#39;eau...
                    </p>
                    <a href="https://www.france24.com/fr/%C3%A9missions/focus/20221027-cameroun-les-start-up-s-attaquent-au-recyclage-des-d%C3%A9chets-plastiques" className="text-secondary dark:text-primary" target='_blank'>Read full article...</a>
                </div>
            ),
        },
        {
            title: "ENACT",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Au Cameroun, les matières plastiques interdites, qui entrent en contrebande, menacent l’environnement, la santé publique et le secteur agricole. Le trafic est alimenté par une demande croissante due au prix élevé des alternatives légales au plastique. Et bien que les agents des douanes procèdent activement aux saisies des produits de contrebande qui profitent de la porosité des frontières, les mesures gouvernementales de lutte contre ce phénomène se révèlent largement insuffisantes.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">La fabrication, la possession, la vente et la distribution gratuite de sacs en plastique fin et non biodégradable et des granulés utilisés pour les fabriquer sont interdites au Cameroun. Les contrevenants risquent entre deux et dix ans de prison et s’exposent à des amendes pouvant aller jusqu’à 20 000 dollars US. Cependant, malgré l’interdiction et la sévérité des peines infligées, les emballages plastiques illicites continuent de circuler sur les marchés camerounais. Ce sont des sacs produits et achetés à un prix relativement bas, et ils sont facilement jetables.</p>


                    <div className="grid grid-cols-2 gap-4 mt-5 mb-3">
                        <Image
                            src="https://enact-africa.s3.amazonaws.com/site/images/wide/2022-09-21-fr-cameroon-banner.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <a href="https://enactafrica.org/enact-observer/le-plastique-de-contrebande-saccage-lenvironnement-au-cameroun#:~:text=En%20septembre%202020%2C%20800%20kg,dans%20la%20r%C3%A9gion%20du%20Nord." className="text-secondary dark:text-primary" target='_blank'>Read full article...</a>
                </div>
            ),
        },
    ];

    return (
        <Section crosses className="!px-0 !py-10  ">
            <main className=" bg-n-2/30 dark:bg-n-8/90 pb-10">
                <Timeline data={data} />
                <div className="ml-10">
                    <Button text="Learn more >" handleClick={() => router.push('/info')}/>
                </div>
            </main>
        </Section>
    )
}

export default Info