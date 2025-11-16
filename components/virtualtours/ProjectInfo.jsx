"use client";

import { useState } from 'react';
import { Minimize2, Maximize2, ChevronDown, ChevronUp, Info } from 'lucide-react';

export default function ProjectInfo({
  projectName,
  projectDescription,
  companyName,
  companyLogo,
}) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isCardMinimized, setIsCardMinimized] = useState(false);

  // Get minimized description (first 120 characters)
  const minimizedDescription = projectDescription.length > 120 
    ? projectDescription.slice(0, 120) + '...' 
    : projectDescription;

  return (
    <>
      {/* Company Branding - Top Left - Always Visible */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
        {companyLogo && (
          <img
            src={companyLogo}
            alt={companyName}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        )}
        <span className="text-white font-medium text-sm md:text-base tracking-wide">
          {companyName}
        </span>
      </div>

      {/* Project Info Card - Bottom Left */}
      {!isCardMinimized ? (
  <div className="absolute top-24 left-4 md:bottom-6 md:left-6 z-50 w-[calc(100vw-2rem)] md:w-96 max-w-md">
    <div className="bg-white text-black backdrop-blur-xl rounded-2xl border border-black/10 shadow-2xl overflow-hidden transition-all">
      {/* Header */}
      <div className="flex items-start justify-between p-4 md:p-5 border-b border-black/10">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-1">
            {projectName}
          </h2>
        </div>
        <button
          onClick={() => setIsCardMinimized(true)}
          className="p-2 hover:bg-black/5 rounded-lg transition-colors flex-shrink-0 ml-2"
          aria-label="Minimize info card"
        >
          <Minimize2 className="w-4 h-4 md:w-5 md:h-5 text-black/80" />
        </button>
      </div>

      {/* Description */}
      <div className="p-4 md:p-5">
        <p className="text-sm md:text-base text-black/80 leading-relaxed">
          {isDescriptionExpanded ? projectDescription : minimizedDescription}
        </p>

        {/* Expand/Collapse Description Button */}
        {projectDescription.length > 120 && (
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="mt-3 flex items-center gap-1 text-sm font-medium text-black/70 hover:text-black transition-colors"
          >
            {isDescriptionExpanded ? (
              <>
                Show less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  </div>
        ) : (
          /* Minimized Button - Bottom Left */
          <button
            onClick={() => setIsCardMinimized(false)}
            className="absolute top-24 h-12 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 px-4 py-3 bg-white backdrop-blur-xl rounded-full border border-black/10 shadow-2xl hover:bg-white/90 hover:shadow-xl transition-all"
          >
            <Info className="w-5 h-5 text-black" />
            <span className="text-black font-medium text-sm hidden md:inline">
              Show Project Info
            </span>
            <Maximize2 className="w-4 h-4 text-black/80" />
          </button>
        )}
    </>
  );
}