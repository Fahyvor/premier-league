import {useState, React} from 'react'
import { NavContainer, NavSearch, NavBtn, ProgramLevel, Location,
Delivery, NavDrop, CatItems, NavSearchContainer, ProgItems, Category, LocationItems,
MobileNav, MobileLogo, MobileName, LogoImage, MobileNavItems, NavMobile,
DropNavItems, NavList, NavCategory
 } from './NavBarStyles'
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import Manchester from '../../assets/manchester-logo.png'

const NavBar = () => {
    const [state, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [location, setLocation] = useState(false);
    const [mobile, setMobile] = useState(false);
    const showCategory=()=>{
        setState(true);
    }
    const hideCategory=()=>{
        setState(false);
    }

    const showDropdown=()=>{
        setDropdown(true);
    }
    const hideDropdown=()=>{
        setDropdown(false);
    }

    const showLocation=()=>{
        setLocation(true);
    }
    const hideLocation=()=>{
        setLocation(false);
    }
    // ==================== MOBILE DROP DOWN FUNCTIONS ========================
    const showMobile=()=>{
        setMobile(true);
    }
    const hideMobile=()=>{
        setMobile(false);
    }

  return (
    <>
    <NavContainer>
        <NavDrop>
        <Category onClick={showCategory} onMouseLeave={hideCategory}>
            <h4>CATEGORY</h4>
            <AiFillCaretDown />
            {state ?(  <CatItems>
        <a href='/'>SCIENCE</a>
        <a href='/'>ARTS</a>
        <a href='/'>VOCATIONAL</a>
        <a href='/'>MUSIC</a>
        </CatItems>
            ):

             null}
        </Category> 
        <ProgramLevel onClick={showDropdown} onMouseLeave={hideDropdown}>
            <h4>PROGRAM LEVEL</h4>
            <AiFillCaretDown />
            {dropdown ?(
                <ProgItems>
                    <a href='/'>Pre-Undergraduate</a>
                    <a href='/'>Undergraduate</a>
                    <a href='/'>Masters</a>
                    <a href='/'>Doctorate</a>
                </ProgItems>
            ): null}
        </ProgramLevel>
        <Location onClick={showLocation} onMouseLeave={hideLocation}>
            <h4>LOCATION</h4>
            <AiFillCaretDown />
            {location ?(
                <LocationItems>
                    <a href='/'>MAIN CAMPUS</a>
                    <a href='/'>OTHER CAMPUSES</a>
                </LocationItems>
            ): null}
        </Location>
        <Delivery>
            <h4>DELIVERY</h4>
            <AiFillCaretDown />
        </Delivery>
        </NavDrop>
        <NavSearchContainer>
        <NavSearch>
            
        </NavSearch>
        </NavSearchContainer>
        <NavBtn>
            SEARCH
        </NavBtn>
        </NavContainer>
        {/* =================== END OF DESKTOP NAV MENU ============== */}
        <MobileNav>
            <MobileLogo>
                <LogoImage src={Manchester}/>
                <MobileName>The University of Manchester</MobileName>
            </MobileLogo>
            <MobileNavItems>
            <AiOutlineSearch size={50}/>
            <NavMobile onClick={showMobile} onMouseLeave={hideMobile}>
            <GoThreeBars size={50} />
                    {mobile ?( 
                        <DropNavItems>
                        <NavList>
                            <a>CATEGORY</a>
                        </NavList>
                        <NavList>
                        <a>PROGRAM LEVEL</a>
                        </NavList>
                        <NavList>
                        <a>LOCATION</a>
                        </NavList>
                        <NavList>
                        <a>DELIVERY</a>
                        </NavList>
                        </DropNavItems>
            ):

             null}
             
            </NavMobile>
            </MobileNavItems>
            
        </MobileNav>
    </>
  )
}

export default NavBar;