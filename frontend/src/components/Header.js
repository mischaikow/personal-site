import React from 'react'
import HeaderLinks from './HeaderLinks.js'

const Header = ({ page, setPage }) => {
    const headerList = [
        {
            name: 'home',
            text: 'HOME',
            id: 1
        },
        {
            name: 'blog',
            text: 'BLOG',
            id: 2
        },
        {
            name: 'contact',
            text: 'CONTACT',
            id: 3
        }
    ]

    return (
        <div class="header">
            {headerList.map(header => <HeaderLinks key={header.id}
                                                   header={header}
                                                   setPage={setPage}
                                                   page={page} /> )}
        </div>
    )
}

export default Header;