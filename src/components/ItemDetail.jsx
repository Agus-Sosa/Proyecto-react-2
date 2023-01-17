import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/itemdetail.css'
import ItemCount from './ItemCount'
import {BsCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Clasificacion from './Clasificacion'
import {BiChevronRight} from 'react-icons/bi'
import Loader from './Loader'

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
            ? <section className='contenedor-detalles'>
                <div className='contenedor-imagen-portada'>
                    <img src={item.portada} alt="" />
                </div>
                <section className='contenedor-producto'>
                <div className='contenedor-nav-detalle'>
                <Link to={'/'}><span>Inicio</span></Link> <BiChevronRight/> <Link to={`/categoria/${item.categoria}`}><span>{item.categoria}</span></Link> <BiChevronRight/> <span>{item.nombre}</span>
                </div>
                <div className='contenedor-informacion-producto'>
                    <div className='contenedor-imagen-producto'>
                        <img src={item.imagen} alt="" />
                    </div>
                <div className='contenedor-informacion'>
                    <h2>{item.nombre}</h2>
                    <div className='categoria-genero'>
                    <span>{item.categoria}</span> <BsCircleFill/> <span>{item.genero}</span>
                    </div>
                </div>
                </div>
                <Clasificacion item={item}/>
                </section>
            </section>

        :   <div className='contenedor-loader'><Loader item={item}/></div>
        }
        </>
    )
}

export default ItemDetail