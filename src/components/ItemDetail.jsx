import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/itemdetail.css'
import ItemCount from './ItemCount'
import {BsCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Clasificacion from './Clasificacion'
import {BiChevronRight} from 'react-icons/bi'
import Loader from './Loader'
import {HiOutlineExclamationCircle} from 'react-icons/hi'
import {GiConsoleController} from 'react-icons/gi'
import {FaUser, FaCartPlus} from 'react-icons/fa'

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
                    <div className='contenedor-jugabilidad'>
                        <p><FaUser/>{item.jugador} Jugador/es</p>
                        <p><GiConsoleController/>{item.consolaDisponible} Disponible/es</p>
                        <p><FaCartPlus/>{item.complementos}</p>
                    </div>
                </div>
                <div className='contenedor-precio'>
                    <div className='contenedor-precio-producto'>
                <h3>US${item.precio}</h3> <HiOutlineExclamationCircle/> <span>No es el precio final</span>
                    </div>
                <ItemCount stock={item.stock} inicial={contadorItem} onAdd={onAdd}/>
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