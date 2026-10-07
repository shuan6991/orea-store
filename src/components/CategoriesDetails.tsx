import type { Category } from "../types"
import {FiArrowRight} from 'react-icons/fi'

type CategoriesDetailsPops = {
    cat: Category
}

export default function CategoriesDetails({ cat }: CategoriesDetailsPops) {
    return (
        <div className=" relative shadow-lg rounded-lg">

            <img className="w-full h-full rounded-lg" src={`${cat.img}.jpg`} alt="imagen categoria" />

            <div className="absolute inset-0 bg-black/13 rounded-lg"/>

            <div className="absolute top-4/5 flex gap-2 items-center">
                <p className="text-xl  text-white font-semibold pl-4">{cat.name}</p>
                <FiArrowRight className="text-white"/>
            </div>

        </div>
    )
}
