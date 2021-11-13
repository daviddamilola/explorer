import React from 'react'

function Nav() {
    return (
        <div className="w-full flex justify-between items-center bg-black px-2 py-4 ">
            <div>
                <p className="text-green-500 text-base">Explorer</p>
            </div>
            <input className="p-2 rounded shadow outline-none focus:ring-green-500"/>
        </div>
    )
}

export default Nav
