import React from 'react'
import Nav from '../Nav'

function NavWrapper({children}) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default NavWrapper
