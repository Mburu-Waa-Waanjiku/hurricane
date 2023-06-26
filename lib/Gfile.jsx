import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

export default function Gfile() {
  return (
    <div className="w-full sm:flex justify-center">
      <div className="rounded-3xl w-full p-8 bg-black text-white text-xl flex flex-col justify-center items-center overflow-hidden">
        <div className='flex mb-4'>
        <span><BsFillChatLeftTextFill className=' cursor-pointer block sm:hidden text-4xl ml-2 text-orange-600 mr-2'/> </span><span>Chat us </span><span><BsFillChatLeftTextFill className=' cursor-pointer hidden sm:block text-4xl ml-2 text-orange-600 mr-2'/> </span><span className='hidden sm:block'> for personalized price quotation</span>
        </div>
        <div className='flex items-center mb-4'>
           <span><IoIosCall className='rotate-90 cursor-pointer text-4xl text-orange-600 mr-1'/> </span><span> +254-704 065 652 </span>
        </div>
        <div className='flex items-center mb-4'>
           <span><BsFillEnvelopeFill className='cursor-pointer text-4xl mr-2 text-orange-600 mr-1'/> </span><span> info.hurricanetech@gmail.com</span>
        </div>
        <div className='flex'>
          <span>Chat us </span><span><BsWhatsapp className='cursor-pointer text-4xl ml-2 text-orange-600 mr-1'/> </span><span> on Whatsapp </span>
        </div>
      </div>
    </div>
  )
}
