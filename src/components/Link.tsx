import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedAnchor } from "../shared/types";

export interface LinkProps {
    style? : string;
    anchor: string;
    selectedAnchor: SelectedAnchor;
    setSelectedAnchor: (value: SelectedAnchor) => void;
}

export const Link = ({anchor, selectedAnchor, setSelectedAnchor, style}: LinkProps) => {

    const lowerCaseAnchor = anchor.toLowerCase().replace(/ /g, "") as SelectedAnchor;
    const navbarMenuLink = selectedAnchor === lowerCaseAnchor ? "text-primary-500" : ""
    const basicLink = "text-sm font-bold text-primary-500 underline hover:text-secondary-500"
    const linkStyle = style === "basicLinkStyle" ?  basicLink : navbarMenuLink

    return (
        <AnchorLink
        className={linkStyle}
        href={`#${lowerCaseAnchor}`}
        onClick={() => setSelectedAnchor(lowerCaseAnchor)}>
            {anchor}
        </AnchorLink>
    );
};

