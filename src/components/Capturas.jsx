import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import 'swiper/css'
import 'swiper/css/pagination'
import './Styles/capturas.css'
// import "swiper/modules/pagination/pagination.css";


const Capturas = ({item}) => {
    return (
        <>
        <section className='contenedor-capturas'>
            <h3>Galeria</h3>
            <div className='capturas'>
                <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={item.capturas[0]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[1]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[2]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[3]} alt="" /></SwiperSlide>
            <SwiperSlide><img src={item.capturas[4]} alt="" /></SwiperSlide>
            {/* <SwiperSlide><img src={item.capturas[5]} alt="" /></SwiperSlide> */}
        </Swiper>
            </div>
        </section>
        </>
    )
}

export default Capturas