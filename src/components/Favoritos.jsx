import React from 'react'
import { useContext } from 'react'
import { CartConext } from './Context/CartContext'

const Favoritos = () => {
    const {listaFavoritos} = useContext(CartConext)
    const {agregarAFavoritos} = useContext(CartConext)
    return (
        <>
        <div>Favoritos</div>
        {
            
        }
        </>
    )
}

export default Favoritos