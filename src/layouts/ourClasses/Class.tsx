import { motion } from "framer-motion";


interface ClassProps {
    ourClass: string;
    description: string;
    image: string;
}
const Class = ({ourClass, description, image } : ClassProps) => {

    const overlayStyle = `p-5 absolute z-30 flex flex-col items-start justify-center gap-5 h-full w-full bg-red-500/[0.7] overflow-hidden opacity-0 transition duration-500 hover:opacity-100`

  return ( 
  <li className="relative w-[425px] max-h-max inline-block text-white ">
    <div 
        className={overlayStyle}>
        <p className="text-2xl font-bold">{ourClass}</p>
        <p>{description}</p>
    </div>
    <img src={image} alt="Photo de l'un de nos cours" 
    className=""/>
  </li>
  )
};

export default Class;
