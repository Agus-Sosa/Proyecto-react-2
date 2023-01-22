import React from 'react'
import ReactPlayer from 'react-player'
import './Styles/descripcion.css'
const DescripcionItem = ({item}) => {
    return (
        <>
        <div className='descripcion'>
            <div className='portada-descripcion'>
        <img src={item.portada} alt="" />
            </div>
        <section className='contenedor-descripcion'> 
        <div className='contenedor-descripcion-prod'>
        <h3>Descripcion</h3>    
        <p>{item.descripcion}</p>
        </div>
        <div className='contenedor-imagen-descripcion'>
            <ReactPlayer url={item.capturas[0]}/>
        </div>
        </section>
        </div>
        </>
        )
}

export default DescripcionItem