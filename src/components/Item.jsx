import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/items.css'

const Item = ({id, nombre, imagen ,categoria, precio, icono}) => {
    return (
        <Link to={`/item/${id}`}>
        <div className='card-prod'>
            <div className='contenedor-img-card'>
                <div className='contenedor-imagen'>
            <article>
                <img src={imagen} alt="" />
            </article>
            <span className='categoria-item'>
                <img src={icono} alt="" />
            </span>
                </div>
            </div>
            <div className='contenedor-info-card'>
                <p>{nombre}</p>
                <span>US${precio}</span>
            </div>
                <div className="contenedor-icono-movil">
                    <img src={icono} alt="" />
                </div>
        </div>
        </Link>    
        )
}

export default Item;