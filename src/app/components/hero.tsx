import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from 'next/image';

const EnhancedHero = ({ abrilFatface }) => {
  // Custom floating animation
  const floatingAnimation = {
    animate: {
      y: ["0%", "-2%", "0%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

 

  return (
    <div className="relative h-screen overflow-hidden pt-20">
      {/* Animated background layers */}
      <motion.div
        initial={{ skewY: -20, opacity: 0 }}
        animate={{ skewY: -5, opacity: 1 }}
        className="absolute inset-0 bg-[#8B4513]/10 transform origin-left"
      />
      
      {/* Animated grain effect */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-8 py-32 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="max-w-xl"
        >
          {/* Animated corner decorations */}
          {[0, 90, 180, 270].map((rotation, index) => (
            <motion.div
              key={`corner-${index}`}
              initial={{ scale: 0, rotate: rotation }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: rotation + [0, 5, 0, -5, 0]
              }}
              transition={{
                scale: {
                  duration: 3,
                  repeat: Infinity,
                },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                }
              }}
              className="absolute w-16 h-16 border-2 border-[#8B4513]/30"
              style={{
                transformOrigin: 'center',
                top: index < 2 ? '-2rem' : 'auto',
                bottom: index >= 2 ? '-2rem' : 'auto',
                left: index % 2 === 0 ? '-2rem' : 'auto',
                right: index % 2 === 1 ? '-2rem' : 'auto',
              }}
            />
          ))}

          <motion.h1 
            className={cn("text-7xl font-bold text-[#3E2723] mb-6", abrilFatface.className)}
            {...floatingAnimation}
          >
            {/* Animated letters */}
            {"Artisan's Corner".split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated line with gradient */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8 }}
            className="h-px mb-6 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#8B4513]"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          <motion.p 
            className="text-xl text-[#3E2723]/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Where tradition meets modern craftsmanship
          </motion.p>

          {/* Enhanced button with ripple effect */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#8B4513] text-[#FDF5E6] rounded-full font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Collection</span>
            <motion.div
              className="absolute inset-0 bg-[#3E2723]"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.5 }}
              style={{ borderRadius: "50%", left: "50%", top: "50%" }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Animated frame */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -inset-4 border-2 border-[#8B4513]/20 rounded-3xl"
          />

          {/* Main image with hover effect */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-30 rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: '400px', height: '500px' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                src="./art.png"
                alt="Pottery main"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              animate={{
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Floating images with enhanced animations */}
          {[
            { src: "./art2.png", alt: "Pottery detail 1", position: "top-0 right-0", size: { width: 200, height: 250 } },
            { src: "./pottery.png", alt: "Pottery detail 2", position: "bottom-0 left-0", size: { width: 250, height: 300 } }
          ].map((image, index) => (
            <motion.div
              key={`float-${index}`}
              initial={{ x: index === 0 ? 100 : -100, y: index === 0 ? -50 : 50 }}
              animate={{ 
                x: index === 0 ? [50, 60, 50] : [-80, -70, -80],
                y: index === 0 ? [-80, -70, -80] : [80, 90, 80],
                rotate: index === 0 ? [0, 2, 0, -2, 0] : [0, -2, 0, 2, 0],
              }}
              transition={{
                x: { duration: 5, repeat: Infinity, repeatType: "reverse" },
                y: { duration: 6, repeat: Infinity, repeatType: "reverse" },
                rotate: { duration: 7, repeat: Infinity }
              }}
              className={`absolute ${image.position} z-40 rounded-xl overflow-hidden shadow-xl`}
              style={{ width: image.size.width, height: image.size.height }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}

          {/* Animated decorative circles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute z-50 rounded-full border border-[#8B4513]/20"
              style={{
                width: `${80 - i * 12}px`,
                height: `${80 - i * 12}px`,
                top: `${40 + i * 8}%`,
                right: `${45 + i * 3}%`,
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[#8B4513]/30 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;