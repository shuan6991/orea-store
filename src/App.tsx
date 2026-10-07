import Categorias from "./components/Categorias"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {


  return (
    <>
      <header className="bg-gray-950 p-3 shadow-[0_10px_18px_-2px] shadow-black/60 z-10 relative">
        <Header />
      </header>

      <section className="shadow-lg">
        <Hero />
      </section>

      <main className="my-12 max-w-7xl mx-auto">
          <Categorias />
      </main>


    </>
  )
}

export default App
