"use client";

import { useEffect, useRef, useState } from "react";

// Default scenes (can be overridden by props)
const defaultScenes = {
  scene0: {
    title: "Tour our Shamba",
    image: "/tours/scene1.jpg",
    links: [
      { to: "scene1", yaw: 1.09, pitch: 0.06 },
      { to: "scene2", yaw: 1.4, pitch: 0.075 },
      { to: "scene3", yaw: 1.6, pitch: 0.075 },
      { to: "scene4", yaw: 3.05, pitch: 0.05 },
      { to: "scene5", yaw: 2.5, pitch: 0.1 },
      { to: "scene6", yaw: 2.93, pitch: 0.1 },
    ],
  },
  scene1: {
    title: "Scene 1",
    image: "/tours/scene2.jpg",
    links: [
      { to: "scene0", yaw: 2.6, pitch: 0.05 },
      { to: "scene2", yaw: 0.19, pitch: 0.05 },
    ],
  },
  scene2: {
    title: "Scene 2",
    image: "/tours/scene3.jpg",
    links: [
      { to: "scene0", yaw: 3, pitch: 0.075 },
      { to: "scene5", yaw: 2, pitch: 0.08 },
      { to: "scene6", yaw: 2.385, pitch: 0.08 },
    ],
  },
  scene3: {
    title: "Scene 3",
    image: "/tours/scene4.jpg",
    links: [
      { to: "scene0", yaw: 1.6, pitch: 0.12 },
      { to: "scene5", yaw: 0.5, pitch: 0.14 },
      { to: "scene6", yaw: 0.8, pitch: 0.145 },
      { to: "scene4", yaw: 1.1, pitch: 0.12 },
      { to: "scene1", yaw: 1.93, pitch: 0.1 },
      { to: "scene2", yaw: 2.35, pitch: 0.05 },
    ],
  },
  scene4: {
    title: "Road Side View",
    image: "/tours/scene5.jpg",
    links: [
      { to: "scene6", yaw: -1.5, pitch: 0.02 },
      { to: "scene0", yaw: 1.07, pitch: 0.019 },
      { to: "scene1", yaw: 1.777, pitch: 0.0285 },
      { to: "scene2", yaw: 2.24, pitch: 0.05 },
      { to: "scene3", yaw: 2.5, pitch: 0.06 },
      { to: "scene5", yaw: 3.5, pitch: 0.038 },
    ],
  },
  scene5: {
    title: "Tarmak View 1",
    image: "/tours/scene6.jpg",
    links: [
      { to: "scene3", yaw: 2, pitch: 0.045 },
      { to: "scene6", yaw: 0.05, pitch: 0.05 },
      { to: "scene4", yaw: 0.5, pitch: 0.05 },
    ],
  },
  scene6: {
    title: "Tarmak View 2",
    image: "/tours/scene8.jpg",
    links: [
      { to: "scene4", yaw: 0.61, pitch: -0.04 },
      { to: "scene5", yaw: 3.145, pitch: 0 },
      { to: "scene0", yaw: 0.91, pitch: 0.01 },
      { to: "scene1", yaw: 1.615, pitch: 0.03 },
      { to: "scene2", yaw: 2.1, pitch: 0.029 },
      { to: "scene3", yaw: 2.335, pitch: 0.027 },
    ],
  },
};

export default function StreetViewTour({ scenes = defaultScenes }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const panoramasRef = useRef({});
  const [currentScene, setCurrentScene] = useState("scene0");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile/touch-enabled
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let PANOLENS;
    let mounted = true;

    const initViewer = async () => {
      try {
        const panoModule = await import("panolens");
        PANOLENS = panoModule;

        if (!mounted || !containerRef.current) return;

        const viewer = new PANOLENS.Viewer({
          container: containerRef.current,
          controlBar: false,
          output: "console",
        });

        viewerRef.current = viewer;

        Object.keys(scenes).forEach((sceneKey) => {
          const scene = scenes[sceneKey];
          const panorama = new PANOLENS.ImagePanorama(scene.image);
          panoramasRef.current[sceneKey] = panorama;

          scene.links.forEach((link) => {
            const canvas = document.createElement("canvas");
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.arc(64, 64, 50, 0, 2 * Math.PI);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(64, 64, 35, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.fill();

            const infospot = new PANOLENS.Infospot(350, canvas.toDataURL());
            
            const targetTitle = scenes[link.to].title;
            
            // Always add hover text for desktop
            infospot.addHoverText(targetTitle);
            
            // On mobile: make labels always visible after element is created
            if (isMobile) {
              // Wait for Panolens to create the DOM element
              panorama.addEventListener('enter', () => {
                setTimeout(() => {
                  if (infospot.element) {
                    // Find the hover text element and make it always visible
                    const hoverElement = infospot.element.querySelector('.panolens-infospot-text');
                    if (hoverElement) {
                      hoverElement.style.display = 'block';
                      hoverElement.style.opacity = '1';
                      hoverElement.style.visibility = 'visible';
                    }
                  }
                }, 100);
              });
            }

            const radius = 5000;
            const x = radius * Math.cos(link.pitch) * Math.sin(link.yaw);
            const y = radius * Math.sin(link.pitch);
            const z = radius * Math.cos(link.pitch) * Math.cos(link.yaw);
            infospot.position.set(x, y, z);

            infospot.addEventListener("click", () => {
              navigateToScene(link.to);
            });

            panorama.add(infospot);
          });

          viewer.add(panorama);
        });

        viewer.setPanorama(panoramasRef.current[currentScene]);

        setTimeout(() => {
          if (mounted) setShowTitle(true);
        }, 500);
      } catch (err) {
        console.error("Failed to initialize Panolens:", err);
      }
    };

    const navigateToScene = (sceneKey) => {
      if (isTransitioning || !viewerRef.current) return;

      setIsTransitioning(true);
      setShowTitle(false);

      setTimeout(() => {
        if (!mounted) return;

        const targetPano = panoramasRef.current[sceneKey];
        if (targetPano) {
          viewerRef.current.setPanorama(targetPano);
          setCurrentScene(sceneKey);
        }

        setTimeout(() => {
          if (!mounted) return;
          setIsTransitioning(false);

          setTimeout(() => {
            if (mounted) setShowTitle(true);
          }, 300);
        }, 100);
      }, 400);
    };

    initViewer();

    return () => {
      mounted = false;
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
      panoramasRef.current = {};
    };
  }, [scenes, isMobile]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={containerRef} className="w-full h-screen" />

      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-400 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-lg transition-opacity duration-500 ${
          showTitle && !isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-white text-xl font-light tracking-wide text-center">
          {scenes[currentScene]?.title}
        </h1>
      </div>

      {isTransitioning && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}