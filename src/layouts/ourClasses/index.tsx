/* SHARED */
import { SelectedAnchor } from "@/shared/types";
/* FRAMEWORKS (animations...) */
import { motion } from "framer-motion";
/* COMPONENTS */
import Class from "./Class";
import HText from "@/shared/HText";
/* IMAGES */
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

interface OurClassesProps {
    setSelectedAnchor: (value : SelectedAnchor) => void;
}

const classes = [
    {
        name: "Musculation",
        description: "Renforcez votre corps et sculptez vos muscles avec notre cours de musculation, encadré par nos coachs experts pour vous aider à atteindre vos objectifs de fitness.",
        image: image1
    },
    {
        name: "Yoga",
        description: " Plongez dans une expérience apaisante et équilibrante avec notre cours de yoga, où vous améliorerez votre souplesse et votre bien-être mental.",
        image: image2
    },
    {
        name: "Renforcement musculaire",
        description: "Optez pour notre cours dédié au renforcement musculaire pour tonifier votre corps et gagner en puissance physique.",
        image: image3
    },
    {
        name: "Pilate",
        description: "Améliorez votre posture, votre flexibilité et votre stabilité grâce à notre cours de Pilates, qui met l'accent sur la force du noyau et le contrôle du mouvement.",
        image: image4
    },
    {
        name: "HIIT",
        description: " (Entraînement par Intervalles à Haute Intensité) : Repoussez vos limites avec notre cours de HIIT, un entraînement intense et efficace pour brûler des calories et booster votre métabolisme.",
        image: image5
    },
    {
        name: "Méditation",
        description: "Offrez-vous un moment de calme et de détente avec notre cours de méditation, idéal pour apaiser l'esprit et réduire le stress de la vie quotidienne.",
        image: image6
    }
]

const OurClasses = ({ setSelectedAnchor }: OurClassesProps) => {
  return (
    <section
        id="ourClasses"
        className="w-full bg-primary-100 py-16">

        <motion.div
            onViewportEnter={() => setSelectedAnchor(SelectedAnchor.OurClasses)}>
            
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{ 
                    hidden : { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 },
                }}>
                <div className="md:w-9/12">
                    <HText>Nos cours</HText>
                    <p className="pt-5 pb-10">Découvrez notre sélection variée de cours stimulants adaptés à tous les niveaux : cardio pour l'endurance, musculation pour la force, yoga pour la détente et danse pour le fun ! Atteignez vos objectifs tout en vous amusant dans une ambiance motivante et encadrée par nos coachs expérimentés.</p>
                </div>
            </motion.div>

            <div className="hide-scrollbar h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="flex w-[2800px] gap-x-10 mx-12">
                    {classes.map((item, index) => {
                        return (
                            <Class 
                            key={index}
                            ourClass={item.name}
                            description={item.description}
                            image={item.image}/>
                        )
                    })}
                </ul>
            </div>

        </motion.div>


  </section>)
};

export default OurClasses