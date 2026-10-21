import { useState } from "react"
import emailjs from "@emailjs/browser"
import type { Person } from "../types"
import { motion } from 'motion/react'


const initialState = {
    name: '',
    whatsapp: '',
    email: ''
}

export default function Form() {


    const [person, setPerson] = useState<Person>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await emailjs.send(
                "service_4dgxwvu",
                "template_eorg9me",
                {
                    name: person.name,
                    whatsapp: person.whatsapp,
                    email: person.email
                },

                {
                    publicKey: "OHeQh1SD3dZrqJE1g"
                }

            );

            setPerson(initialState)
            alert("¡Mensaje enviado correctamente!");
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            alert("No fue posible enviar el mensaje. Inténtalo nuevamente.");
        }
    }

    return (
        <div className="w-[90%] max-w-7xl xl:max-w-[90%] mx-auto lg:absolute lg:inset-0 flex flex-col lg:justify-center items-center lg:items-start">

            <motion.form
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-[40%] p-5 border border-white space-y-5"
                onSubmit={handleSubmit}
            >

                <h3 className="text-white text-center lg:text-start font-bold text-4xl uppercase font-hero">Contactanos</h3>

                <p className="text-white text-center lg:text-start"> pregunta por nuestas promociones </p>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-white text-lg" htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-white rounded-lg text-white"
                        placeholder="Tu nombre"
                        name="name"
                        id="name"
                        value={person.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-white text-lg" htmlFor="whatsapp">Whatsapp :</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-white rounded-lg text-white"
                        placeholder="Tu whatsapp"
                        name="whatsapp"
                        id="whatsapp"
                        value={person.whatsapp}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-white text-lg" htmlFor="email">Correo :</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-white rounded-lg text-white"
                        placeholder="Tu whatsapp"
                        name="email"
                        id="email"
                        value={person.email}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" className="w-full uppercase p-2 bg-gray-200 hover:bg-gray-300 font-bold text-lg cursor-pointer" value="Enviar datos" />

            </motion.form>
        </div>
    )
}
