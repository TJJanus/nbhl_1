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
                    <div className='nav-button'> <h3>Home</h3></div>
                </Link>

                <Link to='/about'>
                    <div className='nav-button'><h3>About</h3></div>
                </Link>

                <Link to='/news'>
                    <div className='nav-button'><h3>News</h3></div>
                </Link>

                <Link to='/divisons'>
                    <div className='nav-button'><h3>Divisions</h3></div>
                </Link>

                <Link to='/teams'>
                    <div className='nav-button'><h3>Teams</h3></div>
                </Link>

                <Link to='/schedule'>
                    <div className='nav-button'><h3>Schedule</h3></div>
                </Link>

                <Link to='/standings'>
                    <div className='nav-button'><h3>Standings</h3></div>
                </Link>

                <Link to='/stats'>
                    <div className='nav-button'><h3>Stats</h3></div>
                </Link>

                <Link to='/partners'>
                    <div className='nav-button'><h3>Partners</h3></div>
                </Link>

                <Link to='/affiliates'>
                    <div className='nav-button'><h3>Affiliates</h3></div>
                </Link>

                <Link to='/contact'>
                    <div className='nav-button'><h3>Contact</h3></div>
                </Link>

                <Link to='/shop'>
                    <div className='nav-button'><h3>Shop</h3></div>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
