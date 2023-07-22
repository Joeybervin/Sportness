/* ASSETS */
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
/* ICONS */
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
/*  */
import { BenefitType, SelectedAnchor } from '../../shared/types';
/* ANIMATIONS */
import { motion } from "framer-motion";
/* COMPONENTS */
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import { AnchorLinkButton } from "@/components/Button";

interface BenefitsProps {
    setSelectedAnchor: (value: SelectedAnchor) => void;

}


const Benefits = ({ setSelectedAnchor }: BenefitsProps) => {

    const benefits: Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "Installations à la pointe de la technologie",
            description:
                "Expérience sportive nouvelle génération avec des installations technologiques de pointe, pour votre bien-être et des résultats concrets.",
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "Découvrez de nouvelles disciplines",
            description:
                "Découvrez un éventail de disciplines innovantes dans notre salle de sport, où le bien-être et les résultats se rejoignent.",
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Des coachs professionnels",
            description:
                "Bénéficiez de l'expertise de nos coachs professionnels dans notre salle de sport nouvelle génération, où votre bien-être et vos résultats sont notre priorité",
        },
    ];

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };



    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedAnchor(SelectedAnchor.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>
                        <HText>Plus qu'une salle de sport</HText>
                        <p className="mt-6 mb-14 text-sm"> Nous fournissons des équipements de fitness, des entraîneurs et des cours de classe mondiale à
                            vous permet d'atteindre facilement vos objectifs de fitness ultimes. Nous fournissons de vrais
                            attention à chacun de ses membres.</p>
                    </div>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedAnchor={setSelectedAnchor}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div
                    className="mt-20 items-center justify-between gap-14 md:mt-28 flex flex-wrap">
                    {/* GRAPHICS */}
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="A woamn in sport clothes" />

                    {/* DESCRIPTION */}
                    <div className="flex-1 sm:min-w-[300px]">
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
                            <HText >Des milliers de clients satisfaits à travers la{" "}
                                <span className="text-primary-500">France</span>
                            </HText>

                        </div>
                        
                        {/* DESCRIPTION */}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50},
                            visible: { opacity: 1, x:0},
                        }}
                        >
                            <p className="my-5">Dans notre réseau de salles de sport réparties à travers la France, nous célébrons l'acceptation, l'évolution et le dépassement de soi. Guidés par nos coachs professionnels, vous atteindrez des résultats durables grâce à des programmes personnalisés. Découvrez un environnement doté d'installations à la pointe de la technologie et explorez de nouvelles disciplines sportives.</p>
                            <p className="mb-5">Rejoignez notre communauté dédiée au bien-être, à la passion du sport et à l'esprit d'équipe, et transformez votre vie grâce à une expérience sportive unique ! Quel que soit votre niveau actuel, vous trouverez chez nous un espace accueillant pour progresser à votre rythme.</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles"></div>
                            <AnchorLinkButton
                                anchor={SelectedAnchor.ContactUs}
                                setSelectedAnchor={setSelectedAnchor}>
                                    Rejoignez-nous
                            </AnchorLinkButton>
                        </div>
                    </div>

                </div>


            </motion.div>
        </section>
    )


};

export default Benefits;