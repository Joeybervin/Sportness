import { SelectedAnchor } from "@/shared/types";
import { motion } from "framer-motion";

interface ContactUsProps {
    setSelectedAnchor: (value : SelectedAnchor) => void;
}

const ContactUs = ({ setSelectedAnchor }: ContactUsProps) => {
  return (
    <section id="contactUs" className="w-full">
        <motion.div
            onViewportEnter={() => setSelectedAnchor(SelectedAnchor.ContactUs)}>

        </motion.div>
    </section>
  );
};

export default ContactUs;
