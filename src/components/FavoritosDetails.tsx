import type { Favorito } from "../types"
import {motion} from 'motion/react'


type FavoritosDetailsProps = {
    fav: Favorito
}

export default function FavoritosDetails({ fav }: FavoritosDetailsProps) {
    return (
        <div className=" shadow-lg rounded-lg ">

            <img className="w-full rounded-lg" src={`${fav.img}.png`} alt="imagen categoria" />
          
            <div className=" items-center p-3 space-y-2">
                <p className="text-md md:text-lg">{fav.name}</p>
                <p>{`$${fav.precio}`}</p>
                <motion.input 
                whileHover={{backgroundColor: '#111827', color:"#ffffff"}}
                transition={{duration:.5}}
                 type="button" 
                 value="Agregar al carrito"
                 className="border text-sm w-full p-2 uppercase rounded-lg cursor-pointer"/>
            </div>

        </div>
    )
}
