import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Styles/portada.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Asistencia from './Asistencia';

const Portada = ({item}) => {
    return (
        <>
        <>
        <section className='portada-home'>
        <article>
            <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-hero-banner-desktop-01-en-07sep21?$2400px$" alt="" />
        </article>
        <div className="contenedor-imagen-movil">
            <img src="https://w0.peakpx.com/wallpaper/147/517/HD-wallpaper-the-art-of-god-of-war-ragnarok-to-release-in-november-2022-god-of-war-ragnorok.jpg" alt="" />
        </div>
        <div className="informacion-portada">
            <Link to={'/categoria/PlayStation'}>
            <div className='categoria'>
            <p>Playstation</p>
            </div>
            </Link>
            <div className="consolas-disponibles-portada">
                <p>Ps4</p> 
                <p>Ps5</p>
            </div>
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
        <Asistencia/>   
        <h2>Recomendados para ti</h2>
        </>

    )


}

export default Portada