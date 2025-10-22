"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * StoryBoard Component – geometric zig-zag connectors + expandable descriptions
 * @param {Array} steps - [{ id, title, description, images:[] }]
 * @param {string} themeColor - accent color for lines and highlights
 */
export default function StoryBoard({
  steps = [],
  themeColor = "#2563eb",
}) {
  const [circlePositions, setCirclePositions] = useState([]);
  const circleRefs = useRef([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Calculate circle positions after render
  useEffect(() => {
    const updatePositions = () => {
      const positions = circleRefs.current.map(ref => {
        if (!ref) return null;
        const rect = ref.getBoundingClientRect();
        const container = ref.closest('.storyboard-container');
        const containerRect = container?.getBoundingClientRect();
        
        return {
          x: rect.left + rect.width / 2 - (containerRect?.left || 0),
          y: rect.top + rect.height / 2 - (containerRect?.top || 0)
        };
      });
      setCirclePositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    
    // Delay to ensure layout is complete
    setTimeout(updatePositions, 100);
    
    return () => window.removeEventListener('resize', updatePositions);
  }, [steps]);

  return (
    <div
      className="storyboard-container relative flex flex-col items-center w-full min-h-screen py-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #f9fafb, #e5e7eb)",
      }}
    >
      {/* === Steps === */}
      <div className="relative flex flex-col space-y-28 w-full max-w-5xl" style={{ zIndex: 2 }}>
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const [expanded, setExpanded] = useState(false);

          return (
            <motion.div
              key={step.id || index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex ${
                isLeft ? "justify-start pl-6" : "justify-end pr-6"
              }`}
            >
              {/* --- Step Card --- */}
              <div
                className={`w-[80vw] max-w-sm rounded-2xl shadow-md bg-white border overflow-hidden ${
                  isLeft ? "ml-0" : "mr-0"
                }`}
                style={{ borderColor: `${themeColor}33` }}
              >
                {/* Title with Circle */}
                <div
                  className="p-3 border-b text-center font-semibold flex items-center justify-center gap-2"
                  style={{
                    color: themeColor,
                    borderColor: `${themeColor}33`,
                  }}
                >
                  {/* Connection Circle */}
                  <div
                    ref={el => circleRefs.current[index] = el}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white flex-shrink-0 relative"
                    style={{
                      border: `3px solid ${themeColor}`,
                      zIndex: 10,
                    }}
                  >
                    <Circle
                      className="w-3 h-3"
                      strokeWidth={2}
                      color={themeColor}
                    />
                  </div>
                  <span>{step.title}</span>
                </div>

                {/* Gallery */}
                {step.images && step.images.length > 0 && (
                  <Slider {...sliderSettings}>
                    {step.images.map((img, i) => (
                      <div key={i} className="h-48">
                        <img
                          src={img}
                          alt={`${step.title}-${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                )}

                {/* Description */}
                <div className="p-4 text-gray-700 text-sm">
                  <p
                    className={`transition-all duration-300 ${
                      expanded ? "line-clamp-none" : "line-clamp-4"
                    }`}
                  >
                    {step.description}
                  </p>
                  {step.description.length > 180 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="flex items-center gap-1 text-sm font-medium mt-2"
                      style={{ color: themeColor }}
                    >
                      {expanded ? (
                        <>
                          Show less <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* === Connector Lines (rendered after cards) === */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        {circlePositions.map((pos, index) => {
          if (index === circlePositions.length - 1 || !pos || !circlePositions[index + 1]) return null;

          const nextPos = circlePositions[index + 1];
          const startX = pos.x;
          const startY = pos.y;
          const endX = nextPos.x;
          const endY = nextPos.y;
          
          const midY = (startY + endY) / 2;
          const controlOffset = 30;

          // Geometric path that routes around cards
          const isLeftToRight = startX < endX;
          const horizontalMid = (startX + endX) / 2;
          
          // Create path that goes: down → across → down
          const path = `
            M ${startX} ${startY}
            L ${startX} ${midY - controlOffset}
            Q ${startX} ${midY}, ${startX + (isLeftToRight ? controlOffset : -controlOffset)} ${midY}
            L ${endX - (isLeftToRight ? controlOffset : -controlOffset)} ${midY}
            Q ${endX} ${midY}, ${endX} ${midY + controlOffset}
            L ${endX} ${endY}
          `;

          return (
            <g key={index}>
              {/* White outline for visibility */}
              <path
                d={path}
                stroke="white"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Colored path */}
              <path
                d={path}
                stroke={themeColor}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#arrowhead)"
              />
            </g>
          );
        })}

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill={themeColor} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}