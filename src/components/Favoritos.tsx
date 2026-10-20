import { FiArrowRight } from 'react-icons/fi'
import { categories } from '../db/categories'
import CategoriesDetails from './CategoriesDetails'
import { motion } from 'motion/react'

export default function
  () {
  return (
    <div className="space-y-5">
      <p className="text-sm uppercase">Productos destacados</p>

      <div className="md:flex flex-row justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-hero">Lo más vendido
        </motion.h2>

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
