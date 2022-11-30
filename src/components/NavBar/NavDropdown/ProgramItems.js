import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'
import { ProgramLevel, ProgItems } from '../NavBarStyles';

const ProgramItems = () => {
    const [state, setState] = useState(false);
    const showDropdown=()=>{
        setState(true);
    }
    const hideDropdown=()=>{
        setState(false);
    }
  return (
    <>
        <ProgramLevel onClick={showDropdown} onMouseLeave={hideDropdown}>
            <h3>PROGRAM LEVEL</h3>
            <AiFillCaretDown />
            {state ?(
                <ProgItems>
                    <a href='/'>Pre-Undergraduate</a>
                    <a href='/'>Undergraduate</a>
                    <a href='/'>Masters</a>
                    <a href='/'>Doctorate</a>
                </ProgItems>
            ): null}
        </ProgramLevel>
    </>
  )
}

export default ProgramItems