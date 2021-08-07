import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderLinks = ({ header, setPage, page }) => {
    const pageChange = (event) => {
        event.preventDefault()
        console.log('Header button clicked', event.target)
        setPage({ 
            page: header.name,
            blog: ''
        })
    }

    const headerButtonStyle = {
        backgroundColor: "Transparent",
        border: "none",
        padding: "0 1rem",
        fontFamily: "Lato, sans-serif",
        fontWeight: "300",
        textDecoration: "none",
        fontSize: "20px",
        color: "white"
    }
    const activeHeaderButtonStyle = {
        fontWeight: "700",
    }
/*    const buttonHighlightStyle = {
        backgroundColor: "Transparent",
        border: "none",
        padding: "0 1rem",
        fontFamily: "Lato, sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
        color: "white"
    }
    const buttonStyle = page.page === header.name
        ? buttonHighlightStyle
        : buttonSubduedStyle
*/
    return (
        <NavLink
            to={header.link}
            style={headerButtonStyle}
            activeStyle={activeHeaderButtonStyle}
        >
            {header.text}
        </NavLink>
    )
}

export default HeaderLinks;