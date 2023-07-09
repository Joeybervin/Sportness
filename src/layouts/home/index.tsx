import {useState, useEffect} from 'react';


/* hooks */
import useMediaQuery from '@/hooks/useMediaQuery';
/* components */
import {AnchorLinkButton} from '@/components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
/* assets / IMAGES */
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import HomePageText from "@/assets/HomePageText.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
/* Animations */
import { motion } from "framer-motion";


import { SelectedAnchor } from '../../shared/types';
interface HomeProps {
    setSelectedAnchor: (value : SelectedAnchor) => void;

}

const Home = ({setSelectedAnchor} : HomeProps) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>

        {/* IMAGE & MAIN HEADER */}
        <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedAnchor(SelectedAnchor.Home)}>
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS */}
                <motion.div 
                className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{ 
                    hidden : { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 },
                }}>
                    <div className='relative'>
                        <div className='before:absolute before:-top-24 before:-left-20 before:z-[-1] md:before:content-evolvetext before:w-max'>
                            <img alt="slogan" src={HomePageText} />
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-start'>Prêt à découvrir une salle de sport qui célèbre votre corps ? Chez nous, l'accent est mis sur la positivité corporelle et la progression personnelle, avec une gamme complète d'équipements et de cours sur-mesure pour vous. Venez créer une nouvelle version de vous-même !</p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div 
                className='mt-8 flex items-center gap-5'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{ 
                    hidden : { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 },
                }}>
                    <AnchorLinkButton
                    anchor={SelectedAnchor.ContactsUs}
                    setSelectedAnchor={setSelectedAnchor}>
                        Rejoignez-nous
                    </AnchorLinkButton>
                    <AnchorLink
                    className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={() => setSelectedAnchor(SelectedAnchor.ContactsUs)}
                    href={`#${SelectedAnchor.ContactsUs}`}>
                        <p> + d'infos</p>
                    </AnchorLink>
                </motion.div>

            </div>

            {/* IMAGE */}
            <div className='z-10 flex basis-3/5 justiify-center md:ml-36 md:mt-12 md:justify-items-end'>
                <img src={HomePageGraphic} alt="graphic avec image d'une femme en tenue de sport : plus de 100 cours et plus  de 100 clubs dans toutes la France" />
            </div>
        </motion.div>

        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex items-center justify-center gap-12'>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
        </div>
        )}
        
    </section>
  )
};

export default Home;
