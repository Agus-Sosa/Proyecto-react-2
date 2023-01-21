import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/itemdetail.css'
import ItemCount from './ItemCount'
import {BsCircleFill, BsCartCheck} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Clasificacion from './Clasificacion'
import 'react-toastify/dist/ReactToastify.css';
import {BiChevronRight} from 'react-icons/bi'
import Loader from './Loader'
import {HiOutlineExclamationCircle, HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {GiConsoleController} from 'react-icons/gi'
import {FaUser, FaCartPlus} from 'react-icons/fa'
import Capturas from './Capturas'
import { ToastContainer, toast } from 'react-toastify'


const ItemDetail = ({item}) => {
    const [contadorItem, setContadorItem] = useState(0)
    const {agregarACarrito} = useContext(CartConext)

    const onAdd = (qty) =>{
        toast('Se Agrego al carrito! 🛒', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        setContadorItem(qty)
        agregarACarrito(item, qty)
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
                    {
                        contadorItem === 0
                        ?<ItemCount stock={item.stock} inicial={contadorItem} onAdd={onAdd}/>
                        :<>
                        <Link to={'/carrito'}>
                            <div className='ir-a-carrito'>
                                <button>Ir a carrito <HiOutlineArrowNarrowRight/></button>
                            </div>
                            </Link>
                        </>
                    }
                </div>
                </div>

                <Clasificacion item={item}/>
                </section>
                <section className='contenedor-detalle-juego'>
                <h2>Detalles</h2>
                <Capturas item={item}/>
                </section>
            </section>

        :   <div className='contenedor-loader'><Loader item={item}/></div>
        }

        <ToastContainer/>
        </>
    )
}

export default ItemDetail