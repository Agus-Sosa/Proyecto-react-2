import React, { useContext } from 'react'
import { CartConext } from './Context/CartContext'

const Cart = () => {
    const {listaCarrito} = useContext(CartConext)
    const {eliminarProducto} = useContext(CartConext)
    const {calcularSubTotal} = useContext(CartConext)
    const {calcularImpuestos} = useContext(CartConext)
    const {precioTotal} = useContext(CartConext)

    return (
        <>
        <h1>Carrito</h1>
        <section>
            <div>
                {
                    listaCarrito.map(item => 
                        <>
                        <ul key={item.id}>
                        <li>{item.nombre}</li>
                        <li>{item.categoria}</li>
                        <li></li>
                        </ul>
                        </>
                        )
                }
            </div>
            <div>
                
            </div>
        </section>
        </>
        )
}

export default Cart