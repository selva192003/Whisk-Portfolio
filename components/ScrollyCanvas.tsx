'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Robust manual scroll progress calculation (bypasses Framer target offset bugs)
  const { scrollY } = useScroll();
  const [bounds, setBounds] = useState({ top: 0, height: 1 });

  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBounds({
          top: rect.top + window.scrollY,
          // scroll distance = total height - viewport height (since sticky ends when bottom is reached)
          height: rect.height - window.innerHeight 
        });
      }
    };
    
    // Slight delay to ensure DOM is fully laid out
    setTimeout(updateBounds, 100);
    window.addEventListener('resize', updateBounds);
    
    // Also re-measure on loading complete to be ultra safe
    return () => window.removeEventListener('resize', updateBounds);
  }, [isLoaded]);

  const scrollYProgress = useTransform(scrollY, (y) => {
     if (bounds.height <= 0) return 0;
     const progress = (y - bounds.top) / bounds.height;
     return Math.max(0, Math.min(1, progress));
  });

  // Map scroll progress to image frames
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // STOPS MAPPING FOR TEXT OVERLAYS 
  
  // 0% - 15% -> My Name
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], ['0%', '-50%']);

  // 15% - 32% -> I build modern web applications
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.32], [0, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.25, 0.32], ['-10%', '0%', '-10%']);

  // 32% - 50% -> Bridging frontend and backend
  const opacity3 = useTransform(scrollYProgress, [0.32, 0.42, 0.50], [0, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.32, 0.42, 0.50], ['10%', '0%', '10%']);

  // 50% - 68% -> Passionate fresher 
  const opacity4 = useTransform(scrollYProgress, [0.50, 0.60, 0.68], [0, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.50, 0.60, 0.68], ['10%', '0%', '-10%']);

  // 68% - 85% -> Master's at Kongu
  const opacity5 = useTransform(scrollYProgress, [0.68, 0.78, 0.85], [0, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.68, 0.78, 0.85], ['10%', '0%', '-10%']);

  // 85% - 100% -> Creating digital experiences
  const opacity6 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 0]);
  const scale6 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0.8, 1, 1]);


  // Image loading logic
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
               setIsLoaded(true);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index] || !images[index].complete) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High performance scale and clear
    const img = images[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    // object-fit: cover emulation
    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (isLoaded) {
      requestAnimationFrame(() => drawImage(Math.round(latest)));
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        if (isLoaded) {
          drawImage(Math.round(frameIndex.get()));
        }
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      drawImage(Math.round(frameIndex.get()));
    }
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-[#050505]">
      
      {/* Sticky container that holds both Canvas and Text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="block absolute inset-0 h-full w-full object-cover z-0"
        />
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-50">
             <div className="flex flex-col items-center gap-4">
               <div className="w-10 h-10 border-t-2 border-l-2 border-white rounded-full animate-spin"></div>
               <p className="text-white text-sm uppercase tracking-widest font-mono">Loading Sequence</p>
             </div>
          </div>
        )}

        {/* Text Overlays Layer */}
        <div className="pointer-events-none absolute inset-0 z-10 w-full h-full flex items-center justify-center">

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute w-full flex items-center justify-center p-8 text-center"
            >
                <div className="max-w-4xl backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/5">
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4 drop-shadow-2xl">
                        SELVA J.
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-300 font-medium tracking-tight">
                        Aspiring Software Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute w-full flex items-center justify-start px-8 md:px-24"
            >
                <div className="max-w-2xl bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        I build modern <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            web applications.
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute w-full flex items-center justify-end px-8 md:px-24 text-right"
            >
                <div className="max-w-2xl bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        Bridging frontend <br />
                        <span className="text-emerald-400 italic font-serif">
                            and backend.
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute w-full flex items-center justify-center px-8 text-center"
            >
                <div className="max-w-3xl bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-blue-500/10">
                    <p className="text-3xl md:text-5xl text-white font-bold leading-tight">
                        A passionate fresher with a Bachelor's degree in Information Technology.
                    </p>
                </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
                style={{ opacity: opacity5, y: y5 }}
                className="absolute w-full flex items-center justify-center px-8 text-center"
            >
                <div className="max-w-3xl bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-emerald-500/10">
                    <p className="text-3xl md:text-5xl text-white font-bold leading-tight">
                        Completed Master's in Computer Applications at Kongu Engineering College.
                    </p>
                </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
                style={{ opacity: opacity6, scale: scale6 }}
                className="absolute w-full flex items-center justify-center px-8 text-center"
            >
                <div className="max-w-4xl bg-black/30 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                    <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 tracking-tighter leading-tight">
                        Creating beautiful digital experiences.
                    </h2>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
}
