

export default function Hero() {

    const screem = window.innerWidth;

    return (
        <div className="relative">

            <img className="w-full md:h-full" src={screem < 768 ? 'hero-1.2.jpg': 'hero-1.jpg'} alt="imagen hero" />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute w-[90%] max-w-7xl mx-auto inset-0 flex flex-col justify-center items-end text-right space-y-5 lg:space-y-7">

                <p className="text-lg lg:text-xl text-white font-semibold">Estilo que te acompaña</p>
                <h2 className="font-hero text-3xl sm:text-4xl lg:text-7xl text-white font-bold leading-tight">
                    Pequeños detalles
                    <span className="block">Grandes historias</span>
                </h2>
                <p className="text-lg lg:text-xl hidden sm:inline text-white font-semibold">
                    Descrubre piezas únicas diseñadas para
                    <span className="block">resaltar tu esencia en cada momento</span>
                </p>

                <a href="#" className="uppercase p-2 sm:p-4 text-lg sm:text-xl font-bold bg-gray-900 hover:bg-gray-800 text-white rounded-lg">Pregunta por nuestros diseños</a>

            </div>

        </div>
    )
}
