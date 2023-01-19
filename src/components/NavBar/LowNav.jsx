import React from 'react'
import './index.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

const LowNav = () => {
  return (
    <div>
        <div className='lownav'>
            <a href='/'>
                <h5>Home</h5>
            </a>
          
            <a href='/fixtures'>
                <h5>Fixtures</h5>
            </a>
          
            <a href='/results'>
                <h5>Results</h5>
            </a>
          
            <a href='/tables'>
                <h5>Tables</h5>
            </a>
          
            <a href='/pl30'>
                <h5>PL30</h5>
            </a>
          
            <a href='/awards'>
                <h5>Awards</h5>
            </a>
          
            <a href='/halloffame'>
                <h5>Hall of Fame</h5>
            </a>
          
            <a href='/broadcast'>
                <h5>Broadcast</h5>
            </a>
          
            <a href='/tickets'>
                <h5>Tickets</h5>
            </a>
          
            <a href='/clubs'>
                <h5>Clubs</h5>
            </a>
          
            <a href='/players'>
                <h5>Players</h5>
            </a>
          <div className='low-nav-more'>
            <BsThreeDotsVertical size={25}/>
            <h5>More</h5>
          </div>
          </div>
    </div>
  )
}

export default LowNav