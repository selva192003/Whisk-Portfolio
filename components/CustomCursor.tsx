'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Look for interaction indicators up the DOM tree
      const isInteractable = target.closest('a') !== null || 
                             target.closest('button') !== null ||
                             window.getComputedStyle(target).cursor === 'pointer' ||
                             target.classList.contains('cursor-pointer');
      
      setIsHovering(isInteractable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.8,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      opacity: 0.5,
      backgroundColor: "rgba(59, 130, 246, 0.4)", // mix of blueish
      borderWidth: "1px",
      borderColor: "rgba(255,255,255,0.5)",
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid rgba(255, 255, 255, 0.8)",
        zIndex: 9999,
        mixBlendMode: "difference"
      }}
      className="hidden md:block" // Hide on small touch screens
    />
  );
}
