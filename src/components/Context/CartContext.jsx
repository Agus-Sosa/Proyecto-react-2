import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
export const CartConext = createContext();

const CartConextProvider = ({children}) => {
    const [listaCarrito, SetListaCarrito] = useState([]);
    const [listaFavoritos, setListaFavoritos] = useState([]);


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

    const AgregarAFavoritos = (item) => {
        let noExiste = listaFavoritos.find(prod => prod.id === item.id)
        if(noExiste === undefined) {
            toast.info('Se Agrego a favoritos', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setListaFavoritos([
                ...listaFavoritos, 
                {
                    id: item.id,
                    nombre: item.nombre,
                    imagen: item.imagen,
                    precio: item.precio,
                }
            ])
        } else {
            toast.warn('Este articulo ya se encuentra en favoritos', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }


    const eliminarListaFavoritos = () => {
        setListaFavoritos([])
    }

    const EliminarProductoFavoritos = (id) => {
        let eliminar = listaFavoritos.filter(prod => prod.id !== id)
        setListaFavoritos(eliminar)
        toast.success('Se elimino de favoritos', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
        return (calcularSubTotal() + calcularImpuestos());
    }

    

    return (
        <>
        <CartConext.Provider value={{listaCarrito ,agregarACarrito, eliminarProducto, eliminarCarrito, calcularSubTotal, calcularProductoCarrito, precioTotal, calcularImpuestos, AgregarAFavoritos, listaFavoritos, eliminarListaFavoritos, EliminarProductoFavoritos}}>
            {children}
        </CartConext.Provider>
        <ToastContainer/>
        </>
    )
}




export default CartConextProvider;