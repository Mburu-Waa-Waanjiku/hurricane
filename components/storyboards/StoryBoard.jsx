"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect, useState } from "react";

// ---------- Data ----------
const steps = [
  {
    title: "1. Capture",
    images: ["/images/capture1.jpg", "/images/capture2.jpg"],
    description:
      "We visit your property and capture 360° panoramic imagery using professional cameras. Every detail is photographed to immerse clients into your real estate listing.",
  },
  {
    title: "2. Edit & Stitch",
    images: ["/images/edit1.jpg", "/images/edit2.jpg"],
    description:
      "Our experts stitch and color-grade the images, creating a seamless photosphere. We ensure your virtual tour loads quickly and looks natural on all devices.",
  },
  {
    title: "3. Publish",
    images: ["/images/publish1.jpg", "/images/publish2.jpg"],
    description:
      "Your interactive virtual tour is published and integrated into your website or real-estate listings — ready for clients to explore anywhere in the world.",
  },
];

// ---------- WhatsApp Button ----------
const WhatsAppButton = () => (
  <a
    href="https://wa.me/254704065652"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M12 0C5.372 0 0 5.373 0 12c0 2.118.555 4.14 1.61 5.945L0 24l6.262-1.632A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.002 22c-1.803 0-3.568-.475-5.115-1.374l-.364-.21-3.713.967.994-3.62-.235-.37A9.97 9.97 0 012.002 12c0-5.518 4.48-10 10.002-10C17.522 2 22 6.482 22 12s-4.478 10-9.998 10z" />
    </svg>
  </a>
);

// ---------- 3D Background ----------
function BackgroundSphere() {
  const texture = useRef();
  const [tex, setTex] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("https://i.imgur.com/9s1wjIQ.jpeg", (loaded) => {
      loaded.mapping = THREE.EquirectangularReflectionMapping;
      setTex(loaded);
    });
  }, []);

  return (
    <>
      {tex && (
        <Sphere args={[500, 64, 64]} scale={[-1, 1, 1]}>
          <meshBasicMaterial map={tex} side={THREE.BackSide} />
        </Sphere>
      )}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// ---------- Story Card ----------
const StoryCard = ({ step, index, themeColor }) => {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center w-full md:w-1/2 ${
        isLeft ? "justify-start" : "justify-end ml-auto"
      } mb-24`}
    >
      {/* Connector Circle */}
      <div
        className="absolute w-6 h-6 rounded-full bg-white border-4"
        style={{
          borderColor: themeColor,
          left: isLeft ? "100%" : "-1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Curved Line */}
      <svg
        className="absolute"
        width="200"
        height="100"
        style={{
          left: isLeft ? "100%" : "auto",
          right: isLeft ? "auto" : "100%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <path
          d={
            isLeft
              ? "M0,50 C50,10 150,90 200,50"
              : "M200,50 C150,10 50,90 0,50"
          }
          stroke={themeColor}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Card */}
      <div
        className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg w-80"
        style={{ borderLeft: `6px solid ${themeColor}` }}
      >
        <h2 className="text-xl font-bold mb-3">{step.title}</h2>

        <div className="flex gap-2 overflow-x-auto mb-3">
          {step.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={step.title}
              className="rounded-lg w-28 h-20 object-cover"
            />
          ))}
        </div>

        <p
          className={`text-sm text-gray-700 transition-all ${
            expanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {step.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 mt-2 text-sm font-medium hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
export default function VirtualTourHome() {
  const themeColor = "#0077ff";

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Canvas>
          <BackgroundSphere />
        </Canvas>
      </div>

      {/* Content */}
      <section className="relative min-h-screen w-full px-6 md:px-16 py-24 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Explore Our Virtual Tour Journey
        </h1>
        <p className="text-lg max-w-2xl mb-16">
          Hurricane Teck transforms your real estate listings into immersive,
          interactive virtual tours that engage clients from anywhere.
        </p>

        <div className="relative">
          {steps.map((step, index) => (
            <StoryCard
              key={index}
              step={step}
              index={index}
              themeColor={themeColor}
            />
          ))}
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
