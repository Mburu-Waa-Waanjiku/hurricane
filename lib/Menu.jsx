"use client";

import { useState } from 'react'
import { SlMenu } from 'react-icons/sl'
import { BsFillChatLeftTextFill } from 'react-icons/bs'

export default function Menu() {
    
  const menu = ['Services', 'Pricing', 'Message'];
  const [openMenu, setMenu] = useState(true);

  return (
    <>
      <div className='flex mr-0 cursor-pointer sm:mr-1 sm:hidden self-center flex flex-grow text-sxl  justify-end '>
        {openMenu ? 
          <SlMenu onClick={()=>{ setMenu(false)}} /> :
          <SlMenu onClick={()=>{ setMenu(true)}} />
        }
      </div>
      <div className={ "z-20 block menuTransition overflow-x-hidden top-14 sm:hidden absolute  ".concat(openMenu ? "left-0" : "left-full") }>
        <div className='flex-grow bg-black flex justify-around py-2'>
          {menu.map((item) => (
            <div className='text-white cursor-pointer flex text-base'>
              {item}
              {item == 'Message' && <BsFillChatLeftTextFill className='menuMessageTransform cursor-pointer text-xl ml-2 text-orange-600'/>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
