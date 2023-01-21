import { createContext, useState } from "react";

export const CartConext = createContext();

const CartConextProvider = ({children}) => {
    const [listaCarrito, SetListaCarrito] = useState([]);

    const agregarACarrito = (item, qty) => {
        let noExiste = listaCarrito.find(prod => prod.id === item.id)
        if(noExiste === undefined) {

            SetListaCarrito ([
                ...listaCarrito, 
                {
                    id: item.id,
                    nombre: item.nombre,
                    imagen: item.imagen,
                    precio: item.precio,
                    qty: qty 
                }
            ])
        } else {
            noExiste.qty += qty 
            SetListaCarrito([...listaCarrito])
        }
    }

    const eliminarProducto = (id) =>{
        let eliminar = listaCarrito.filter(prod => prod.id !== id)
        SetListaCarrito(eliminar)
    }

    const eliminarCarrito = () => {
        SetListaCarrito([])
    }

    const calcularProductoCarrito = () => {
        let productos = listaCarrito.map(item => item.qty)
        return productos.reduce(((acumulador, itemActual) => acumulador + itemActual), 0);
    }

    const calcularSubTotal = () => {
        return Math.trunc(listaCarrito.reduce((acc, item) => acc + (item.precio * item.qty), 0))
    }

    const calcularImpuestos = () => {
        return Math.trunc(calcularSubTotal() * 0.64)
    }

    const precioTotal = () => {
        return (calcularSubTotal() + calcularImpuestos()) + 5;
    }

    return (
        <>
        <CartConext.Provider value={{listaCarrito ,agregarACarrito, eliminarProducto, eliminarCarrito, calcularProductoCarrito, precioTotal}}>
            {children}
        </CartConext.Provider>
        </>
    )
}




export default CartConextProvider;