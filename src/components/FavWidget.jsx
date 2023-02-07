import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import './Styles/favoritos.css'
import { Link } from 'react-router-dom'
const FavWidget = () => {
    return (
        <Link to={'/favoritos'}>
            <label className='btn btn-ghost btn-circle'>
        <div className='favoritos-widget'>
        {<AiOutlineHeart/>}
        </div>
            </label>
        </Link>
    )
}

export default FavWidget