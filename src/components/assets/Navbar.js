import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='main-nav'>

            <div className='logo'>
                <img src='' alt='logo' />
            </div>
            <div className='right-section'>
                <ul >
                    <li>
                        <a href='#h'>Home</a>
                    </li>
                    <li>
                        <a href='#p'>Page</a>
                    </li>
                    <li>
                        <a href='#P'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#s'>Shop</a>
                    </li>
                    <li>
                        <a href='#b'>Blog</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
