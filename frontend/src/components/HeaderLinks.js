import React from 'react'

const HeaderLinks = ({ header, setPage, page }) => {
    const pageChange = (event) => {
        event.preventDefault()
        console.log('Header button clicked', event.target)
        setPage({ 
            page: header.name,
            blog: ''
        })
    }

    const buttonSubduedStyle = {
        backgroundColor: "Transparent",
        border: "none",
        padding: "0 1rem",
        fontFamily: "Lato, sans-serif",
        fontSize: "20px",
        color: "white"
    }
    const buttonHighlightStyle = {
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

    return (
        <button style={buttonStyle} onClick={pageChange}>{header.text}</button>
    )
}

export default HeaderLinks;