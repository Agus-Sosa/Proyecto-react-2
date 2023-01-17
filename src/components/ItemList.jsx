import Item from './Item'
import Loader from './Loader'

function ItemList ({item})  {
    return (
        <>
        {
            item.length > 0
            ?item.map(item => <Item key={item.id} id={item.id} imagen={item.imagen} nombre={item.nombre} categoria={item.categoria} precio={item.precio} icono={item.icono}/>)
            : <div className='contenedor-loader'><Loader item={item}/></div>
        } 
        </>
    )
}

export default ItemList