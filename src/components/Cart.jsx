import React, { useContext } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/carrito.css'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {collection, doc, increment, serverTimestamp, setDoc, updateDoc} from 'firebase/firestore'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { db } from '../utils/FireBaseConfig'
import {HiOutlineExclamationCircle, HiOutlineQuestionMarkCircle} from 'react-icons/hi'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer, toast } from 'react-toastify'

const Cart = () => {
    const {listaCarrito} = useContext(CartConext)
    const {eliminarProducto} = useContext(CartConext)
    const {calcularSubTotal} = useContext(CartConext)
    const {calcularImpuestos} = useContext(CartConext)
    const {precioTotal} = useContext(CartConext)
    const {eliminarCarrito} = useContext(CartConext)
    const {calcularProductoCarrito} = useContext(CartConext)


    const agregarOrden = () => {
        const orden = {
            comprador: {
                nombre: 'Agustin Sosa',
                telefono: 341-111-1111,
                email: 'sosaagustin351@gmail.com'
            },
            dato: serverTimestamp(),
            item: listaCarrito.map(item =>({
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                qty: item.qty
            })),

            total: precioTotal()
        }
        const agregarOrdenEnFirestore = async() =>{
            const nuevaOrdenRef = doc(collection(db,'orden'))
            await setDoc(nuevaOrdenRef, orden);
            return nuevaOrdenRef
        }
        agregarOrdenEnFirestore()
        .then(resultado => {
            toast(`Compra con exito, orden: ${resultado.id}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            listaCarrito.forEach(async(item) =>{
                const itemDeRef = doc(db, 'Productos', item.id);
                await updateDoc(itemDeRef,{
                    stock: increment(-item.qty)
                });
            });
            eliminarCarrito()
        })
        .catch(error => console.log(error))
    }

    
    
    return (
        <>
        {
            listaCarrito.length > 0
            ?
            <section className='contenedor-carrito'>
            <div className='contenedor-prod-carrito'>
            <h1>Carrito</h1>
            <div className="contenedor-borrar-carrito">
            <button class="noselect" onClick={eliminarCarrito}><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
            </div>
                {
                    listaCarrito.map(item => 
                        <>
                        <ul key={item.id}>
                        <li>
                            <div className='imagen'>
                                <img src={item.imagen} alt="" />
                            </div>
                            <div className='informacion' key={item.id}>
                            <p>{item.nombre}</p>
                            <p>Cantidad: {calcularProductoCarrito() || 0}</p>
                            <div className="info-icono-exclamacion">
                            <span id='info-juego-digital' data-tooltip-html='Estás comprando una versión digital del producto. <br/> Recibirá una clave de producto que se puede activar <br/> en su plataforma adecuada.'><HiOutlineQuestionMarkCircle/></span>
                            <p>Juegos digitales</p>
                            <ReactTooltip
                            anchorId='info-juego-digital'
                            />
                            </div>
                            <div className="producto-digital">
                            </div>
                            </div>
                            <div className="contenedor-precio-prod">
                                <p>US${item.precio}</p>
                                <button onClick={() => eliminarProducto(item.id)}><RiDeleteBin6Line/></button>
                            </div>
                            
                        </li>
                        </ul>
                        </>
                        )
                    }
            </div>
            <div className='contenedor-pago-carrito'>
                <h3>Resumen</h3>
                <div className="info-resumen-carrito">
                <div className="subtotal">
                    <span>{calcularProductoCarrito()} | Subtotal</span>
                    <span>US${calcularSubTotal() || 0}</span>
                </div>
                <div className="impuestos">
                    <span>Impuestos</span>
                    <span>US${calcularImpuestos() || 0}</span>
                </div>
                </div>
                <div className="precio-total">
                    <span>Total</span>
                    <span>US${precioTotal() || 0}</span>
                </div>
                <button className="boton-comprar" onClick={agregarOrden}>
                    Comprar 
                </button>
            </div>
        </section>
        :  <div className="contenedor-carrito-vacio">
            <div className="icono-carrito-vacio">
                    <AiFillExclamationCircle/>
            </div>
            <h1>Carrito Vacio</h1>
            <p>No haz agregado ningun producto</p>
            <Link to={'/'}>
            <button>Volver al inicio</button>
            </Link>
        </div>
                    }
        
        <ToastContainer/>
        </>

        
        )
}

export default Cart