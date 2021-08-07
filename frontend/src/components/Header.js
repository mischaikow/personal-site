import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


    return (
        <div class="header">
            <NavLink to="/home" className="headerLink" activeClassName="activeHeaderLink">HOME</NavLink>
            <NavLink to="/blog" className="headerLink" activeClassName="activeHeaderLink">BLOG</NavLink>
            <NavLink to="/contact" className="headerLink" activeClassName="activeHeaderLink">CONTACT</NavLink>
        </div>
    )
}

export default Header;