import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import styles from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact=() =>
{
        const formRef=useRef();
        const [ form, setForm ]=useState( {
                name: "",
                email: "",
                message: ""
        } );
        const [ loading, setLoading ]=useState( false );

        const templateId="template_a7j5iaw";
        const serviceGmailId="service_buhdv5s";
        const public_Key="6tSIRXiPtzmJ-K-7f";

        const handleChange=( e ) =>
        {
                const { name, value }=e.target;
                setForm( { ...form, [ name ]: value } );
        };

        const handleSubmit=async ( e ) =>
        {
                e.preventDefault(); // Prevent browser refresh after form submission
                setLoading( true );
                try
                {
                        await emailjs.send(
                                serviceGmailId,
                                templateId,
                                {
                                        from_name: form.name,
                                        to_name: "Aditya",
                                        from_email: form.email,
                                        to_email: "aditya.kurapati23@vit.edu",
                                        message: form.message
                                },
                                public_Key
                        );
                        setLoading( false );
                        alert( "Thanks! We will get in touch with you 😊" );
                        setForm( {
                                name: "",
                                email: "",
                                message: ""
                        } );
                } catch ( error )
                {
                        setLoading( false );
                        console.error( "Error sending email:", error );
                        console.log( error+" - MEssage" )
                }
        };

        return (
                <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
                        <motion.div variants={ slideIn( 'left', 'tween', 0.2, 1 ) } className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                                <p className={ `${ styles.sectionSubText }` }>Get In Touch</p>
                                <h3 className={ `${ styles.sectionHeadText }` }>Contact.</h3>

                                <form ref={ formRef } onSubmit={ handleSubmit } className="mt-12 flex flex-col gap-8">
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Your Name</span>
                                                <input
                                                        type="text"
                                                        name="name"
                                                        value={ form.name }
                                                        onChange={ handleChange }
                                                        className="bg-tertiary py-4 px-6 outline-none rounded-lg placeholder:text-secondary text-white border-none font-medium"
                                                        placeholder="What's your name?"
                                                />
                                        </label>
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Your Email</span>
                                                <input
                                                        type="email"
                                                        name="email"
                                                        value={ form.email }
                                                        onChange={ handleChange }
                                                        className="bg-tertiary py-4 px-6 outline-none rounded-lg placeholder:text-secondary text-white border-none font-medium"
                                                        placeholder="What's your email?"
                                                />
                                        </label>
                                        <label className="flex flex-col">
                                                <span className="text-white font-medium mb-4">Your Message</span>
                                                <textarea
                                                        name="message"
                                                        value={ form.message }
                                                        onChange={ handleChange }
                                                        className="bg-tertiary py-4 px-6 outline-none rounded-lg placeholder:text-secondary text-white border-none font-medium"
                                                        placeholder="What do you want to say?"
                                                        rows="7"
                                                />
                                        </label>
                                        <button
                                                type="submit"
                                                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                                        >
                                                { loading? 'Posting':'Post' }
                                        </button>
                                </form>
                        </motion.div>
                        <motion.div variants={ slideIn( 'right', 'tween', 0.5, 0.75 ) } className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                                <EarthCanvas />
                        </motion.div>
                </div>
        );
};

export default SectionWrapper( Contact, 'contact' );
