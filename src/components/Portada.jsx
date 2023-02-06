import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Styles/portada.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portada = ({item}) => {
    return (
        <>
        <>
        <section className='portada-home'>
        <article>
            <img src="https://images.alphacoders.com/117/thumb-1920-1173124.jpg" alt="" />
        </article>
        <div className="informacion-portada">
            <p>Playstation</p>
            <h1>God Of War Ragnarok</h1>
            <p>Nuevo Lanzamiento de Santa Monica Studio</p>
            <div className='boton-portada'>
            <Link to={'/item/OrDXEaHgt9UwrJwsbR4L'}>
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Ver Mas</span>
            </button>
            </Link>
            </div>
        </div>
            </section>
    </>
        <h2>Recomendados para ti</h2>
        </>

    )


}

export default Portada