import { TbDiamond } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function Nosotros() {
    return (
        <div className="mt-5 relative grid grid-cols-[40%_60%]">

            <img src="./nosotros-orea.png" alt="imagen nosotros" />

            <div className="absolute inset-0 z-10 w-full">

                <div className="max-w-7xl xl:max-w-[90%] mx-auto h-full grid grid-cols-[40%_34%_26%]">

                    <div className=" flex items-center p-6">
                        <p className="font-nosotros text-white text-4xl w-52 md:-mt-10">
                                Mas que accesorios, es una forma de expresarte
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6">
                        <p className="uppercase text-sm">Sobre oréa</p>
                        <h3 className="font-hero text-4xl">Diseño, estilo
                            <span className="block">y autenticidad</span>
                        </h3>

                        <p className="text-dm">
                            En ORÉA creemos creemos que cada pieza tiene el poder de contar una historia.
                            Por eso, seleccionamos cuidadosamente cada diseño para que te acompañe en lo que
                            más importa
                        </p>
                    </div>


                    <div className="flex flex-col justify-center gap-4 p-6 border-l border-gray-300">
                        <div className="grid grid-cols-[10%_90%] gap-4">
                            <TbDiamond size={33} />
                            <p className="text-dm">
                                <span className="font-bold block">Materiales de buena calidad </span>
                                Acero inoxidable, baño en oro y piedras de circonia
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <MdVerifiedUser size={30} />

                             <p className="text-dm">
                                <span className="font-bold block">Compra segura</span>
                                Tus datos estan protegidos
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <FaRegHeart size={30} />

                             <p className="text-dm">
                                <span className="font-bold block">Atencion personalizada</span>
                                Estamos aqui para ayudarte
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
