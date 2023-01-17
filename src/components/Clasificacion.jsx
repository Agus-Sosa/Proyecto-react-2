import React from 'react'
import './Styles/clasificacion.css'

const Clasificacion = ({item}) => {
    return (
        <section className='contenedor-clasificacion'>
            <article>
                <img src={item.clasificacionImg} alt="" />
            </article>
            <div className='contenedor-info-clasificacion'>
                <p>{item.clasificacion}</p>
            </div>
        </section>
        )
}

export default Clasificacion;