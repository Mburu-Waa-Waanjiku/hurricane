"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PhotoSphere({
  imageUrl = "https://i.imgur.com/9s1wjIQ.jpeg", // replace with your equirectangular image path
  autoRotate = true,
  rotateSpeed = 0.02, // radians per second
  className = "fixed inset-0 w-screen h-screen overflow-hidden", // full-screen view
}) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    camera.position.set(0, 0, 0.1); // camera stays inside the sphere

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Sphere geometry (large radius) and inverted so texture maps on the inside
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // flip the sphere to view from inside

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // load texture async
    let isMounted = true;
    loader.load(
      imageUrl,
      (tex) => {
        if (!isMounted) return;
        tex.encoding = THREE.sRGBEncoding;
        material.map = tex;
        material.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.warn("PhotoSphere: texture load error", err);
      }
    );

    // Resize handler
    const onWindowResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onWindowResize);

    // Animation loop
    let last = performance.now();
    const animate = (now) => {
      const dt = (now - last) / 3000; // seconds
      last = now;

      if (autoRotate) {
        sphere.rotation.y += rotateSpeed * dt;
      }

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      isMounted = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onWindowResize);

      geometry.dispose();
      if (material.map) material.map.dispose();
      material.dispose();
      scene.remove(sphere);

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container)
        container.removeChild(renderer.domElement);
    };
  }, [imageUrl, autoRotate, rotateSpeed]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
