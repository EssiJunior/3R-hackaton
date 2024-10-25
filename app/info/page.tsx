import { Timeline } from '@/components/ui/Timeline';
import Image from 'next/image';
import React from 'react'

const page = () => {
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
                        Le Cameroun produit 600 000 tonnes de déchets plastiques chaque année qui s&lsquo;entassent dans des décharges sauvages ou viennent polluer les cours d&#39;eau...
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
        {
            title: "IPEN",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        La forte production des plastiques dans le monde ces dernières décennies
                        constitue une véritable menace à l’existence et le bien être des êtres vivants. Cette
                        montée pratiquement incontrôlable de la matière plastique inquiète profondément les
                        professionnels de la santé, les défenseurs de l’environnement y compris de la
                        biodiversité. Au Cameroun, la préoccupation est aussi saillante et nécessite une
                        attention particulière de toutes les parties prenantes. C’est dans cet ordre d’idée que
                        l’association à but non lucratif « Action des Femmes pour une Planète Bio (AFEPB) »
                        dont la mission est d’accompagner les actions du gouvernement visant à préserver la
                        planète des menaces liées aux dérèglements climatiques, aux déchets et produits
                        dangereux et bien d’autres s’est volontairement engagée à faire un état de lieu des
                        plastiques au Cameroun. Ce, pour promouvoir le développement et l’épanouissement
                        des populations ; notamment les couches les plus vulnérables à savoir les femmes, les
                        jeunes et autres minorités ; avec l’appui de IPEN à travers la branche Afrique
                        francophone. Dans le cadre de ce projet, des recherches et des collectes de données
                        sur les flux de plastiques au Cameroun en vue de promouvoir le développement des
                        mesures nationales et internationales ont été notre leitmotiv. De même, nous avions
                        consacré une part belle à la sensibilisation des décideurs et responsables du secteur
                        privé d’une part et d’autre part les associations de consommateurs et le grand public
                        via les medias (presse écrites, presse en ligne et réseaux sociaux).
                    </p>

                    <a href="https://ipen.org/sites/default/files/documents/country_situation_report_plastic_-_cameroon_afepb_-_ok98.pdf" className="text-secondary dark:text-primary" target='_blank'>Read full article...</a>
                </div>
            ),
        },
        {
            title: "GREENPEACE",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        L’interdiction du plastique mettra fin à des inondations catastrophiques au Cameroun
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">Les inondations sont récurrentes dans ma ville, Douala. Chaque année, pendant la saison des pluies, nous connaissons des inondations de maisons et de magasins, ainsi que de trottoirs. Tout cela affecte la qualité de l’eau et de notre alimentation, et a ruiné la vie de nombreuses personnes qui perdent leurs maisons, leurs moyens de subsistance et même des membres de leur famille.</p>


                    <div className="grid grid-cols-2 gap-4 mt-5 mb-3">
                        <Image
                            src="https://www.greenpeace.org/static/planet4-africa-stateless/2021/07/3e0b5259-image.jpeg"
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
        {
            title: "UNEP",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Comment le secteur du tourisme peut-il se libérer du plastique ?
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">Le tourisme international est en train de retrouver ses niveaux prépandémie, deux fois plus de personnes ayant voyagé jusqu’à présent en 2023 qu’à la même période l’an dernier. L’activité de ce secteur est considérable : entre 1980 et 2019, les arrivées de touristes internationaux ont augmenté, passant de 177 millions à près de 1,5 milliard par an.</p>


                    <div className="grid grid-cols-2 gap-4 mt-5 mb-3">
                        <Image
                            src="https://cdn.unenvironment.org/styles/article_billboard_image/s3/2021-06/dhaya-eddine-bentaleb-_GefOVzNbBM-unsplash.jpeg?h=abdb13bb&amp;itok=YiZn-ucG"
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
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="mt-32 bg-n-2/30 dark:bg-n-8/90  max-w-7xl w-full">
                <main className=" pb-10">
                    <Timeline data={data} isInfoPage/>
                </main>
            </div>
        </main>
    )
}

export default page