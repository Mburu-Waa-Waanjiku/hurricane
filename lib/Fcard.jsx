import Image from "next/image";
import { BsFillCheckCircleFill, BsArrowRightShort } from "react-icons/bs"

export default function Fcard() {
  return (
    <div id="Pricing" className="my-14 flex w-full flex-col justify-center items-center">
      <div className="text-4xl mb-5 "> Pricing </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full p-0.5 sm:p-4 sm:gap-2 md:p-8 mb:gap-5 mytransparentbg rounded-3xl ">
        {/* Web design Packages */}
        <div style={{minWidth: '250px', maxWidth: '800px'}} className="flex-col flex flex-grow items-center p-4">
          <div className="w-full text-orange-600 mb-3 text-center text-3xl">
            Web Design
          </div>
          {/* Simple Package */}
          <div className="w-full bg-white py-5 mb-4 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Mobile Development </div>
            <div className="text-xl pb-2">
              100k +
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                We do Android Development
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                IOS app are also developed
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                One can also opt for cross platform apps
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Simple Package */}
          <div className="w-full bg-white py-5 mb-4 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Simple </div>
            <div className="text-xl pb-2">
              10K - 20K
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For simple sites 
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Portfolio websites
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Simple Package */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Small </div>
            <div className="text-xl pb-2">
              20K - 40K
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For small businesses 
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For Startups
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Pro Package */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Pro </div>
            <div className="text-xl pb-2">
              50K - 90K
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For Corprate 
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Good for Law Firms
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Online Duka Package */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Online Duka </div>
            <div className="text-xl pb-2">
              50K - 90K
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For Small shops venturing to online market
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Good for starting businesses
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Online Duka Package */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Enterprise </div>
            <div className="text-xl pb-2">
              100K +
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For Medium Sized companies
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Viable for established businesses
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
        </div>
        {/* Online Marketing Packages */}
        <div style={{minWidth: '250px', maxWidth: '800px'}} className="flex-col flex flex-grow items-center p-4">
          <div className="w-full text-orange-600 mb-3 text-center text-3xl">
            Online Marketing
          </div>
          {/* Advertisement Resources Package */}
          <div className="w-full bg-white py-5 mb-4 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Advertisement Resources </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Logo design
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Video Adverts
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Business Cards Designs
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Posters
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Banners
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Flyer & brochure designs
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>Detailed Quotation</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Increased Traffic Package */}
          <div className="w-full bg-white py-5 mb-4 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Increased Traffic </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                SEO
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Pay Per Click
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Social Midea Marketing
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Site Conversion Package */}
          <div className="w-full bg-white py-5 mb-4 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Site Conversion </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Optimizing Landing Pages 
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Redesigning Landing Pages
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Brand Awareness */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Brand Awareness </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Social Midea Marketing 
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Influencer Partnership
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Content Marketing
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Data Analisis */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Data Analisis </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Business Intelligence Insights
              </div>
            </div>
          </div>
          {/* Ongoing Support */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Ongoing Support </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Site Maintenance
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Web SEO
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Scaling & updating your Site
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
          {/* Online Duka Package */}
          <div className="w-full bg-white mb-4 py-5 px-7 rounded-3xl">
            <div className="text-2xl pb-1"> Enterprise </div>
            <div className="text-xl pb-2">
              100K +
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                For Medium Sized companies
              </div>
            </div>
            <div className="text-base flex items-center gap-2">
              <BsFillCheckCircleFill/>
              <div className="text-orange-600">
                Viable for established businesses
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full text-center myButtonstyle rounded-xl py-2 px-6">
              <div>View Spects</div>
              <div><BsArrowRightShort className="text-3xl"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
