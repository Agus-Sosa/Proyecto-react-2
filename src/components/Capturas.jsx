import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import 'swiper/css'
import 'swiper/css/pagination'
// import "swiper/modules/pagination/pagination.css";


const Capturas = ({item}) => {
    return (
        <>
        <section className='contenedor-capturas'>
            <h3>Capturas</h3>
            <div className='slider'>
                <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={item.capturas[0]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[1]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[2]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[3]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[4]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[5]} alt="" /></SwiperSlide>
        </Swiper>
            </div>
        </section>
        </>
    )
}

export default Capturas