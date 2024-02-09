"use client"
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type sideType = {
    hidden:visibilityType;
    visible:visibilityType;  
}
type visibilityType = {
    opacity: number;
    y?: any;
    x?: any;
}

export default function FramerTest({children, classes, position}:{children: React.ReactNode, classes?: string, position?:string}) {
    
  const [ref, isInView] = useInView();
  const control = useAnimation();

  const fromBottom = {
    hidden:{
        opacity: 0,
        y: 85
    },
    visible:{
        opacity: 1,
        y: 0
    }
  }
  const fromTop = {
    hidden:{
        opacity: 0,
        y: -85
    },
    visible:{
        opacity: 1,
        y: 0
    }
  }
  const fromLeft = {
    hidden:{
        opacity: 0,
        x: 100
    },
    visible:{
        opacity: 1,
        x: 0
    }
  }
  const fromRight = {
    hidden:{
        visibility: 'hidden',
        opacity: 0,
        x: -100
    },
    visible:{
      visibility: 'visible',
        opacity: 1,
        x: 0
    }
  }

  let side:sideType = fromBottom;

  switch(position){
    case 'bottom':
        side = fromBottom
        break;
    case 'top':
        side = fromTop
        break;
    case 'left':
        side = fromLeft
        break;
    case 'right':
        side = fromRight
        break;
  }
  
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [control, isInView]); 

  return (
        <motion.div
        ref={ref}
        variants={side}
        initial="hidden"
        animate={control}
        transition={{duration: 0.4, delay: 0.25}}
        className={classes}
        >
            {children}
        </motion.div>
  )
}
