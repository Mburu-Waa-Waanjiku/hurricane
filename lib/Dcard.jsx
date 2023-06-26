"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Dcard() {

  const websites = [
    {
      name: "Consultancy",
      Image:[{img:'/consultancytemp.jpg', img2:'/consultancy.png', width:'2080', height:'1390'}]
    },
    {
      name: "Restaurant",
      Image:[{img: '/reasturanttemp.jpg', img2: '/restaurant.png', width:'2080', height:'1390'}],
    },
    {
      name: "Furniture shop",
      Image:[{img:'/furnituretemp (2).jpg', img2:'/furniture.png', width:'2080', height:'1390'}]
    },
    {
      name: "Online Supermarket",
      Image:[{img: '/supermarket2.jpg', img2: '/supermarket.png', width:'2080', height:'1390'}],
    },
    {
      name: "Interior Design",
      Image:[{img:'/furnituretemp2.jpg', img2:'/furnituretemp2.png', width:'2080', height:'1390'}]
    },
    {
      name: "Church",
      Image:[{img:'/churchmain.png', img2:'/churchmain2.png', width:'2080', height:'1390'}]
    },
    {
      name: "Blog",
      Image:[{img:'/blog.jpg', img2:'/blog.png', width:'2080', height:'1390'}]
    },
  ]

  return (
    <div className="pt-4 mb-6 grid-cols-1 sm:grid-cols-12 grid">
      <div className="col-start-1 sm:col-start-2 sm:col-span-10">
        <div className="text-orange-600 text-3xl sm:text-5xl text-center">
          <div className="my-6 ">Let Us get Your IDEA Online</div>
          <div className="mt-4 ideasHeight mytransparentbg rounded-3xl overflow-hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Pagination, Autoplay,]}
              pagination={false}
              loop={true}
              autoplay={true}
            >
              {websites.map((idea) => {
                return (
                  <SwiperSlide key={idea}>
                    <div className="flex flex-col justify-center">
                      <div className="text-black m-4 text-2xl">
                        <div className="xsm:hidden">{idea.name}</div>
                      </div>
                      <div className="hidden xsm:flex w-full justify-center flex-wrap items-center h-full overflow-hidden">
                        {idea.Image.map((imgdata) =><Image  src={imgdata.img2} width={imgdata.width} height={imgdata.height} alt=""/>)}
                      </div>
                      <div className="flex xsm:hidden w-full justify-center flex-wrap items-center h-full overflow-hidden">
                        {idea.Image.map((imgdata) =><Image  src={imgdata.img} width={imgdata.width} height={imgdata.height} alt=""/>)}
                      </div>
                      <div style={{transform: 'translateY(-20%)'}} className={"absolute flex-col animate-bounce items-center hidden xsm:flex ".concat(idea.name == "Church" ? "left-28" :idea.name == "Blog" ? "left-28" : "right-28")}>
                        <div className=" w-44 h-44 flex justify-center items-center bg-gray-900 rounded-full">
                          {idea.name}
                        </div>
                        <div style={{transform: 'translateY(-10px)'}} className="triangle-down "></div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}