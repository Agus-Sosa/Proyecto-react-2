import Item from './Item'

function ItemList ({item})  {
    return (
        <>
        {
            
            item.map(item => <Item key={item.id} id={item.id} imagen={item.imagen} nombre={item.nombre} categoria={item.categoria} precio={item.precio} icono={item.icono}/>)
        } 
        </>
    )
}

export default ItemList