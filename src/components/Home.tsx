import Categorias from "./Categorias"
import Favoritos from "./Favoritos"
import Form from "./Form"
import Hero from "./Hero"
import Nosotros from "./Nosotros"
import Footer from "./Footer"

export default function Home() {
    return (
        <>

            <section className="shadow-lg">
                <Hero />
            </section>

            <main id="tienda" className="my-12 w-[90%] max-w-7xl xl:max-w-[90%] mx-auto space-y-15">
                <Categorias />
                <Favoritos />
            </main>

            <section id="nosotros" className="bg-gray-50 py-5 lg:p-0">
                <Nosotros />
            </section>

            <section id="contacto" className="lg:relative bg-gray-950 py-10 lg:p-0">
                <img className="w-full hidden lg:block" src="/imagen-formulario.png" alt="imagen formulario" />
                <Form />
            </section>

            <footer className="bg-gray-950 py-4">
                <Footer />
            </footer>

        </>
    )
}
