import { SelectedAnchor } from "@/shared/types";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode;
}
interface AnchorLinkButtonProps extends ButtonProps {
    setSelectedAnchor: (value: SelectedAnchor) => void;
    anchor : SelectedAnchor;
}

const Button : React.FC<ButtonProps> = ({ type, children, ...props } ) => {

    const buttonType = type === undefined ? 'button' : type;

    return (
        <button
            {...props}
            type={buttonType}
            className="bg-secondary-500 rounded p-1.5 px-4 hover:bg-primary-500 transition duration-500 hover:text-white">
            {children}
        </button>)
}

const AnchorLinkButton : React.FC<AnchorLinkButtonProps> = ({children, setSelectedAnchor, anchor}) => {
    return (
        <AnchorLink
        className="rounded-md bg-secondary-500 px-8 py-2 hover:bg-primary-500 hover:text-white"
        onClick={() => setSelectedAnchor(anchor) }
        href={`#${anchor}`}>
            {children}
        </AnchorLink>
    )
}
export {AnchorLinkButton, Button};
