import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link as AnchorLink } from "./components/Link";
import { NavbarProps } from "./shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";


const Navbar = ( {selectedAnchor, setSelectedAnchor} : NavbarProps) => {

    /* ==== VARIABLES ==== */
    /* tailwind class */
    const flexBetween = "flex items-center justify-content";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")




    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`} >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT side */}
                        <img src={Logo} alt="logo" />

                        {/* RIGHT side */}
                        <div className={`${flexBetween} w-full`}>
                            <ul className={`${flexBetween} gap-8 text-sm`}>
                                <AnchorLink anchor="Accueil"
                                    selectedAnchor={selectedAnchor}
                                    setSelectedAnchor={setSelectedAnchor}/>
                                <AnchorLink anchor="Avantages"
                                    selectedAnchor={selectedAnchor}
                                    setSelectedAnchor={setSelectedAnchor}/>
                                <AnchorLink anchor="Nos cours"
                                    selectedAnchor={selectedAnchor}
                                    setSelectedAnchor={setSelectedAnchor}/>
                                <AnchorLink anchor="Contactez-nous"
                                    selectedAnchor={selectedAnchor}
                                    setSelectedAnchor={setSelectedAnchor}/>
                            </ul>
                            <div className={`${flexBetween} gap-8`}>
                                <a href="#">connexion</a>
                                <button>Devenir membre</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
