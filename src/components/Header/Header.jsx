import React from 'react'
import './index.css'
import Bournemouth  from '../../assets/AFC.png';
import Brentford from '../../assets/Brentford.png';
import Brighton from '../../assets/Brighton.png';
import Chelsea from '../../assets/Chelsea.png';
import Crystal from '../../assets/Crystal-palace.png';
import Everton from '../../assets/Everton.png';
import Fulham from '../../assets/Fulham.png';
import Leeds from '../../assets/Leeds.png';
import Liverpool from '../../assets/Liverpool.png';
import Mancity from '../../assets/Manchester-city.png';
import Manunited from '../../assets/Manchester-united.png';
import Tottenham from '../../assets/Tottenham.png';
import Westbrom from '../../assets/West-brom.png';
import Westham from '../../assets/West-ham.png';
import Wolverhampton from '../../assets/Wolverhampton.png';

const Header = () => {
  return (
    <div className='head'>
        <h3 className='clubsite'>CLUB SITES</h3>
        <img src={ Bournemouth }
        alt={'AFCBourneouth'}
        className='afc' />
        <img src={ Brentford }
        alt={'Brentford'}
        className='brentford' />
        <img src={ Brighton }
        alt={'Brighton'}
        className='Brighton' />
        <img src={ Chelsea }
        alt={'Chelsea'}
        className='chelsea' />
        <img src={ Crystal }
        alt={'crystal'}
        className='crystal' />
        <img src={ Everton }
        alt={'Everton'}
        className='everton' />
        <img src={ Fulham }
        alt={'Fulham'}
        className='fulham' />
        <img src={ Leeds }
        alt={'Leeds'}
        className='leeds' />
        <img src={ Liverpool }
        alt={'Liverpool'}
        className='liverpool' />
        <img src={ Mancity }
        alt={'Mancity'}
        className='mancity' />
        <img src={ Manunited }
        alt={'Manunited'}
        className='manu' />
        <img src={ Tottenham }
        alt={'Tottenham'}
        className='tottenham' />
        <img src={ Westbrom }
        alt={'westbrom '}
        className='westbrom' />
        <img src={ Westham }
        alt={'Westham'}
        className='westham' />
        <img src={ Wolverhampton }
        alt={'Wolverhampton'}
        className='wolverhampton' />
    </div>
  )
}

export default Header