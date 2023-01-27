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
        <div className='descripcion'>
            <p>{item.descripcion}</p>
                <div className='contenedor-desarrollador'>
                    <div className='desarrolador'>
                    <p>Desarrollado por</p>
                    <span>{item.desarrollador}</span>
                    </div>
                    <div className='publicacion'>
                    <p>Publicado por</p>
                    <span>{item.publicacion}</span>
                    </div>
                    <div className='lanzamiento'>
                    <p>Fecha de lanzamiento</p>
                    <span>{item.lanzamiento}</span>
                </div>
                </div>
            </div>    
        </div>
        <div className='contenedor-imagen-descripcion'>
            <h3>Trailer</h3>
            <ReactPlayer 
            url={item.trailer}
            controls
            muted
            loop
            />
        </div>
        </section>
        </div>
        </>
        )
}

export default DescripcionItem