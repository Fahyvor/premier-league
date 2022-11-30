import React from 'react'
import { HeadContainer, MainLogo, CountryLogo, HeadLogo,
            Text, LogoItems,
            HeadItems} from './HeaderStyles.js';
import education from '../../assets/education.png';
import uk from '../../assets/uk.png';

const Header = () => {
  return (
    <HeadContainer>
        <MainLogo>
         <CountryLogo src={ uk } />
         <Text>ENGLISH</Text>
         </MainLogo>
         <LogoItems>
        <HeadLogo src={ education } />
        <HeadItems>
            <h5>SEARCH PROGRAMS</h5>
            <h5>GLOBAL STUDY ABROAD FAIR</h5>
            <h5>CHAT WITH STUDENTS</h5>
            <h5>SCHOLARSHIPS</h5>
            <h5>BLOG</h5>
            <h5>RESOURCES</h5>
            <h5>ABOUT US</h5>
        </HeadItems>
        </LogoItems>
    </HeadContainer>
  )
}

export default Header