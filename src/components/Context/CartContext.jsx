import { createContext, useState } from "react";

export const CartConext = createContext();

const CartConextProvider = ({children}) => {
    const [listaCarrito, SetListaCarrito] = useState([]);

    const agregarACarrito = (item, qty) => {
        let noExiste = listaCarrito.find(prod => prod.id === item.id)
        if(noExiste === undefined) {
            SetListaCarrito ([
                ...listaCarrito, {
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

    return (
        <>
        <CartConext.Provider value={{agregarACarrito}}>
            {children}
        </CartConext.Provider>
        </>
    )
}




export default CartConextProvider;