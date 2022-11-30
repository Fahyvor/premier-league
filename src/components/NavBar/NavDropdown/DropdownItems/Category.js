import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai'
import { CatItems } from './CategoryStyles'

const Category = () => {
    const [state, setState] = useState(false);
    const showDropdown=()=>{
        setState(true);

    }
    const hideDropdown=()=>{
        setState(false);
    }
  return (
    <>
        <Category onClick={showDropdown} onMouseLeave={hideDropdown}>
            <h3>CATEGORY</h3>
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
    </>
  )
}

export default Category