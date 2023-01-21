import React from 'react'
import Loader from './Loader'
// import './Styles/capturas.css'
const Capturas = ({item}) => {
    return (
        <>
        {/* <section className='contenedor-capturas'>   
        <h3>Capturas</h3>
        <div className='contenedor-capturas-juego'>
            <div id='slider' className='slider scroll-smooth '>
            {
                item.length > 0 
                ?item.map(item => <img src={item.capturas} className='w-[220px] inline-block p-2 cursor-pointer hover:scale-pointer ease-in-out duration-300'/> )
                : <div>Cargando...</div>
            }
        </div>
        </div>
        </section> */}
        
        </>
        )
}

export default Capturas