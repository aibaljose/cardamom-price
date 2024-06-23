import React from 'react'
import "./navbar.css"

const navbar = () => {
    return (
        <div className='nav'>
        <div className="logo">
            Impact
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>Price</li>
                <li>About us</li>
                <div className="btn">
                    Support us
                </div>
            </ul>
        </div>

        </div>
    )
}

export default navbar
