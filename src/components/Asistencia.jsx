import React from 'react'
import {FaKey} from 'react-icons/fa'
import {HiOutlineQuestionMarkCircle} from 'react-icons/hi'
import {MdAttachMoney, MdSupportAgent} from 'react-icons/md'
import './Styles/asistencia.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Asistencia = () => {
    return (
        <section className="contenedor-asistencia">
            <div className='detalles'>
                <div className="contenedor-icono">
                    <FaKey/>
                </div>
                <div className="contenedor-info">
                    <h3>Envio digital</h3>
                    <span id='asistencia-envio' data-tooltip-html='Se enviara un codigo del respectivo producto <br/> una vez realizada la compra'  data-tooltip-variant='info'>
                        <HiOutlineQuestionMarkCircle/>
                    </span>
                    <ReactTooltip
                    anchorId='asistencia-envio'
                    
                    />
                </div>
            </div>
            
            <div className='detalles'>
                <div className="contenedor-icono">
                <MdSupportAgent/>
                </div>
                <div className="contenedor-info">
                    <h3>Soporte tecnico</h3>
                    <span id='asistencia-soporte' data-tooltip-html='Asistencia con los tecnicos las 24hs' data-tooltip-variant='info'>
                        <HiOutlineQuestionMarkCircle/>
                    </span>
                    <ReactTooltip
                    anchorId='asistencia-soporte'
                    />
                </div>
            </div>
            
            <div className='detalles'>
                <div className="contenedor-icono">
                <MdAttachMoney/>
                </div>
                <div className="contenedor-info">
                    <h3>Rembolso</h3>
                    <span id='asistencia-rembolso' data-tooltip-html='Podras reembolsar el producto dentro <br/>de las 48hs en caso de algun problema' data-tooltip-variant='info'>
                        <HiOutlineQuestionMarkCircle/>
                    </span>
                    <ReactTooltip
                    anchorId='asistencia-rembolso'
                    />
                </div>
            </div>
        </section>
        )
}

export default Asistencia;