
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from "./components/Header"
import Home from './components/Home'


function App() {

  function ScrollToHash() {
    const { hash } = useLocation()

    useEffect(() => {
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.replace("#", ""))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 0)
      }
    }, [hash])

    return null
  }


  return (
    <>
      <BrowserRouter>

        <ScrollToHash />

        <header className="bg-gray-950 p-3 shadow-[0_10px_18px_-2px] shadow-black/60 z-10 relative">
          <Header />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
