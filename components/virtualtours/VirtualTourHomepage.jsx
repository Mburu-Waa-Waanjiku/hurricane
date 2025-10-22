"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import {
  Home,
  Building2,
  MapPin,
  Camera,
  Globe,
  ArrowRight,
  Check,
  Play,
  Phone,
  MessageCircle,
} from "lucide-react";
import PhotoSphere from "./PhotoSphere"

export default function VirtualTourHomepage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section transitions (6 sections)
  const sectionOpacity = [
    useTransform(scrollYProgress, [0, 0.12], [1, 0]),
    useTransform(scrollYProgress, [0.12, 0.16, 0.24, 0.28], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.28, 0.32, 0.4, 0.44], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.44, 0.48, 0.56, 0.6], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.6, 0.64, 0.72, 0.76], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.76, 0.8, 1.0], [0, 1, 1]),
  ];

  const whatsappNumber = "254704065652";
  const whatsappMessage =
    "Hello Hurricane Teck! I'm interested in your virtual tour services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Continuous background animation
  const photosphereUrl = "https://i.imgur.com/9s1wjIQ.jpeg"; // replace with your actual URL
  const backgroundRef = useRef(null);

  useAnimationFrame((t) => {
    if (backgroundRef.current) {
      const positionX = (t * 0.01) % 100; // slow continuous motion
      backgroundRef.current.style.backgroundPosition = `${positionX}% center`;
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[700vh] bg-black overflow-hidden text-white"
    >
      {/* Photosphere background */}
      <div className="fixed inset-0 z-0">
        <PhotoSphere imageUrl="https://i.imgur.com/9s1wjIQ.jpeg" rotateSpeed={0.2} />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content sections */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* Section 1: Hero */}
        <motion.section
          style={{ opacity: sectionOpacity[0] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="text-center max-w-5xl mx-auto pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Immersive <span className="text-primary">Virtual Tours</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8">
              Transform your properties into stunning 360° experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300 text-sm md:text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Based in Ruiru, Kenya</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Serving clients nationwide & abroad</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Houses & Apartments */}
        <motion.section
          style={{ opacity: sectionOpacity[1] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="pointer-events-auto w-full max-w-4xl rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-xl">
            <div className="flex flex-row items-start gap-4 mb-6">
              <div className="bg-primary p-4 rounded-2xl">
                <Building2 className="text-white w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Houses & Apartments
                </h2>
                <p className="text-primary mt-1">
                  Showcase properties like never before
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
              Give buyers a complete walkthrough experience from anywhere.
              Explore every room, corner, and detail in 360° clarity.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Interactive room-by-room navigation",
                "High-resolution 360° photography",
                "Works on all devices",
                "Shareable links for social media",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-200 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 3: Land & Plots */}
        <motion.section
          style={{ opacity: sectionOpacity[2] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="pointer-events-auto w-full max-w-4xl bg-white/10 rounded-3xl border border-white/20 p-6 md:p-10 backdrop-blur-md shadow-xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="bg-primary p-4 rounded-2xl">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Land & Plot Tours
                </h2>
                <p className="text-primary mt-1">
                  Show the full potential of every plot
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
              Help buyers visualize land parcels with comprehensive aerial and
              ground-level virtual tours, showcasing terrain and surroundings.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Aerial drone footage available",
                "Boundary markers & measurements",
                "Surrounding area highlights",
                "Access routes documentation",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-200 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Applications */}
        <motion.section
          style={{ opacity: sectionOpacity[3] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="pointer-events-auto max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Beyond Real Estate
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Home, title: "Hotels & Resorts", desc: "Showcase rooms and facilities to boost bookings" },
                { icon: Building2, title: "Commercial Spaces", desc: "Display offices, retail areas, and warehouses" },
                { icon: Camera, title: "Event Venues", desc: "Help clients plan events with virtual walkthroughs" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl border border-white/20 p-6 hover:scale-105 transition-transform"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Why Choose Us */}
        <motion.section
          style={{ opacity: sectionOpacity[4] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="pointer-events-auto max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
              Why Hurricane Teck?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Camera,
                  title: "Professional Quality",
                  desc: "State-of-the-art equipment and expert photographers",
                },
                {
                  icon: Globe,
                  title: "Quick Turnaround",
                  desc: "Get your virtual tour within 48-72 hours",
                },
                {
                  icon: Play,
                  title: "Easy Integration",
                  desc: "Embed tours or share them on social media easily",
                },
                {
                  icon: MapPin,
                  title: "Local Expertise",
                  desc: "We understand the Kenyan market deeply",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl border border-white/20 p-6 text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 6: CTA */}
        <motion.section
          style={{ opacity: sectionOpacity[5] }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="pointer-events-auto text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-primary">Property Listings?</span>
            </h2>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Let's create stunning virtual tours that sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+254704065652"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
