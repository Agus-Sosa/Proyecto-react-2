import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import Portada from '../Portada'
import { db } from '../../utils/FireBaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'
import '../Styles/items.css'
const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const {categoriaId} = useParams()

    
    useEffect(() =>{
        const fetchFireStore = async() =>{
            let q;
            if(categoriaId) {
                q = query(collection(db, 'Productos'), where('categoria', '==', categoriaId))
            } else{
                q = query(collection(db, "Productos"))
            }
                const querySnapshot = await getDocs(q);
                const datosDeFireStore = querySnapshot.docs.map(item =>({
                    id: item.id,
                    ...item.data()
                }))
                return datosDeFireStore;
        }
        fetchFireStore()
        .then(resultado => setDatos(resultado))
        .catch(error => console.log(error))
    },[categoriaId])

    return (
        <>
        <div className='contenedor-portada'>
        </div>
        <div data-aos="zoom-in">
        <div className='contenedor-items'>
        <ItemList item={datos}/>
        </div>
        </div>
        </>
    )
    }

export default ItemListContainer