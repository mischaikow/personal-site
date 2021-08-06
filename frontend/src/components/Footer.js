import React from 'react'
import '../css/base.css'

const Footer = () => {
    const linkStyle = {
        color: "#202a25",
    }

    return (
        <div class="footer">
            <div class="container">
                <p>&copy; {new Date().getFullYear()} Chris Mischaikow, all rights reserved.</p>
                <p>Find the code powering this website <a href="https://github.com/mischaikow/personal-site" style={linkStyle}>here</a>.</p>
            </div>
        </div>
    )
}

export default Footer;