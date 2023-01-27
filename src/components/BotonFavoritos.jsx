import React from 'react'
import './Styles/favoritos.css'


const BotonFavoritos = ({onAddFav}) => {

    return (
        <>
        <div className='contenedor-boton-favoritos'>
            <button onClick={() => onAddFav()} >Agregar a favoritos</button>
        </div>
        </>
    )
}

export default BotonFavoritos