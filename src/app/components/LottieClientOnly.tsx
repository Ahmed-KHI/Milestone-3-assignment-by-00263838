'use client';

import Lottie, { AnimationItem } from 'lottie-web';
import { useEffect, useRef } from 'react';

const LottieClientOnly = () => {
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationInstance: AnimationItem | null = null;

    if (lottieRef.current) {
      animationInstance = Lottie.loadAnimation({
        container: lottieRef.current, // Reference to container div
        renderer: 'svg', // SVG rendering
        loop: true, // Loop the animation
        autoplay: true, // Auto play the animation
        path: '/Animation - 1735336211129.json', // Path to JSON file in public folder
      });
    }

    // Cleanup on unmount
    return () => {
      if (animationInstance) {
        animationInstance.destroy(); // Properly destroy the animation instance
      }
    };
  }, []);

  return <div ref={lottieRef} style={{ width: 300, height: 300 }}></div>;
};

export default LottieClientOnly;