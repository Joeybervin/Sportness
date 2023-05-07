
export interface NavbarProps {
    selectedAnchor: SelectedAnchor;
    setSelectedAnchor: (value: SelectedAnchor) => void;
}

export interface LinkProps {
    anchor: string;
    selectedAnchor: SelectedAnchor;
    setSelectedAnchor: (value: SelectedAnchor) => void;
}

export enum SelectedAnchor {
    Home = "accueil",
    Benefits = "avantages",
    OurClasses = "noscours",
    ContactsUs = "contactez-nous"
}

