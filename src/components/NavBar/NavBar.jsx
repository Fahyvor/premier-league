import React from 'react'
import './index.css'
import Premier from '../../assets/Premier.png'
import { AiOutlineCaretDown, AiOutlineSearch } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='Nav'>
      <div className='mainlogo'>
        <img src={Premier} className='premier' />
        </div>
        <div className='fullnav'>
        <div className='navupper'>
          <div className='premierleague'>
            <h4>Premier League</h4>
              <AiOutlineCaretDown />
            </div>
            <div className='fantasy'>
            <h4>Fantasy</h4>
              <AiOutlineCaretDown />
            </div>
            <div className='video'>
            <h4>Video</h4>
            </div>
            <div className='communities'>
            <h4>Communities</h4>
              <AiOutlineCaretDown />
            </div>
            <div className='more'>
            <h4>More</h4>
              <AiOutlineCaretDown />
            </div>
            <div className='right'>
            <div className='rightbox'>
              <h4>No Room For Racism</h4>
              <h4>Sign in</h4>
              </div>
            <AiOutlineSearch size={30}/>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default NavBar