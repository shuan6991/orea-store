import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'motion/react'
import { favoritos } from '../db/favotiros'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import FavoritosDetails from './FavoritosDetails'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

    </div>


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
      >
        {favoritos.map(fav => (
          <SwiperSlide>

            <FavoritosDetails
              key={fav.name}
              fav={fav}
            />

          </SwiperSlide>
        ))}
      </Swiper>



    </div >
  )
}
