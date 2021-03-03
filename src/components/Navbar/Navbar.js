import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import logo from '../Navbar/NBHL.png';



function Navbar() {
    return (
        <div>
            <nav>
                <div className='image'>
                <img src={logo}></img>
                </div>
                <Link to='/home'>
                    <button className='nav-button'>Home</button>
                </Link>

                <Link to='/about'>
                    <button className='nav-button'>About</button>
                </Link>

                <Link to='/news'>
                    <button className='nav-button'>News</button>
                </Link>

                <Link to='/divisons'>
                    <button className='nav-button'>Divisions</button>
                </Link>

                <Link to='/teams'>
                    <button className='nav-button'>Teams</button>
                </Link>

                <Link to='/schedule'>
                    <button className='nav-button'>Schedule</button>
                </Link>

                <Link to='/standings'>
                    <button className='nav-button'>Standings</button>
                </Link>

                <Link to='/stats'>
                    <button className='nav-button'>Stats</button>
                </Link>

                <Link to='/partners'>
                    <button className='nav-button'>Partners</button>
                </Link>

                <Link to='/affiliates'>
                    <button className='nav-button'>Affiliates</button>
                </Link>

                <Link to='/contact'>
                    <button className='nav-button'>Contact</button>
                </Link>

                <Link to='/shop'>
                    <button className='nav-button'>Shop</button>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
