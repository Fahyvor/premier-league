import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { School, OffSetContainer} from '../NavBar/NavOffSetStyles'

const NavOffSet = () => {
  return (
    <OffSetContainer>
      <AiOutlineHome size={25}/>
        <School>|   Schools</School>
        </OffSetContainer>
  )
}

export default NavOffSet