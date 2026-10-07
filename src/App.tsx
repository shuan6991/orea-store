import Categorias from "./components/Categorias"
import Favoritos from "./components/Favoritos"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Nosotros from "./components/Nosotros"


function App() {


  return (
    <>
      <header className="bg-gray-950 p-3 shadow-[0_10px_18px_-2px] shadow-black/60 z-10 relative">
        <Header />
      </header>

      <section className="shadow-lg">
        <Hero />
      </section>

      <main className="my-12 max-w-7xl xl:max-w-[90%] mx-auto space-y-15">
        <Categorias />
        <Favoritos />
      </main>

      <section className="bg-gray-50">
        <Nosotros />
      </section>


    </>
  )
}

export default App
