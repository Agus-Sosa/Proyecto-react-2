import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'

const ItemDetail = ({item}) => {
    // const [itemCount, setItemCount] = useState(0)
    const {agregarAlCarrito} = useContext(CartConext)

    // const onAdd = (cantidad) =>{

    //     setItemCount(cantidad)
    //     agregarAlCarrito(item, cantidad)
    // }
    return (
        <>
        {
            item && item.imagen 
            ?<section className='contenedor-item'>
            <div className='conetenedor-img-item'>
                <article>
                    <img src={item.imagen} alt="" />
                </article>
            </div>
            <div className='contenedor-info-item'>
                <h4>{item.nombre}</h4>
                <p>{item.categoria}</p>
                <span>{item.precio}</span>
                
            </div>

        </section>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail