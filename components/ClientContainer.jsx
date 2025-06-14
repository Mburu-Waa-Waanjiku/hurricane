"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Palette,
  RefreshCcw,
  Building2,
  Building,
  Globe,
  PlaneLanding,
  GraduationCap,
  FileText,
  Users,
  Store,
  ShoppingCart,
  BarChart3,
  Share2,
  Sparkles,
  Paintbrush,
  LineChart,
  PlusCircleIcon,
} from "lucide-react"
import Popup from "./Popup"

function ClientContainer() {
  const videoRef = useRef(null)
  const firstNoteRef = useRef(null)
  const secondNoteRef = useRef(null)
  const secondSectionRef = useRef(null)
  const [opacity, setOpacity] = useState(0)
  const [titleVisible, setTitleVisible] = useState(false)
  const [notesVisible, setNotesVisible] = useState(false)
  const [thirdSectionVisible, setThirdSectionVisible] = useState(false)
  const [fourthSectionVisible, setFourthSectionVisible] = useState(false)
  const [fifthSectionVisible, setFifthSectionVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [sixthSectionVisible, setSixthSectionVisible] = useState(false)
  const [sixthSectionScrolled, setSixthSectionScrolled] = useState(false)
  const [sixthSectionTitleFullyVisible, setSixthSectionTitleFullyVisible] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Services data with actual icon components
  const services = [
    {
      name: "UI/UX Design",
      icon: Palette,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Website Redesign",
      icon: RefreshCcw,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Business Websites",
      icon: Building2,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Corporate Websites",
      icon: Building,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Single Page Websites",
      icon: Globe,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Landing Pages",
      icon: PlaneLanding,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Online Courses",
      icon: GraduationCap,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    { name: "Blogs", icon: FileText, link: "/services/get-a-website-from-the-best-web-designers-in-kenya-nairobi" },
    {
      name: "Membership Sites",
      icon: Users,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Rental E-commerce",
      icon: Store,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Custom E-commerce",
      icon: ShoppingCart,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    {
      name: "Online/Digital Marketing",
      icon: BarChart3,
      link: "/services/web-design/get-a-website-from-the-best-web-designers-in-kenya-nairobi",
    },
    { name: "Social Media Management", icon: Share2, link: "/" },
    { name: "Branding", icon: Sparkles, link: "/" },
    { name: "Graphic Design", icon: Paintbrush, link: "/" },
    { name: "Marketing Strategies", icon: LineChart, link: "/" },
  ]

  useEffect(() => {
    // Start video playback when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video autoplay prevented:", e))
    }

    // Animate title and notes on load
    setTimeout(() => setTitleVisible(true), 500)
    setTimeout(() => setNotesVisible(true), 1200)

    // Typing animation for the sticky notes
    const typeText = (element, text, speed = 50) => {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          if (element.current) {
            element.current.textContent += text.charAt(i)
            i++
          }
        } else {
          clearInterval(timer)
        }
      }, speed)
    }

    // Handle scroll for fade-in effect and typing animations
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section")
      if (secondSection) {
        const rect = secondSection.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // Calculate opacity based on scroll position
        // Start fading in when the section is 80% of the viewport height away
        const fadeStartPoint = viewportHeight * 0.8
        const fadeDistance = viewportHeight * 0.5 // Distance over which the fade happens

        if (rect.top < fadeStartPoint) {
          // Calculate opacity (0 to 1)
          const newOpacity = Math.min(1, (fadeStartPoint - rect.top) / fadeDistance)
          setOpacity(newOpacity)

          // Trigger typing animation when section becomes visible enough
          if (newOpacity > 0.5 && firstNoteRef.current && firstNoteRef.current.textContent === "") {
            typeText(firstNoteRef, "we are driven by solutions and innovation")

            // Start second note after a delay
            setTimeout(() => {
              if (secondNoteRef.current) {
                typeText(secondNoteRef, "efficiency and credibility is our language")
              }
            }, 1500)
          }
        } else {
          setOpacity(0)
        }
      }

      // Check if third section is visible
      const thirdSection = document.getElementById("third-section")
      if (thirdSection) {
        const rect = thirdSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setThirdSectionVisible(true)
        }
      }

      // Check if fourth section is visible
      const fourthSection = document.getElementById("fourth-section")
      if (fourthSection) {
        const rect = fourthSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setFourthSectionVisible(true)
        }
      }

      // Check if fifth section is visible
      const fifthSection = document.getElementById("fifth-section")
      if (fifthSection) {
        const rect = fifthSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setFifthSectionVisible(true)
        }
      }

      // Check if services section is visible
      const servicesSection = document.getElementById("services-section")
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setServicesVisible(true)
        }
      }

      // Check if sixth section is visible - improved detection
      const sixthSection = document.getElementById("sixth-section")
      if (sixthSection) {
        const rect = sixthSection.getBoundingClientRect()

        // Make detection more sensitive - trigger earlier
        if (rect.top < window.innerHeight * 0.9) {
          setSixthSectionVisible(true)

          // When section is fully in view, set title as fully visible after a delay
          if (rect.top < window.innerHeight * 0.6 && !sixthSectionTitleFullyVisible) {
            setTimeout(() => {
              setSixthSectionTitleFullyVisible(true)
            }, 2000) // 2 second delay for reading the title
          }

          // Check if user has scrolled further into the section
          // This will trigger the description to slide up and overlay the heading
          // Only allow this if the title has been fully visible for the delay period
          if (rect.top < window.innerHeight * 0.3 && sixthSectionTitleFullyVisible) {
            setSixthSectionScrolled(true)
          } else {
            setSixthSectionScrolled(false)
          }
        }
      }

      // Show popup only after scrolling down a certain amount (e.g., 300px)
      const scrollThreshold = 300
      if (!hasScrolled && window.scrollY > scrollThreshold) {
        setPopupVisible(true)
        setHasScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check in case we're already scrolled to the section
    handleScroll()

    // Force check visibility after a short delay to ensure elements are properly detected
    setTimeout(() => {
      handleScroll()
    }, 500)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe sticky notes for scroll animation
    const notes = document.querySelectorAll(".sticky-note")
    notes.forEach((note) => {
      observer.observe(note)
      note.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700")
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [sixthSectionTitleFullyVisible, hasScrolled])

  // Force sixth section visibility when component mounts
  useEffect(() => {
    // Set sixth section visible after a delay
    setTimeout(() => {
      setSixthSectionVisible(true)
    }, 1000)
  }, [])

  return (
    <>
      {/* {popupVisible && <Popup onClose={() => setPopupVisible(false)} />} */}
      {/* First section - sticky at the top */}
      <div className="sticky top-0 w-full h-screen dark:bg-black z-10">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/dxcu.png" alt="Developer workspace" fill className="object-cover dark:p-6 opacity-50" priority />
          {/* Dark overlay with matte finish */}
          <div
            className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-filter backdrop-blur-sm"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Logo container */}
        <div className="relative z-10 p-6">
          <Image src="/h.png" alt="Logo" width={50} height={50} className="object-contain animate-fadeIn" />
        </div>

        {/* Sticky note - top right */}
        <div
          className={`absolute scale-[0.9] sm:scale-100 lg:scale-110 top-8 right-8 z-20 w-40 h-40 bg-yellow-300 rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:rotate-3 transition-all duration-500 ${notesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-black text-2xl text-center font-bold transform -rotate-3">BEST DESIGNERS</p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute -bottom-16 -left-8 w-24 h-24 text-yellow-300 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M90,30 Q50,90 30,70 Q40,60 20,50 L10,60 L5,40 L25,35 L15,45 Q35,55 25,65 Q45,85 85,25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Sticky note - bottom left */}
        <div
          className={`absolute scale-[0.8] sm:scale-100 lg:scale-110 bottom-8 left-8 z-20 w-44 h-44 bg-blue-200 -rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:-rotate-3 transition-all duration-500 ${notesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-black text-2xl text-center font-bold transform rotate-3">BRING YOUR IDEA TO LIFE</p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute -top-16 -right-8 w-24 h-24 text-blue-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,70 Q50,10 70,30 Q60,40 80,50 L90,40 L95,60 L75,65 L85,55 Q65,45 75,35 Q55,15 15,75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading container */}
        <div className="absolute w-full h-full flex flex-col top-0 z-10 flex items-center justify-center px-4 pt-20 overflow-hidden">
          <h1
            className={`font-humane font-bold tracking-wide text-black/70 dark:text-white/60 text-center text-7xl sm:text-8xl lg:text-9xl leading-tight tracking-wide transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-left">
              WE
            </span>
            <span className="inline-block animate-slide-in-right">ARE NOT</span>
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-left">
              JUST
            </span>
            <br />
            <span className="inline-block animate-slide-in-bottom">ANOTHER WEB & DEV</span>
            <br />
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-top">
              COMPANY
            </span>
          </h1>
        </div>
      </div>

      {/* Third section - Our Latest Solutions */}
      <div id="third-section" className="relative w-full h-[80vh] bg-white dark:bg-black z-30">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/solutions-bg.jpg" alt="Solutions background" fill className="object-cover p-6 opacity-50" />
          {/* Dark overlay with matte finish */}
          <div
            className="absolute inset-0 dark:bg-black/60 backdrop-filter backdrop-blur-sm"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Sticky note - top left */}
        <div
          className={`absolute scale-[0.9] sm:scale-100 lg:scale-110 top-8 left-8 bg-green-600/10 dark:bg-transparent border border-green-600/40 dark:border-none z-20 w-40 h-40 rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:rotate-3 transition-all duration-500 ${thirdSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-green-600 dark:text-green-200 text-2xl text-center font-[100] transform ">WE DO BETTER THAN THE BEST</p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute -translate-x-8 -bottom-10 right-0 w-24 h-24 text-green-600 dark:text-green-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,30 Q50,90 70,70 Q60,60 80,50 L90,60 L95,40 L75,35 L85,45 Q65,55 75,65 Q55,85 15,25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Sticky note - bottom right */}
        <div
          className={`absolute scale-[0.8] sm:scale-100 lg:scale-110 bottom-8 bg-purple-600/10 dark:bg-transparent border border-purple-600/40 dark:border-none dark:bg-transparent right-8 z-20 w-44 h-44 -rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:-rotate-3 transition-all duration-500 ${thirdSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-purple-600 dark:text-purple-200 text-2xl text-center font-bold transform rotate-3">CUTTING-EDGE SOLUTIONS</p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute -top-16 -left-8 w-24 h-24 text-purple-600 dark:text-purple-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M90,70 Q50,10 30,30 Q40,40 20,50 L10,40 L5,60 L25,65 L15,55 Q35,45 25,35 Q45,15 85,75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading container */}
        <div className="absolute w-full h-full flex flex-col top-0 z-10 flex items-center justify-center px-4 pt-20 overflow-hidden">
          <h1
            className={`font-humane font-bold tracking-wide text-black/60 dark:text-white/60 text-center text-7xl sm:text-8xl lg:text-9xl leading-tight tracking-wide transition-all duration-1000 ${thirdSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-left">
              OUR
            </span>
            <span className="inline-block animate-slide-in-right">LATEST</span>
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-bottom">
              SOLUTIONS
            </span>
          </h1>
        </div>
      </div>

      {/* Fourth section - TukoSite Showcase */}
      <div id="fourth-section" className="relative w-full h-[140vh] bg-white dark:bg-black z-40 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/bg.jpg" alt="Background" fill className="object-cover opacity-40" />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-white/10 dark:bg-gradient-to-r dark:from-black dark:via-black/80 dark:to-black/40 dark:bg-gradient-to-r dark:from-black dark:via-black/80 dark:to-black/40" />
        </div>

        {/* TukoSite image with skewed appearance */}
        <div
          className={`absolute rounded-2xl ovrtflow-hidden max-h-[440px] right-0 top-1/3 -translate-y-1/2 w-2/3 h-3/5 z-10 overflow-hidden transition-all duration-1000 ${fourthSectionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          {/* Container with perspective for skew effect */}
          <div className="relative w-full h-full transform perspective-1000 overflow-hidden">
            {/* Skewed image container */}
            <div className="absolute inset-0 max-w-[700px]">
              <Image
                src="/tukosite.png"
                alt="TukoSite Platform"
                fill
                className="object-cover object-left-top"
                style={{
                  clipPath: "polygon(0 0, 100% 3%, 100% 97%, 0% 100%)",
                }}
              />
              {/* Reflection/glare effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 3%, 100% 97%, 0% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Overlaying card */}
        <div
          className={`absolute left-10 rotate-5 sm:left-20 md:left-32 top-1/3 -translate-y-1/2 z-20 w-[300px] sm:w-[400px] bg-white/10 backdrop-filter backdrop-blur-md rounded-xl p-8 shadow-2xl border border-black/20 dark:border-white/20 transform hover:scale-105 transition-all duration-1000 ${fourthSectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <div className="flex flex-col items-start">
            <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-4 animate-slide-in-left">TukoSite</h2>
            <div className="w-20 h-1 bg-primary mb-6 animate-slide-in-right"></div>
            <h3 className="dark:text-white text-xl sm:text-2xl font-medium mb-4 animate-slide-in-left">Marketplace</h3>
            <button className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-full font-medium transition-colors duration-300 flex items-center animate-slide-in-bottom">
              <Link href="https://www.tukosite.shop/" className="flex gap-3 items-center">
                VISIT TUKOSITE
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>

        {/* Description paragraph below the image and card */}
        <div
          className={`absolute bottom-20 left-0 right-0 z-30 px-8 sm:px-16 md:px-24 transition-all duration-1000 ${fourthSectionVisible ? "opacity-100 translate-y-4" : "opacity-0 translate-y-20"}`}
        >
          <div className="max-w-4xl mx-auto p-6 sm:p-8">
            <h4 className="font-humane dark:text-white text-4xl sm:text-5xl mb-4 animate-slide-in-left">TukoSite</h4>
            <div className="w-20 h-1 bg-primary mb-6 animate-slide-in-right"></div>
            <p className="text-black/80 dark:text-white/80 text-base sm:text-lg leading-relaxed font-light animate-slide-in-bottom">
              <span className="dark:text-white font-medium">TukoSite</span> is a marketplace that helps our
              <span className="font-medium text-primary"> Rent A Store Customers</span> to boost their sales and add more
              <span className="dark:text-white font-medium"> revenue</span> to their business. Our main aim as
              <span className="font-medium text-primary"> ecommerce solution service</span> is not only to charge for services but
              to also add
              <span className="dark:text-white font-medium"> value</span> to our entrepreneurs endevours.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute bottom-10 left-10 z-10 transition-all duration-1000 ${fourthSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex space-x-3">
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <div className="w-10 h-1 bg-white/50 rounded-full"></div>
            <div className="w-5 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Fifth section - Rent a Store Showcase */}
      <div id="fifth-section" className="relative w-full h-[160vh] bg-white dark:bg-black z-50 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/bg.jpg" alt="Background" fill className="object-cover opacity-40" />
          {/* Dark gradient overlay - reversed direction from fourth section */}
          <div className="absolute inset-0  bg-gradient-to-l from-white via-white/10 to-white/10 dark:bg-gradient-to-l dark:from-black dark:via-black/80 dark:to-black/40" />
        </div>

        {/* Stiky note */}
        <div
          className={`absolute scale-[0.8] sm:scale-100 lg:scale-110 top-0 right-8 z-20 w-44 h-44 -rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:-rotate-3 transition-all duration-500 ${thirdSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-purple-900 dark:text-purple-200 text-2xl text-center transform rotate-3">rent a store solution</p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute top-6 -left-20 w-24 h-24 text-purple-900 dark:text-purple-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M90,70 Q50,10 30,30 Q40,40 20,50 L10,40 L5,60 L25,65 L15,55 Q35,45 25,35 Q45,15 85,75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Rent a Store image with skewed appearance */}
        <div
          className={`absolute  max-h-[450px] left-0 top-1/3  -translate-y-1/2 w-2/3 h-3/5 z-10 transition-all duration-1000 ${fifthSectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          {/* Container with perspective for skew effect */}
          <div className="relative w-full  flex justify-end h-full transform perspective-1000 overflow-hidden">
            {/* Skewed image container - reversed from fourth section */}
            <div className="absolute rounded-2xl overflow-hidden max-w-[700px] ml-auto inset-0">
              <Image
                src="/rentastoreweb.png"
                alt="Rent a Store Platform"
                fill
                className="object-cover object-right-top "
                style={{
                  clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)",
                }}
              />
              {/* Reflection/glare effect */}
              <div
                className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 3%, 100% 97%, 0 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Overlaying card - positioned on the right instead of left */}
        <div
          className={`absolute right-10 -rotate-5 sm:right-20 md:right-32 top-1/3 -translate-y-1/2 z-20 w-[300px] sm:w-[400px]  rounded-xl  shadow-2xl  transform hover:scale-105 transition-all duration-1000 ${fifthSectionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          <Image
            src="/rentastoreapp.png"
            alt="Rent a Store App"
            width={300}
            height={600}
            className="w-full h-auto object-cover translate-x-12"
          />

          {/* Moving shopping cart animation */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 animate-cart-move">
            <svg
              className="w-12 h-12 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xs font-bold">3</span>
            </div>
          </div>

          {/* Tailwind CSS Configuration (add to tailwind.config.js) */}
          <style>
            {`
          @keyframes cart-move {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(60px); }
          }

          .animate-cart-move {
            animation: cart-move 1.5s ease-in-out infinite;
          }
          `}
          </style>
        </div>

        {/* Description paragraph below the image and card */}
        <div
          className={`absolute bottom-20 left-0 right-0 z-30 px-8 sm:px-16 md:px-24 transition-all duration-1000 ${fifthSectionVisible ? "opacity-100 translate-y-4" : "opacity-0 translate-y-20"}`}
        >
          <div className="max-w-4xl mx-auto p-6 sm:p-8">
            <h4 className="font-humane dark:text-white text-4xl sm:text-5xl mb-4 animate-slide-in-right">Rent a Store</h4>
            <div className="w-20 h-1 bg-primary mb-6 animate-slide-in-left"></div>
            <p className="text-dark/80 dark:text-white/80 text-base sm:text-lg leading-relaxed font-light animate-slide-in-bottom">
              For as <span className="dark:text-white font-medium">Low</span> as <span className="text-primary font-medium dark:font-normal"> 1k </span>{" "}
              a <span className="text-primary font-medium">month</span>, our customers can be able to get{" "}
              <span className="dark:text-white font-medium">their own</span> <span className="text-primary font-medium dark:font-normal">.co.ke</span>{" "}
              domainn name and an <span className="text-primary font-medium">E-commerce Store</span> to star selling on
              the go. Our sores come with <span className="text-primary font-medium">Online M-pesa Payment</span>{" "}
              support, <span className="text-primary font-medium">Order Management</span> and have partnered with all
              the major delivery services to provide smooth <span className="text-primary font-medium">Deliveries</span>{" "}
              across Kenya.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute bottom-10 right-10 z-10 transition-all duration-1000 ${fifthSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex space-x-3">
            <div className="w-5 h-1 bg-white/30 rounded-full"></div>
            <div className="w-10 h-1 bg-white/50 rounded-full"></div>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Section - before the sixth section */}
      <div id="services-section" className="relative  w-full min-h-screen bg-white dark:bg-black z-45 overflow-hidden py-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/bg.jpg" alt="Background" fill className="object-cover opacity-20" />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/70 dark:from-black/40 dark:via-black/40 dark:to-black/40 backdrop-filter backdrop-blur-md z-10" />
        </div>

        {/* Sticky note - top right */}
        <div
          className={`absolute scale-[0.9] sm:scale-100 lg:scale-110 z-10 -top-8 right-8 z-20 w-48 h-48 bg-green-800/20 dark:bg-green-200/10 backdrop-filter backdrop-blur-sm border border-green-200/30 -rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:rotate-3 transition-all duration-500 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-green-800 dark:text-green-200 text-2xl text-center transform rotate-3">and so much more...</p>
          {/* Arrow SVG pointing to services */}
          <svg
            className="absolute -bottom-16 -left-8 w-24 h-24 text-green-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M90,30 Q50,90 30,70 Q40,60 20,50 L10,60 L5,40 L25,35 L15,45 Q35,55 25,65 Q45,85 85,25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Section heading */}
        <div
          className={`relative z-20 text-center mb-16 transition-all duration-1000 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h2 className="font-humane dark:text-white text-7xl sm:text-8xl lg:text-9xl mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Services grid */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  href={service.link}
                  key={index}
                  className={`bg-black/10 dark:bg-white/5 backdrop-filter backdrop-blur-sm border border-black/20 dark:border-white/10 rounded-lg p-4 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:bg-black/60 hover:border-primary/30 group ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="material-symbols-outlined text-primary text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 `}></Icon>
                  </span>
                  <h3 className="text-white text-sm sm:text-base font-medium">{service.name}</h3>
                </Link>
              )
            })}

            {/* "And More" card */}
            <div
              className={`bg-primary/20 backdrop-filter backdrop-blur-sm border border-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center transform transition-all duration-500 hover:scale-105 hover:bg-primary/30 group ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${services.length * 50}ms` }}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <PlusCircleIcon className="w-8 h-8" />
              </span>
              <h3 className="text-white text-sm sm:text-base font-medium">And Much More!</h3>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 z-10">
          <div className="flex space-x-3">
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <div className="w-10 h-1 bg-white/50 rounded-full"></div>
            <div className="w-5 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Sixth section - Why We Are The Best */}
      <div id="sixth-section" className="relative w-full h-screen bg-white dark:bg-black z-50 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/bg.jpg" alt="Background" fill className="object-cover opacity-30" />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:bg-gradient-to-b dark:from-black/80 dark:via-black/60 dark:to-black/80" />
        </div>

        {/* Sticky note - top left */}
        <div
          className={`absolute scale-[0.9] sm:scale-100 lg:scale-110 top-8 left-8 z-20 w-48 h-48 bg-yellow-800/20 dark:bg-yellow-200/10 backdrop-filter backdrop-blur-sm border border-yellow-800/40 dark:border-yellow-200/30 rotate-6 shadow-lg p-4 flex items-center justify-center transform hover:rotate-3 transition-all duration-500 ${sixthSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <p className="text-yellow-800 dark:text-yellow-200 text-2xl text-center transform -rotate-3">
            we don't just create sites and apps
          </p>
          {/* Arrow SVG pointing to header */}
          <svg
            className="absolute -bottom-16 -right-8 w-24 h-24 text-yellow-800 dark:text-yellow-200 fill-current animate-bounce-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,30 Q50,90 70,70 Q60,60 80,50 L90,60 L95,40 L75,35 L85,45 Q65,55 75,65 Q55,85 15,25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading container - centered in the section */}
        <div
          className={`absolute w-full h-full flex items-center justify-center px-4 z-20 transition-all duration-1000 ${sixthSectionScrolled ? "opacity-30 scale-95" : "opacity-100 scale-100"}`}
        >
          <h1
            className={`font-humane font-bold tracking-wide text-black/60 dark:text-white/60 text-center text-7xl sm:text-8xl lg:text-9xl leading-tight tracking-wide transition-all duration-1000 ${sixthSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-left">
              WHY
            </span>
            <span className="inline-block animate-slide-in-right">WE ARE</span>
            <span className="text-8xl sm:text-9xl lg:text-[9.5rem] text-black dark:text-white mr-2 inline-block animate-slide-in-bottom">
              THE BEST
            </span>
          </h1>
        </div>

        {/* "Read more" indicator that appears after title is fully visible */}
        <div
          className={`absolute bottom-10 left-0 right-0 flex justify-center z-30 transition-all duration-500 ${sixthSectionTitleFullyVisible && !sixthSectionScrolled ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-white/70 dark:text-white/70 text-center">
            <p className="mb-2 text-sm">Scroll to read more</p>
            <svg
              className="w-6 h-6 mx-auto animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Description container - slides up to overlay the heading */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-30 px-8 sm:px-16 md:px-24 transition-all duration-1000 ease-in-out ${sixthSectionVisible ? "opacity-100" : "opacity-0"} ${sixthSectionScrolled ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="max-w-4xl mx-auto bg-white/10 dark:bg-black/70 backdrop-filter backdrop-blur-md p-8 sm:p-10 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl">
            <h3 className="font-humane text-primary text-4xl sm:text-5xl mb-6 text-center">Our Promise</h3>
            <p className="text-black dark:text-white/90 text-xl sm:text-2xl leading-relaxed font-light text-center">
              We <span className="text-primary font-medium">bring your vision to life</span>. With leading industry
              expertise, we make your <span className="dark:text-white font-medium">dream come true</span>. Our{" "}
              <span className="text-primary font-medium">solutions</span> explain our work better. We build to suit{" "}
              <span className="dark:text-white font-medium">you and your customers' needs</span> and make your business grow.{" "}
              <span className="text-primary font-medium text-2xl sm:text-3xl">Try us today</span>.
            </p>
          </div>
        </div>

        {/* Decorative elements - floating icons with improved visibility */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Code icon */}
          <div
            className={`absolute top-1/4 right-1/4 text-white/20 animate-float transition-opacity duration-1000 ${sixthSectionVisible ? "opacity-20" : "opacity-0"}`}
          >
            <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
            </svg>
          </div>

          {/* Design icon */}
          <div
            className={`absolute bottom-1/4 left-1/4 text-white/20 animate-float-delay transition-opacity duration-1000 ${sixthSectionVisible ? "opacity-20" : "opacity-0"}`}
          >
            <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path>
              <circle cx="6.5" cy="11.5" r="1.5"></circle>
              <circle cx="9.5" cy="7.5" r="1.5"></circle>
              <circle cx="14.5" cy="7.5" r="1.5"></circle>
              <circle cx="17.5" cy="11.5" r="1.5"></circle>
            </svg>
          </div>

          {/* Mobile icon */}
          <div
            className={`absolute top-1/3 left-1/6 text-white/20 animate-float-reverse transition-opacity duration-1000 ${sixthSectionVisible ? "opacity-20" : "opacity-0"}`}
          >
            <svg className="w-20 h-20 md:w-28 md:h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientContainer

