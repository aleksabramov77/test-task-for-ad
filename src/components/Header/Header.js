import React from 'react'
import Logo_imi_horizontal from '../../img/svg/Logo_imi_horizontal.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='page-header'>
            <div className='logo'>
                <img src={Logo_imi_horizontal} alt="Alef Development"/>
            </div>

            <nav className='page-header__nav'>
                <div><NavLink activeClassName='active-link' to='/form'>Форма</NavLink></div>
                <div><NavLink activeClassName='active-link' to='/preview'>Превью</NavLink></div>
            </nav>
        </div>
    )
}

export default Header