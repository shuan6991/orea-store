import { LuShoppingBag } from "react-icons/lu"

export default function Header() {
    return (
        <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row  md:justify-between items-center gap-5 md:gap-0">
            <h1 className="text-white text-4xl font-light uppercase">Oréa Store</h1>

            <nav>
                <ul className="flex gap-3">                    
                    <li className="text-white hover:text-amber-200"><a href="#">Tienda</a></li>
                    <li className="text-white hover:text-amber-200"><a href="#">Nosotros</a></li>
                    <li className="text-white hover:text-amber-200"><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <LuShoppingBag className="text-white cursor-pointer" size={25}/>
            
        </div>
    )
}
