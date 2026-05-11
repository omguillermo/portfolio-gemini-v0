"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveDoodle = () => {
  const [isEasterEgg, setIsEasterEgg] = useState(false);

  const toggleEasterEgg = () => setIsEasterEgg(!isEasterEgg);

  // Nomenclature:
  // 1. hairBack: Black mass behind head
  // 2. face: White head (includes silhouette of right ear)
  // 3. hairBangs: Short hair fringe (physically morphs)
  // 4. hairLongFront: Curved piece ON TOP of bangs/face
  // 5. hairLongSides: Main overall mass ON TOP of bangs/face

  const morphingPaths = {
    ear: {
      default: "M3 19C3 17 4.5 16 6 16V23C4.5 23 3 21 3 19Z",
      easterEgg: "M5 17C5 15 6.5 14 8 14V21C6.5 21 5 19 5 17Z"
    },
    hairBack: {
      default: "M23 27C19 25 11 25 8 27V18H23V27Z",
      easterEgg: "M23 33C19 31 11 31 8 33V24H23V33Z"
    },
    face: {
      default: "M17.0042 5C19.7736 5.00002 21.9648 5.59473 23.6771 6.64844C25.3919 7.70385 26.5569 9.1776 27.3431 10.8184C27.9762 12.1397 28.3662 13.5849 28.6097 15.0352C28.7351 15.014 28.8662 15 29.0042 15C29.9673 15 30.9628 15.3202 31.7308 16.0029C32.5172 16.702 33.0042 17.7286 33.0042 19C33.0042 20.2368 32.5459 21.4437 31.8665 22.3496C31.2059 23.2304 30.1945 24 29.0042 24C28.9464 24 28.8894 23.9972 28.8333 23.9941C28.5868 25.8637 28.021 27.5628 26.8128 28.916C24.9643 30.9863 21.8524 32 17.0042 32C12.0986 32 9.20216 30.7051 7.62239 28.4482C6.10528 26.2808 6.00422 23.4662 6.00422 21C6.00422 18.5726 5.86449 14.6055 7.13215 11.2695C7.77749 9.57143 8.8036 7.98268 10.4329 6.8252C12.0649 5.66592 14.2166 5.00002 17.0042 5Z",
      easterEgg: "M17.0042 3C19.7736 3.00002 21.9648 3.59473 23.6771 4.64844C25.3919 5.70385 26.5569 7.1776 27.3431 8.81836C27.9762 10.1397 28.3662 11.5849 28.6097 13.0352C28.7351 13.014 28.8662 13 29.0042 13C29.9673 13 28.9628 13.3202 29.7308 14.0029C30.5172 14.702 30.0042 15.7286 30.0042 17C28.0042 18.2368 30.5459 19.4437 29.8665 20.3496C29.2059 21.2304 30.1945 22 29.0042 22C28.9464 22 28.8894 21.9972 28.8333 21.9941C28.5868 23.8637 28.021 25.5628 26.8128 26.916C24.9643 28.9863 21.8524 30 17.0042 30C12.0986 30 9.20216 28.7051 7.62239 26.4482C6.10528 24.2808 6.00422 21.4662 6.00422 19C6.00422 16.5726 5.86449 12.6055 7.13215 9.26953C7.77749 7.57143 8.8036 5.98268 10.4329 4.8252C12.0649 3.66592 14.2166 3.00002 17.0042 3Z"
    },
    hairBangs: {
      default: "M6.95312 13.3125C5.9996 14.8749 6 16.4376 6 18C6 18 5 14.9913 5 13C5 9 7 4 18 4C29 4 31 10 31 13V15.5C28.5 15.5 27 17 27 20C26 20 26 13 26 13C25.74 14.7854 25.4731 15.7345 24 17C24 17 25 14.5 24 14C22.5 14 21 14.5 21 18C19.4245 16.3186 19.5 14.8933 19.5 13C18.5 13.5 17 15 17 17C15.6316 15.9737 14.732 14.4792 14.2998 12.9971C13.3077 13.6327 12.5718 14.5706 12 16C11.5399 14.1596 11.504 11.8963 12.6699 10.3779C11.2908 10.103 9.8497 10.7717 8.93945 11.333C8.64672 12.3359 8.5 13.4179 8.5 14.5C7.88992 14.2966 7.36414 13.8439 6.95312 13.3125Z",
      easterEgg: "M6.95312 8.3125C5.9996 9.87492 6 14.4376 6 16C6 16 5 12.9913 5 11C5 7 7 2 18 2C29 2 31 8 31 11V13.5C28.5 13.5 27 15 27 18C26 18 26 11 26 11C25.74 12.7854 25.4731 12.7345 24 14C24 14 25 12.5 24 12C22.5 12 21 8.5 21 12C19.4245 10.3186 19.5 9.89331 19.5 8C18.5 8.5 17 7 17 9C15.6316 7.97372 14.732 9.47916 14.2998 7.99707C13.3077 8.63265 12.5718 6.5706 12 8C11.5399 6.15955 11.504 7.8963 12.6699 6.37793C11.2908 6.10304 9.8497 6.77173 8.93945 7.33301C8.64672 8.33591 8.5 7.4179 8.5 8.5C7.88992 8.29664 7.36414 8.84392 6.95312 8.3125Z"
    },
    eyebrowL: {
      default: "M9 21C10 20.5 11 20.5 12 21",
      easterEgg: "M9 19.375C10 19.5 11 19.875 12 20.375"
    },
    eyebrowR: {
      default: "M20 21C21 20.5 22 20.5 23 21",
      easterEgg: "M20 20.375C21 19.875 22 19.375 23 19.375"
    },
    mouth: {
      default: "M14.5 29C15.5 29.5 17.5 29.5 18.5 29",
      easterEgg: "M14.5 26C15.5 25 17.5 25 18.5 26"
    }
  };

  const longHairPaths = {
    hairLongFront: "M31 11V13.5C28.5 13.5 27 14 27 17C21.7295 17 19 13 14 9C11.5 7 8 10 8 10C6 12 6 14 6 16C6 16 5 12.9913 5 11C5 7 7 2 18 2C29 2 31 8 31 11Z",
    hairLongSides: "M8 11C8 8.45048 12.5 6.99999 14 6.99999C20 6.49999 23 10 23 13C23 15.4 23.1667 28.6667 23 34C27 34 31 33 31 30V13C31 9 30 6 27 4C24 2 17.4 1.8 15 3C10 2 5 6 5 11V30C5 33 6 34 8 34C7.83333 27.8333 8 13 8 11Z"
  };

  const handPaths = {
    base: "M30 19C31.1046 19 32 19.8954 32 21V28C32 30.2091 30.2091 32 28 32H23C20.7909 32 19 30.2091 19 28V21C19 19.8954 19.8954 19 21 19C22.1046 19 23 19.8954 23 21V24H28V21C28 19.8954 28.8954 19 30 19Z",
    outline: "M30 19V18V18V19ZM32 21H33V21H32ZM28 32V33V33V32ZM21 19V18V18V19ZM23 21H24V21H23ZM23 24H22C22 24.5523 22.4477 25 23 25V24ZM28 24V25C28.5523 25 29 24.5523 29 24H28ZM30 19V20C30.5523 20 31 20.4477 31 21H32H33C33 19.3431 31.6569 18 30 18V19ZM32 21H31V28H32H33V21H32ZM32 28H31C31 29.6569 29.6569 31 28 31V32V33C30.7614 33 33 30.7614 33 28H32ZM28 32V31H23V32V33H28V32ZM23 32V31C21.3431 31 20 29.6569 20 28H19H18C18 30.7614 20.2386 33 23 33V32ZM19 28H20V21H19H18V28H19ZM19 21H20C20 20.4477 20.4477 20 21 20V19V18C19.3431 18 18 19.3431 18 21H19ZM21 19V20C21.5523 20 22 20.4477 22 21H23H24C24 19.3431 22.6569 18 21 18V19ZM23 21H22V24H23H24V21H23ZM23 24V25H28V24V23H23V24ZM28 24H29V21H28H27V24H28ZM28 21H29C29 20.4477 29.4477 20 30 20V19V18C28.3431 18 27 19.3431 27 21H28Z"
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: 0.5
  };

  return (
    <div 
      className="relative cursor-pointer select-none w-full h-full"
      onClick={toggleEasterEgg}
    >
      <motion.svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={false}
        animate={{ 
          rotate: isEasterEgg ? [0, -5, 5, 0] : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <defs>
          <clipPath id="hairGrowthClip">
            <motion.rect 
              x="0" 
              y="0" 
              width="36" 
              animate={{ height: isEasterEgg ? 36 : 0 }}
              transition={transition}
            />
          </clipPath>
        </defs>

        {/* 1. hairBack (Black mass behind head) */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.hairBack.easterEgg : morphingPaths.hairBack.default }}
          fill="black"
          transition={transition}
        />

        {/* 2. face (White head mass) */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.face.easterEgg : morphingPaths.face.default }}
          fill="white" stroke="black" strokeWidth="2"
          transition={transition}
        />
        
        {/* 3. ear (Silhouetted on left) */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.ear.easterEgg : morphingPaths.ear.default }}
          fill="white" stroke="black" strokeWidth="2"
          transition={transition}
        />
        
        {/* 4. eyes */}
        <motion.circle 
          animate={{ cx: 10.5, cy: isEasterEgg ? 21.5 : 23.5 }}
          r="1.5" fill="black" transition={transition}
        />
        <motion.circle 
          animate={{ cx: 21.5, cy: isEasterEgg ? 21.5 : 23.5 }}
          r="1.5" fill="black" transition={transition}
        />

        {/* 5. hairBangs (Short hair fringe) */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.hairBangs.easterEgg : morphingPaths.hairBangs.default }}
          fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"
          transition={transition}
        />

        {/* 6. eyebrows */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.eyebrowL.easterEgg : morphingPaths.eyebrowL.default }}
          stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          transition={transition}
        />
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.eyebrowR.easterEgg : morphingPaths.eyebrowR.default }}
          stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          transition={transition}
        />

        {/* 7. Long Hair Layers (Grow ON TOP of face/ears using clipPath) */}
        <g clipPath="url(#hairGrowthClip)">
          <path 
            d={longHairPaths.hairLongSides}
            fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"
          />
          <path 
            d={longHairPaths.hairLongFront}
            fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"
          />
        </g>
        
        {/* 8. mouth */}
        <motion.path 
          animate={{ d: isEasterEgg ? morphingPaths.mouth.easterEgg : morphingPaths.mouth.default }}
          stroke="black" strokeWidth="2" strokeLinecap="round"
          transition={transition}
        />

        {/* 9. hand */}
        <AnimatePresence>
          {isEasterEgg && (
            <motion.g
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.5 }}
              transition={{ delay: 0.1, ...transition }}
            >
              <path d={handPaths.base} fill="white" />
              <path d={handPaths.outline} fill="black" />
            </motion.g>
          )}
        </AnimatePresence>
      </motion.svg>

      {/* LET'S ROCK Speech Bubble */}
      <AnimatePresence>
        {isEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.5 }}
            transition={transition}
            className="absolute -top-12 -right-12 bg-foreground text-background px-3 py-1.5 rounded text-[9px] font-bold tracking-widest whitespace-nowrap shadow-xl z-50 border border-border/10"
          >
            LET&apos;S ROCK!
            <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveDoodle;
