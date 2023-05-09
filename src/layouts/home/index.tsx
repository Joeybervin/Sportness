import {useState, useEffect} from 'react';
import { SelectedAnchor } from '../../shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import {AnchorLinkButton} from '@/components/Button';
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
        <div>
            {/* MAIN HEADER */}
            <div>
                {/* HEADINGS */}
                <div>
                    <div>
                        <div>
                            <img alt="slogan" src={HomePageText} />
                        </div>
                    </div>
                    <p>Prêt à découvrir une salle de sport qui célèbre votre corps ? Chez nous, l'accent est mis sur la positivité corporelle et la progression personnelle, avec une gamme complète d'équipements et de cours sur-mesure pour vous. Venez créer une nouvelle version de vous-même !</p>
                </div>

                {/* ACTIONS */}
                <AnchorLinkButton
                anchor={SelectedAnchor.ContactsUs}
                setSelectedAnchor={setSelectedAnchor}>
                    Rejoignez-nous
                </AnchorLinkButton>
                <AnchorLink
                className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedAnchor(SelectedAnchor.ContactsUs)}>
                    href
                </AnchorLink>
            </div>

            {/* IMAGE */}
            <div></div>
        </div>
        
    </section>
  )
};

export default Home;
