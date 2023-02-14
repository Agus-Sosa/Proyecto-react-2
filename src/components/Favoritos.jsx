import React from 'react'
import { useContext } from 'react'
import { CartConext } from './Context/CartContext'
import { Link } from 'react-router-dom'
import {TbHeartOff} from 'react-icons/tb'
import {AiFillExclamationCircle, AiOutlineSearch} from 'react-icons/ai'
import './Styles/favoritos.css'
import './Styles/items.css'

const Favoritos = () => {
    const {listaFavoritos} = useContext(CartConext)
    const {eliminarListaFavoritos} = useContext(CartConext)
    const {EliminarProductoFavoritos} = useContext(CartConext)
    return (
        <>
        {
            <section className="contenedor-favoritos">
                <div className="contenedor-titulo-favoritos">
                    <h1>Favoritos</h1>
                </div>
                <div className="contenedor-contador-fav">
                    <span>Productos</span>
                    <button onClick={eliminarListaFavoritos}> Borrar todo</button>
                </div>
            <div className="contenedor-articulos">
            {/* <div className="buscador-favoritos">
                <h2>Nombre del Juego</h2>
            <div className="buscador">
            <input 
            type="text" 
            placeholder="Buscar" 
            className="input w-full max-w-xs" 
            />
            <button>
            <AiOutlineSearch/>
            </button>          
            </div>
            </div> */}
            <div className="articulos">
                {
                listaFavoritos.length > 0
                    ? listaFavoritos.map(item => 
                        <>
                            <div className='card-favoritos' key={item.id}>
                        <Link to={`/item/${item.id}`} >
                        <div className='contenedor-img-card'>
                            <div className='contenedor-imagen'>
                        <article>
                            <img src={item.imagen} alt="Ver Producto" />
                        </article>
                        <span className='categoria-item'>
                            <img src={item.icono} alt="" />
                        </span>
                            </div>
                        </div>
                    </Link>
                        <div className='contenedor-info-card'>
                            <p>{item.nombre}</p>
                            <span>US${item.precio}</span>
                            <div className='contenedor-fav-icono'>
                            <button onClick={() => EliminarProductoFavoritos(item.id)}><TbHeartOff/></button>
                            </div>
                            </div>
                            
                    </div>
                        </>
                    )
                : <div className="contenedor-fav-vacio">
                    <div className="contenedor-icono-vacio">
                    <AiFillExclamationCircle/>
                    </div>
                    <h2>
                        Favoritos vacio
                    </h2>
                    <p>No haz agregado ningun producto a favoritos</p>
                </div>
                }

            </div>
            </div>
            </section>
            
                }
                </>
    )
}

export default Favoritos