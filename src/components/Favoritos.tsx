import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'motion/react'
import { favoritos } from '../db/favotiros'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import FavoritosDetails from './FavoritosDetails'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductosDestacados() {
  return (
    <div className="space-y-5">
      <p className="text-sm uppercase">Productos destacados</p>

      <div className="md:flex flex-row justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-hero"
        >
          Lo más vendido
        </motion.h2>
      </div>

      <div className="px-10">

        <div className='flex justify-end gap-3'>
          <button className="custom-prev  -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
            <FiChevronLeft size={24} />
          </button>

          <button className="custom-next  -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
            <FiChevronRight size={24} />
          </button>
        </div>


        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,                  
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}

        >
          {favoritos.map(fav => (
            <SwiperSlide key={fav.name}>
              <FavoritosDetails fav={fav} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>


      <div className="custom-pagination flex justify-center mt-4 gap-2"></div>
    </div>
  )
}