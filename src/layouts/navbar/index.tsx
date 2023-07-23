import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import {Button} from "@/components/Button";
import { Link as AnchorLink } from "../../components/Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedAnchor } from "../../shared/types";

export interface NavbarProps {
    isAtTop : boolean;
    selectedAnchor: SelectedAnchor;
    setSelectedAnchor: (value: SelectedAnchor) => void;
}

const Navbar = ( {isAtTop, selectedAnchor, setSelectedAnchor} : NavbarProps) => {

    /* ==== VARIABLES ==== */

    /* styles */
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = !isAtTop ? "bg-primary-100 drop-shadow-md" : ""
    /* contents */
    const menuAnchorLinks = ["Accueil", "Avantages", "Nos cours", "Contactez-nous"]

    /* ==== STATES ==== */

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)



    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`} >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT side */}
                        <img src={Logo} alt="logo" />

                        {/* RIGHT side */}
                        {isAboveMediumScreens ? 
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                {menuAnchorLinks.map((link, index) => {
                                    return (
                                        <AnchorLink 
                                        key={index}
                                        anchor={link}
                                        selectedAnchor={selectedAnchor}
                                        setSelectedAnchor={setSelectedAnchor}/>
                                    )
                                })}
                            </div>
                            <div className={`${flexBetween} gap-6`}>
                                <a href="#">connexion</a>
                                <Button>Devenir membre</Button>
                            </div>
                        </div>
                        :
                        <div>
                            <button className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </ button>
                        </div>
                        }
                    </div>
                </div>
            </div>
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-lg">
                    <div className="flex justify-end p-12">
                        <button className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="ml-[15%] flex flex-col gap-10 text-2xl">
                        {menuAnchorLinks.map((link, index) => {
                            return (
                                <AnchorLink 
                                key={index}
                                anchor={link}
                                selectedAnchor={selectedAnchor}
                                setSelectedAnchor={setSelectedAnchor}/>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
