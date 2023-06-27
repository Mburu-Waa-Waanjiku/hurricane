"use client"

import { useStateContext } from '@/Context/Statecontext'
import { BsFillChatLeftTextFill } from 'react-icons/bs'

export default function Chat() {

  const { openChat, handleChatopen, handleChatcleose } = useStateContext();

  return (
    <div className='px-4 py-2 flex justify-center rounded-full bg-black'>
      {openChat ? 
        <BsFillChatLeftTextFill onClick={handleChatcleose} className=' cursor-pointer text-2xl text-orange-600'/>:
        <BsFillChatLeftTextFill onClick={handleChatopen} className=' cursor-pointer text-2xl text-orange-600'/>
      }
    </div> 
  )
}
