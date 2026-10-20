import { LuShoppingBag } from "react-icons/lu"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="w-[90%] md:max-w-7xl mx-auto xl:max-w-[90%] flex flex-col md:flex-row  md:justify-between items-center gap-5 md:gap-0">

            <Link to="/"><h1 className="text-white text-4xl font-light uppercase">Oréa Store</h1></Link>

            <nav>
                <ul className="flex gap-3">
                    <li className="text-white hover:text-amber-200"><Link to="/#tienda">Tienda</Link></li>
                    <li className="text-white hover:text-amber-200"><Link to="/#nosotros">Nosotros</Link></li>
                    <li className="text-white hover:text-amber-200"><Link to="/#contacto">Contacto</Link></li>
                </ul>
            </nav>

            <LuShoppingBag className="text-white cursor-pointer" size={25} />

        </div>
    )
}
