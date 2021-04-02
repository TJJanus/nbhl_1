import React, { useState } from 'react';
import './Header.css';
import headerImage from '../Header/header.png';
import dummyData from './dummyData';
import Boxscore from '../Boxscore/Boxscore';
// added a comment

function Header() {

    const [data, setData] = useState(dummyData)
    
    // const gamesList = data.map(game => {
    //     console.log(game)
    // })

    console.log(data)

    return (
        <div className="header">
            {/* <Boxscore /> */}
        {data.map((game) => (
            <div className="container">
              <div className='box'>
              <p className='date'>{game.date}</p>
                <div className='teams'>    
                    <p>{game.awayTeam}</p>
                    <p>{game.homeTeam}</p>
                </div>
              <p className='time'>{game.time}</p>
              </div>
          </div>
        ))}
      </div>
    
    )
}

export default Header
