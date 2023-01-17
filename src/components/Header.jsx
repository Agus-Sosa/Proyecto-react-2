import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Styles/header.css'
const Header = () => {
    return (
        <>
        <div className='contenedor-header'>
        <div className="navbar ">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 contenedor-lista">
            <Link to={'/categoria/PlayStation'}><a>PlayStation</a></Link>
            <Link to={'/categoria/Xbox'}><a>Xbox</a></Link>
            <Link to={'/categoria/Nintendo'}><a>Nintendo</a></Link>
        </ul>
        </div>
    </div>
    <Link to={'/'}>
    <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">AfterLife</a>
    </div>
    </Link>
    <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <CartWidget/>
    </div>
    </div>
    </div>
        </>
        )
}

export default Header