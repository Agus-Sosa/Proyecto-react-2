import React from 'react'
import './Styles/footer.css'
import {BsInstagram, BsLinkedin, BsFacebook, BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
                        <footer className="footer p-10 text-base-content ">
            <div>
                <span className="footer-title">Categorias</span> 
                <Link to={'/categoria/PlayStation'}><li className='link link-hover list-none'>Juegos de Playstation</li></Link>
                <Link to={'/categoria/Xbox'}><li className='link link-hover list-none'>Juegos de Xbox</li></Link>
                <Link to={'/categoria/Nintendo'}><li className='link link-hover list-none'>Juegos de nintendo</li></Link>
                {/* <a className="link link-hover">Press kit</a> */}
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terminos de uso</a> 
                <a className="link link-hover">Politicas de privacidad</a> 
                <a className="link link-hover">Cookies</a>
            </div> 
            <div>
                <span className="footer-title">Siguenos</span> 
                <div className="contenedor-redes">
                    <a href="*"><BsInstagram/></a>
                    <a href="*"><BsTwitter/></a>
                    <a href="*"><BsFacebook/></a>
                </div>
                <div className="form-control w-80">
                    <span className='footer-title text-lg'>Suscibete</span>
                <label className="label">
                    <span className="label-text">Introduzca su dirección de correo electrónico</span>
                </label> 
                <div className="relative">
                    <input type="text" placeholder="afterlife@gmail.com" className="input input-bordered w-full pr-16" /> 
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none boton-suscribirse">Suscribirse</button>
                </div>
                </div>
            </div>
            </footer>
            <hr />
            <div className="contenedor-autor footer p-12 text-base-content">
                <h2>Autor</h2>
                <p>Agustin Sosa</p>
                <span className='footer-title'>Redes Sociales</span>
                <div className="contenedor-redes-autor">
                    <a href="https://www.instagram.com/agus_sosa544/"><BsInstagram/></a>
                    <a href="https://www.linkedin.com/in/agust%C3%ADn-sosa-a6b29b248/"><BsLinkedin/></a>
                </div>
            </div>
        </>
    )
}

export default Footer