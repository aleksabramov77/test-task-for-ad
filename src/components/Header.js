import React from 'react'
import Logo_imi_horizontal from '../img/svg/Logo_imi_horizontal.svg'
import {  NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='page-header'>
        <img className='page-header__logo' src={Logo_imi_horizontal} alt="Alef Development"/>
            <nav className='page-header__nav-menu nav-menu'>
                <NavLink className='nav-menu__link' activeClassName='nav-menu__active-link' to='/form'>Форма</NavLink>
                <NavLink className='nav-menu__link' activeClassName='nav-menu__active-link' to='/preview'>Превью</NavLink>
            </nav>
        </header>
    )
}

export default Header