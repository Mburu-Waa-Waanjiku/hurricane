import localFont from "next/font/local"

// Load your local font
export const humane = localFont({
  src: "../public/fonts/Humane-Bold.otf",
  display: "swap",
  variable: "--font-humane", // Optional: for use with CSS variables
})

// Your Caveat font can be loaded from Google Fonts
import { Caveat } from "next/font/google"

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-caveat",
})

