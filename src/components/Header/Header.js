import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <div className='header-i'>
                <h1>Header Image</h1>
            </div>
            <div className='header'>
                <nav>
                    <a href='http://thenbhl.com/'>Home</a>
                    <a>About</a>
                    <a>News</a>
                    <a>Divisons</a>
                    <a>Teams</a>
                    <a>Schedule</a>
                    <a>Standings</a>
                    <a>Stats</a>
                    <a>Partners</a>
                    <a>Affiliates</a>
                    <a>Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
