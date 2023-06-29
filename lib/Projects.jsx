"use client"

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {

  const recentPs = [
    {
      image: "/shiglamweb.png",
      name: "SHIGLAM",
      type: "e-commerce",
      url: "https://www.shiglam.com"
    }
  ]

  return (
    <div className="flex flex-col items-center w-full mt-10 justify-center">
      <div className="text-4xl mb-4">
        Recent Projects
      </div>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          }, 
          520: {
            slidesPerView: 3,
          }, 
          850: {
            slidesPerView: 4,
          },            
        }}
        effect={"coverflow"}
        grabCursor={true}
        style={{width: "100%"}}
        spaceBetween={10}
        modules={[Pagination, Autoplay,]}
        pagination={false}
        loop={false}
      >
        {recentPs.map((items) => (
          <SwiperSlide>
            <Link href={items.url}>
              <div className="w-full">
                <Image className="rounded-2xl" src={items.image} width={1366} height={768} alt=""/>
                <div className="text-2xl flex flex-col items-center w-full">
                  <div className="text-gray-700">
                    {items.name}
                  </div>
                  <div className="text-gray-700 text-xl">
                    {items.type}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
