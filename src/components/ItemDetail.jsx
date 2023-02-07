import React, { useContext, useState } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/itemdetail.css'
import ItemCount from './ItemCount'
import {BsCircleFill, BsFillStarFill, BsStarFill} from 'react-icons/bs'
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
import DescripcionItem from './DescripcionItem'
import BotonFavoritos from './BotonFavoritos'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'


const ItemDetail = ({item}) => {
    const [contadorItem, setContadorItem] = useState(0)
    const {agregarACarrito} = useContext(CartConext)
    const {AgregarAFavoritos} = useContext(CartConext)
    const onAddFav = () => {
        AgregarAFavoritos(item)
    }
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
                    <div className='contenedor-valoracion'>
                    <p><BsStarFill/></p>
                    <p>{item.valoracion}</p>
                    <p>Valoracion</p>
                    </div>
                    <div className='contenedor-precio-producto'>
                <h3>US${item.precio}</h3> <span id='info-precio' data-tooltip-html='No es el precio final.<br/> Se aplicarán gastos de gestión al finalizar la compra' data-tooltip-variant='info'><HiOutlineExclamationCircle/></span> <span>No es el precio final</span>
                <ReactTooltip anchorId='info-precio'
                className='tooltip'
                
                />
                    </div>
                    {
                        contadorItem === 0
                        
                        ?<>
                        <ItemCount stock={item.stock} inicial={contadorItem} onAdd={onAdd}/> 
                        <BotonFavoritos onAddFav={onAddFav}/>  
                        </>
                        :<>
                        <div className="contenedor-post-compra">
                            <Link to={'/'}>
                                <button>
                                    Seguir comprando
                                </button>
                            </Link>
                            <Link to={'/carrito'}>
                                <button>
                                    Ir a carrito
                                </button>
                            </Link>
                        </div>
                        </>
                    }
                </div>
                </div>

                <Clasificacion item={item}/>
                </section>
                <section className='contenedor-detalle-juego'>
                    <div className="titulo-detalle">
                        <h2>Detalles</h2>
                    </div>
                <Capturas item={item}/>
                <DescripcionItem item={item}/>
                </section>
            </section>

        :   <div className='contenedor-loader'><Loader item={item}/></div>
        }

        <ToastContainer/>
        </>
    )
}

export default ItemDetail