import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/itemdetail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {
    const [contadorItem, setContadorItem] = useState(0)
    const {agregarAlCarrito} = useContext(CartConext)

    const onAdd = (cantidad) =>{

        setContadorItem(cantidad)
        agregarAlCarrito(item, cantidad)
    }
    return (
        <>
        {
            item && item.imagen 
            ?<section className='contenedor-item'>
                <div className='contenedor-blur'>
            <div className='conetenedor-img-item'>
                <article>
                    <img src={item.portada} alt="" />
                </article>
            </div>
                </div>
            <div className='contenedor-info-item'>
                <h2>{item.nombre}</h2>
                <p>{item.categoria}</p>
                <span>US${item.precio}</span>
                {
                    contadorItem === 0
                    ?<ItemCount stock={item.stock} inicial={contadorItem} onAdd={onAdd}/>
                    : <Link to={'/carrito'}><button>Ir a carrito</button></Link>
                }
                </div>
        </section>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail