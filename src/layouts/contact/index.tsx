import {useForm} from 'react-hook-form';
import { SelectedAnchor } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import { Button } from '@/components/Button';
import HText from '@/shared/HText';

interface ContactUsProps {
    setSelectedAnchor: (value : SelectedAnchor) => void;
}

const ContactUs = ({ setSelectedAnchor }: ContactUsProps) => {

    const { register, trigger, formState: { errors }} = useForm();

    const onSubmit = async (e:any) => {
        const isValid = await trigger();

        if (!isValid) {
            e.preventDefault();
        }
    }

    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`


  return (
    <section id="contactUs" className="mx-auto pt-24 pb-22 w-5/6">
        <motion.div
            onViewportEnter={() => setSelectedAnchor(SelectedAnchor.ContactUs)}>
                <motion.div className="md:w-9/12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{ 
                        hidden : { opacity: 0, x: -50 },
                        visible: {opacity: 1, x: 0 },
                    }}>
                    {/* HEADER */}
                    <HText>Contactez-nous et <span className='text-red-500'>changer dès aujourd'hui</span> </HText>
                    {/* DESCRIPTION */}
                    <p className='pt-5 pb-10'>Envoyez-nous un message dès maintenant pour changer votre vie aujourd'hui ! Notre équipe est prête à vous accompagner dans votre parcours vers le bien-être et l'épanouissement. Ne tardez pas à nous contacter, et ensemble, atteignons vos objectifs sportifs !</p>
                </motion.div>
                
                {/* FORM AND IMAGE */}
                <div className='mt-10 justify-between gap-8 md:flex '>
                    {/* FORM */}
                    <motion.div className='my-auto basis-3/5'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{ duration: 0.5 }}
                        variants={{ 
                            hidden : { opacity: 0, x: 50 },
                            visible: {opacity: 1, x: 0 },
                    }}>
                        <form 
                            className=''
                            method="POST"
                            target="_blank"
                            action={`https://formsubmit.co/${import.meta.env.MY_EMAIL}`}
                            onSubmit={onSubmit}
                        >
                            {/* NAME */}
                            <input 
                                className={inputStyles}
                                type="text" id="name"placeholder='Nom & Prénom'
                                {...register("name",{
                                    required: true,
                                    maxLength:100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "Ce champ est obligatoire."}
                                    {errors.name.type === "maxLength" && "100 caractères maximum."}
                                </p>
                            )}

                            {/* EMAIL */}
                            <input 
                                className={inputStyles}
                                type="email" id="email"placeholder='E-mail'
                                {...register("email",{
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "Ce champ est obligatoire."}
                                    {errors.email.type === "pattern" && "L'e-mail est invalide."}
                                </p>
                            )}

                            {/* MESSAGE */}
                            <textarea 
                                className={inputStyles}
                                id="message"placeholder='Message' rows={6} cols={50}
                                {...register("message",{
                                    required: true,
                                    maxLength:1000,
                                    minLength:10,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "Ce champ est obligatoire."}
                                    {errors.message.type === "maxLength" && "1000 caractères maximum."}
                                    {errors.message.type === "minLength" && "10 caractères minimum."}
                                </p>
                            )}
                        </form>
                        <Button type="submit">Envoyer</Button>
                    </motion.div>
                    {/* IMAGE */}
                    <motion.div className='relative my-5 basis-2/5'>
                        <div className='lg:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img src={ContactUsPageGraphic} className='mx-auto my-auto shrink' alt="Une femme faisant ses étirrements musculaires" />
                        </div>
                    </motion.div>

                    
                </div>
        </motion.div>
    </section>
  );
};

export default ContactUs;
