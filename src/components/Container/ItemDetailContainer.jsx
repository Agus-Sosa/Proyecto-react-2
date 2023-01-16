import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/FireBaseConfig';

const ItemDetailContainer = () => {
    const [dato, SetDato] = useState({});
    const {idProducto} = useParams();
    useEffect(() =>{
        const fireStoreDetalle = async() =>{

        const docRef = doc(db, "Productos", idProducto);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        return {
            id: idProducto,
            ...docSnap.data()
        }
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        
    }
    fireStoreDetalle()
    .then(resultado => SetDato(resultado))
    .catch(error => console.log(error))
    }, [])
    return (
    <>
    <div className='contenedor-detail'>

    <ItemDetail item={dato}/>
    </div>
    </>
        )
}

export default ItemDetailContainer