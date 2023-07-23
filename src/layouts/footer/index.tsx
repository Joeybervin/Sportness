import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-4">
                        Bien plus quu'une salle de sport !
                        Venez vous surpasser chez nous. Nous vous accompagnerons tout au long de votre parcours
                    </p>
                    <p>© Sportness - Tous droit réservés.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Plan du site</h4>
                    <p className="my-4">Accueil</p>
                    <p className="my-4">Avantages</p>
                    <p className="my-4">Nos cours</p>
                    <p className="my-4">Contactez-nous</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contactez-nous</h4>
                    <p className="my-4">Notre service client vous contactera au maximum d'ici 48h.</p>
                    <p>(+33)6-22-22-22-22</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;