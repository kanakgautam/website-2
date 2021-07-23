import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './Navbar.css'
import Dropdown from './Dropdown.js'
import navtitle from '../images/nav-title.png'
import navbtn1 from '../images/nav-btn1.png'
import navbtn2 from '../images/nav-btn2.png'
import navbtn3 from '../images/nav-btn3.png'

function Navbar() {

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => { setClick(!click) };

    const closeMobileMenu = () => { setClick(false) };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false);
        }
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo' >
                <img src={navtitle}></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Product
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Technology
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About <i className='fas fa-caret-down' />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Client <i className='fas fa-caret-down' />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Partner <i className='fas fa-caret-down' />
                    </Link>
                </li>
                <li className='nav-item-mobile'>
                    <Button src={navbtn1} />
                    <Button src={navbtn2} />
                    <Button src={navbtn3} />
                </li>
            </ul>
            <div className='top-left'>
                <div className='get-started'>
                    <Button src={navbtn1} />
                    <Button src={navbtn2} />
                    <Button src={navbtn3} />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;