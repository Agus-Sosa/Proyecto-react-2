import React, { useContext } from 'react'
import { CartConext } from './Context/CartContext'
import './Styles/carrito.css'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {collection, doc, increment, serverTimestamp, setDoc, updateDoc} from 'firebase/firestore'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { db } from '../utils/FireBaseConfig'
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
            // alert(`Orden ${resultado.id}`)
            // console.log(resultado.id)
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
            <button onClick={eliminarCarrito}>borrar cart</button>
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
                            <span>{item.publicacion}</span>
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
                <div className="envios">
                    <span>Envio</span>
                    <span>US$5</span>
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