import { FiArrowRight } from 'react-icons/fi'
import { categories } from '../db/categories'
import CategoriesDetails from './CategoriesDetails'

export default function
  () {
  return (
    <div className="space-y-5">
      <p className="text-sm uppercase">Productos destacados</p>

      <div className="md:flex flex-row justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-hero">Lo más vendido</h2>

        <a className="mt-2 text-sm uppercase flex gap-2 items-center" href="#">
          Ver todas  <FiArrowRight />
        </a>

      </div>

      <div className='flex flex-col md:grid md:grid-cols-5 gap-4 justify-between'>
        {categories.map(cat => (
          <CategoriesDetails
            key={cat.id}
            cat={cat}
          />
        ))}
      </div>


    </div>
  )
}
