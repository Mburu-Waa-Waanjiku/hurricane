import Image from "next/image"

export default function Bfile() {
  return (
    <div className="hidden sm:flex justify-center">
      <div className="rounded-3xl flex overflow-hidden">
        <div style={{background: '#fffae6'}} className="ImgMinW">
          <Image className="transformImg" width={512} height={376} src='/interiorDecortemp.jpg'/>
        </div>
        <div className="flex flex-col bg-white justify-center">
          <h1 className='z-10 text-center px-2 pb-2 text-2xl sm:text-3xl '>
            <span className='mr-3'>W<span className='text-xl sm:text-2xl'>elcome</span></span> 
            <span className='mr-3'>t<span className='text-xl sm:text-2xl'>o</span></span> 
            <span>H<span className='text-xl sm:text-2xl'>urricane</span></span>
          </h1>
          <p className='z-10 px-10 pb-2 pt-10 text-gray-60 text-center'>
            Get to be among the people who will pride themselves in being the trend makers in the digital revolution in Africa.
          </p>
        </div>
      </div>
    </div>
  )
}
