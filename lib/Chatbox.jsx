"use client"

import { useStateContext } from '@/Context/Statecontext'

export default function Chatbox() {

  const { openChat, handleChatopen, handleChatcleose } = useStateContext();

  return (
    <div>
      {openChat &&
        <div className="fixed rounded-3xl z-20 chatboxsize overflow-hidden bg-white m-0 xsm:m-8 bottom-0 right-0">
          <div className="text-base bg-black flex justify-between text-white px-6 py-2">
            <div>Chat with Us</div>
            <div onClick={handleChatcleose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <input placeholder="Name" className="m-2" type="text"></input>
            <input  placeholder="Email" className="m-2" type="text"></input>
            <textarea style={{borderBottom: '1px'}} className="m-2" placeholder="Talk to us" name="Text1" cols="40" rows="5"></textarea>
          </div>
          <div className='bg-black absolute bottom-0 mb-4 mr-4 right-0 rounded-full py-2 px-6 text-base text-white'>
            SEND
          </div>
        </div>
      }
    </div>
  )
}
