import Image from "next/image"

export default function Ccard() {
  return (
    <div className="grid  mt-10 sm:mt-0 grid-cols-1 sm:grid-cols-2">
      <div className="rounded-3xl self-center h-fit bg-white">
        <Image src="/templates.png" width={800} height={800}/>
      </div>
      <div className="widthFit  overflow-hidden">
        <Image className="translate-x-4" src="/pattch.png" width={800} height={800}/>
      </div>
    </div>
  )
}
