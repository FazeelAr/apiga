import React from 'react';
import { motion } from 'framer-motion';

const APigaHeroTitle = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const underlineVariants = {
    hidden: { 
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6 py-12">
      <motion.div 
        className="text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div
          variants={titleVariants}
          className="relative mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-green-400 tracking-wider uppercase">
            APIGA
            <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 text-green-500">
              PAKISTAN
            </span>
          </h1>
          
          {/* Animated underline */}
          <motion.div
            variants={underlineVariants}
            className="h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-6 origin-left"
            style={{ width: '60%' }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={subtitleVariants}
          className="relative"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-wide">
            Shaping the future of{' '}
            <span className="font-semibold text-green-300 relative">
              Internet
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 2 }}
              />
            </span>
            {' '}in Pakistan
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center items-center space-x-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <motion.div
            className="w-12 h-0.5 bg-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-green-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
          <motion.div
            className="w-12 h-0.5 bg-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          />
        </motion.div>

        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default APigaHeroTitle;