import Image from "next/image"

export default function Acard() {
  return (
    <div style={{background: '#fffae6'}} className='block sm:hidden rounded-2xl overflow-hidden flex flex-col justify-center bg-white'>
      <h1 className='z-10 text-center px-2 pb-2 heddingBgsm text-2xl sm:text-3xl '>
        <span className='mr-3'>W<span className='text-xl sm:text-2xl'>elcome</span></span> 
        <span className='mr-3'>t<span className='text-xl sm:text-2xl'>o</span></span> 
        <span>H<span className='text-xl sm:text-2xl'>urricane</span></span>
      </h1>
      <Image className="transformImg" width={512} height={376} src='/interiorDecortemp.jpg'/>
      <div className='z-10 px-2 pb-2 pt-3 contentBgsm text-gray-60 text-center'>
        Get to be among the people who will pride themselves in being the trend makers in the digital revolution in Africa.
      </div>
    </div>
  )
}
