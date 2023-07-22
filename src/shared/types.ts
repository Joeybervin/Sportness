
export enum SelectedAnchor {
    Home = "accueil",
    Benefits = "avantages",
    OurClasses = "noscours",
    ContactUs = "contactez-nous"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}

