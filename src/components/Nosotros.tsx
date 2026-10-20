import { TbDiamond } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { motion } from 'motion/react'

export default function Nosotros() {
    return (
        <div className="lg:relative grid lg:grid-cols-[40%_60%]">

            <img className="hidden lg:block" src="./nosotros-orea.png" alt="imagen nosotros" />

            <div className="lg:absolute inset-0 z-10 w-full">

                <div className="max-w-7xl xl:max-w-[90%] mx-auto h-full grid sm:grid-cols-[60%_40%] lg:grid-cols-[40%_34%_26%]">

                    <div className="hidden lg:flex items-center p-6">
                        <motion.p
                            className="font-nosotros text-white text-4xl w-52 md:-mt-10"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Mas que accesorios, es una forma de expresarte
                        </motion.p>
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6">
                        <p className="uppercase text-sm">Sobre oréa</p>
                        <motion.h3
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="font-hero text-4xl">Diseño, estilo
                            <span className="block">y autenticidad</span>
                        </motion.h3>

                        <p
                            className="text-dm">
                            En ORÉA creemos creemos que cada pieza tiene el poder de contar una historia.
                            Por eso, seleccionamos cuidadosamente cada diseño para que te acompañe en lo que
                            más importa
                        </p>

                        <motion.a
                            href="#"
                            className="block border p-2 rounded-3xl"
                            whileHover={{backgroundColor:'#111827', color:"#ffffff" }}
                        >
                            Contactanos
                        </motion.a>
                    </div>


                    <div className="flex flex-col justify-center gap-4 p-6 border-l border-gray-300">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="grid grid-cols-[10%_90%] gap-2 sm:gap-4">
                            <TbDiamond size={33} />
                            <p className="text-dm">
                                <span className="font-bold block">Materiales de buena calidad </span>
                                Acero inoxidable, baño en oro y piedras de circonia
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .3 }}
                            className="flex gap-3">
                            <MdVerifiedUser size={30} />

                            <p className="text-dm">
                                <span className="font-bold block">Compra segura</span>
                                Tus datos estan protegidos
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .6 }}
                            className="flex gap-3">
                            <FaRegHeart size={30} />

                            <p className="text-dm">
                                <span className="font-bold block">Atencion personalizada</span>
                                Estamos aqui para ayudarte
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>

        </div>
    )
}
