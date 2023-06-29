"use client";

import { useState } from 'react'
import { SlMenu } from 'react-icons/sl'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { useStateContext } from '@/Context/Statecontext'
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {

  const { spashPage, openChat, handleChatopen, handleChatcleose } = useStateContext();

  const menu = ['Services', 'Pricing', 'Message'];
  const [openMenu, setMenu] = useState(true);

  return (
    <>
      {spashPage &&
        <div id="splasher" className='z-40 fixed flex justify-center items-center left-0 top-0 w-full h-screen bg-black'>
          <Image className='animate-pulse' style={{maxWidth: "20%", height:"auto"}} width={300} height={300} src='/h.png'/>
        </div>
      }
      <div className='flex mr-0 cursor-pointer sm:mr-1 sm:hidden self-center flex flex-grow text-sxl  justify-end '>
        {openMenu ? 
          <SlMenu onClick={()=>{ setMenu(false)}} /> :
          <SlMenu onClick={()=>{ setMenu(true)}} />
        }
      </div>
      <div className={ "z-20 block menuTransition overflow-x-hidden top-14 sm:hidden absolute  ".concat(openMenu ? "left-0" : "left-full") }>
        <div className='flex-grow bg-black flex justify-around py-2'>
          {menu.map((item) => (
            <Link href={`#${item}`}>
              <div className='text-white cursor-pointer flex text-base' >
                {item != 'Message' && <>{item}</>}
                {item == 'Message' && <div onClick={openChat ? handleChatcleose : handleChatopen}>{item}</div>}
                {item == 'Message' && <BsFillChatLeftTextFill className='menuMessageTransform cursor-pointer text-xl ml-2 text-orange-600'/>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
