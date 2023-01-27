import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import './Styles/favoritos.css'
import { Link } from 'react-router-dom'
const FavWidget = () => {
    return (
        <Link to={'/favoritos'}>
        <div className='favoritos-widget'>
        {<AiOutlineHeart/>}
        </div>
        </Link>
    )
}

export default FavWidget