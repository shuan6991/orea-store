import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="w-[90%] mx-auto max-w-7xl xl:max-w-[90%]">

            <div className='flex flex-col md:flex-row gap-4 justify-between md:items-center border-b border-gray-600 pb-7'>
                <div>
                    <h1 className="text-5xl text-white font-extralight uppercase">Oréa</h1>
                    <p className="text-white">Brilla en cada momento</p>
                </div>

                <ul className="flex gap-3">
                    <li className="text-white hover:text-amber-200"><Link to="/#tienda">Tienda</Link></li>
                    <li className="text-white hover:text-amber-200"><Link to="/#nosotros">Nosotros</Link></li>
                    <li className="text-white hover:text-amber-200"><Link to="/#contacto">Contacto</Link></li>
                </ul>


                <div className='flex gap-4 md:border-l border-gray-600 lg:pl-10'>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram
                            size={30}
                            className='text-white hover:text-amber-200'
                        />
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaFacebookF
                            size={30}
                            className='text-white hover:text-amber-200'
                        />
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaTiktok
                            size={30}
                            className='text-white hover:text-amber-200'
                        />
                    </a>
                </div>
            </div>

            <p className='text-white pt-7'>&copy; 2026 ORÉA. Todos los derechos reservados </p>

        </div>
    )
}
