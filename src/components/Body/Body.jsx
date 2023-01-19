import React from 'react'
import './index.css'
import Premier from '../../assets/Premier.png'
import Manunited from '../../assets/Manchester-united.png'
import AFC from '../../assets/AFC.png'
import Queen from '../../assets/Queen.png'
import WHU from '../../assets/West-ham.png'
import LED from '../../assets/Leeds.png'
import { MdOutlineLibraryBooks } from 'react-icons/md'

const Body = () => {
  return (
    <div className='body'>
      <div className='leftside'>
        <div className='block'> 
        <div className='empty-gradient' />
          <h5>Group stage</h5>
          <h3>UEFA Europa League</h3>
          <h5>All times shown are your local time</h5>
          <h3> Thursday 15 September</h3>
          <div className='fixtures'>
            <h3>AFC <img className='afcc' src={AFC} /> <span className='time'>17:45</span>
            <img className="manunited" src={Manunited} />MUN</h3>
          </div>
          </div>

          <div className='block'>
          <div className='empty-gradient' />
          <h5>Group stage</h5>
          <h3>UEFA Europa Conference League</h3>
          <h5>All times shown are your local time</h5>
          <h3> Thursday 15 September</h3>
          <div className='fixtures'>
            <h3>SIL <img src={LED} className='led'/>
              <span className='time'>20:00</span>
              <img src={WHU} className='whu'/> WHU</h3>
          </div>
          </div>

        <div className='block'>
        <div className='empty-gradient' />
          <h5>Matchweek 8</h5>
          <h3>Premier  <img className='logo' src={Premier} /> League</h3>
          <h5>All times shown are your local time</h5>
          <h3> Thursday 15 September</h3>
        </div>
      </div>
      <div className='center'>
          <img className='queen' src={Queen}  size={70}/>
      </div>
      <div className='rightside'>
        <div className='news'>
        <h5><i>News</i></h5>
        </div>
        <div className='righthead'>
          <div className='rightgradient' />
        <h2 className='club'>
          Club and fans to pay tribute to Queen Elizabeth II
        </h2>
        <p className='honour'>
          Premier League fixtures this weekend will honour the 70-year
          reign of Her Majesty
        </p>
        <h4>Related Content</h4>
        <div className='sidelinks'>
          <div className='sidelinkicons'>
          <MdOutlineLibraryBooks />
          </div>
          <a href='' className='sidelink'>
            <p>Clubs remember Her Majesty The Queen</p>
          </a>
        </div>

        <div className='sidelinks'>
          <div className='sidelinkicons'>
          <MdOutlineLibraryBooks />
          </div>
          <a href='' className='sidelink'>
            <p>Premier League statement</p>
          </a>
        </div>

        <div className='sidelinks'>
          <div className='sidelinkicons'>
          <MdOutlineLibraryBooks />
          </div>
          <a href='' className='sidelink'>
            <p>Premier League mourns Queen Elizabeth II's passing</p>
          </a>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default Body