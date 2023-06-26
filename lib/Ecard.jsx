"use client";

import Image from "next/image"
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { TbArrowBigRightFilled } from 'react-icons/tb';
import { BsDot } from 'react-icons/bs';

// import required modules
import { FreeMode, Navigation, Autoplay, Thumbs } from "swiper";

export default function Ecard() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="grid gap-4 mb-12 grid-cols-1 sm:grid-cols-9">
        <div className="hidden sm:block col-start-1 p-3 col-span-3">
          <div className="rounded-3xl p-6 mytransparentbg overflow-hidden">
            <div className="px-4 text-center mb-4 text-2xl">
              Our Services
            </div>
            <Swiper
              slidesPerView="4"
              mousewheel={true}
              direction="vertical"
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              autoplay={true}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbsTemp text-base"
            >
              <SwiperSlide>
                <div className="cursor-pointer rounded-3xl mytransparentbg flex text-center justify-center h-full items-center">
                  <div className=" self-center">
                    1. Web design, devlopment and web mintenance
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer  rounded-3xl mytransparentbg  flex text-center justify-center h-full items-center">
                  <div className=" self-center">
                    2. Mobile development for Native apps 
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer rounded-3xl mytransparentbg  flex text-center justify-center h-full items-center">
                  <div className="  self-center">
                    3. Online & on-ground Marketing
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cursor-pointer rounded-3xl mytransparentbg  flex text-center justify-center h-full items-center">
                  <div className=" self-center">
                    4. Advertisements
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hidden sm:block col-start-4 self-center p-3 col-span-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            autoplay={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper rounded-3xl overflow-hidden"
           >
            <SwiperSlide>
              <div className="z-10 flex flex-col max-w-xs justify-center m-4 rounded-2xl absolute p-3 h-fit mytranslucentbg">
                <div className="text-xl text-center p-2 sm:p-4 text-orange-600">
                  Web design, devlopment and <br/> web mintenance
                </div>
                <div className="text-center">
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> You get the best website layout from our well experienced UI/UX designers </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> We also get to devlop and advice on the best hosting services and practices</p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> And give you the best service in maintenance and scaling your online business</p>
                  <p className="p-3 text-orange-600 flex"> We ensure you get value for your investmant </p>
                </div>
              </div>
              <div className="bg-orange-300 w-full h-full flex items-center">
                <video width="1919" height="748" loop autoPlay muted>
                  <source src="/furniture-web-design.mp4"></source>
                  <source src="movie.ogg" type="video/ogg"></source>
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="z-10 flex flex-col max-w-xs justify-center m-4 rounded-2xl absolute p-3 h-fit mytranslucentbg">
                <div className="text-xl text-center p-2 sm:p-4 text-orange-600">
                  Mobile development for Native apps
                </div>
                <div className="text-center">
                  <p>Average time spent by a person on their handsets is atleast 4 Hours in a day. Imagine the opportunity..<br/> We offer mobile application development for </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> Android devices </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> IOS devices </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> As well as cross platform applications</p>
                  <p className="p-3 text-orange-600 flex"> We ensure you get value for your investmant </p>
                </div>
              </div>
              <img className="h-full mlg:h-auto" src="/furniture-mobile-ap.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="z-10 flex flex-col max-w-sm justify-center m-4 rounded-2xl absolute p-3 h-fit mytranslucentbg">
                <div className="text-xl text-center p-2 sm:p-4 text-orange-600">
                  Online & on-ground Marketing
                </div>
                <div className="text-center">
                  <p><span className="text-sm text-orange-600">" Google gets 2.5 trillion searches per year, 2.9 Billion people use Facebook, Instagram has 2.4, Twitter with 0.6 billion not mention many more online avenues "</span><br/> We offer the opportunity for your business to have a higher reach through  </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> Higher Google ranking through our SEO Expertese  </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> Get your product a one on one marketing using our wide connection to Influencers and popular Websites </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> And lastly, we offer social midea management services</p>
                  <p className="p-3 text-orange-600 flex"> We Always ensure you get value for your investmant </p>
                </div>
              </div>
              <img className="h-full xl:h-auto" src="digital marketing.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="z-10 flex flex-col max-w-sm justify-center m-4 rounded-2xl absolute p-3 h-fit mytranslucentbg">
                <div className="text-xl text-center p-2 sm:p-4 text-orange-600">
                  Advertisements
                </div>
                <div className="text-center">
                  <p>Got a new product or a product you want to push to the market ?<br/> We got you ! We offer </p>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/>All advertising resources like </p>
                  <div className=" ml-4 text-orange-600">
                    <p className="flex gap-4 mb-2">
                      <span className="flex"><BsDot className="text-2xl text-black"/>Video Adverts & Banner designs</span>
                    </p>
                    <p className="flex gap-4 mb-2">
                      <span className="flex"><BsDot className="text-2xl text-black"/>Cards, Posters & Logo Designs</span>
                    </p>
                    <p className="flex gap-4 mb-2">
                      <span className="flex"><BsDot className="text-2xl text-black"/>Flyers and brochures Designs</span>
                    </p>
                  </div>
                  <p className="p-1 flex"><TbArrowBigRightFilled className=" text-orange-600 mt-1 w-8"/> We also offer consultancy on various social advertisement plans eg facebook adds, instacram, google adds e.t.c</p>
                  <p className="p-3 justify-center text-orange-600 flex"> We Always ensure you get value for your investmant </p>
                </div>
              </div>
              <img style={{height: '100%'}} src="advertisement-resources.webp" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
