import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedAnchor, LinkProps } from "../shared/types";


export const Link = ({anchor, selectedAnchor, setSelectedAnchor}: LinkProps) => {

    const lowerCaseAnchor = anchor.toLowerCase().replace(/ /g, "") as SelectedAnchor;

    return (
        <AnchorLink
        className={`${selectedAnchor === lowerCaseAnchor ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
        href={`#${lowerCaseAnchor}`}
        onClick={() => setSelectedAnchor(lowerCaseAnchor)}>

            {anchor}
        </AnchorLink>
    );
};

