import React, { useEffect, useState} from 'react'

import {GoDash, GoPlus} from 'react-icons/go'
import BotonFavoritos from './BotonFavoritos'
import './Styles/count.css'

const ItemCount = ({inicial = 1, stock = 0, onAdd}) => {
    const [contador, setContador] = useState(0)

    useEffect(() =>{
        setContador(inicial)
    },[])


    const aumentarCantidad = () => {
        contador < stock
        ? setContador(contador + 1)
        : alert('ya no hay stock')
    }

    const disminuirCantidad = () => {
        contador > inicial + 1
        ? setContador(contador - 1)
        : alert('No se puede menos de 1')
    } 


    return (
        <>
        <div className='contenedor-botones'>
        <div className='contenedor-contadores'>
            <div className='contenedor-contador-botones'>
            <button onClick={disminuirCantidad}><GoDash/></button>
            <span>{contador}</span>
            <button onClick={aumentarCantidad}><GoPlus/></button>
            </div>
        </div>
        <div className='contenedor-boton-comprar'>
            {
                stock && contador
                ? <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
                : <button className='disbabled'>Agregar al carrito</button>
            }
        </div>
        {/* <BotonFavoritos/> */}
        </div>
        </>
        )
}

export default ItemCount