import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedScrollSection = ({ children, isFirst, direction }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // Adjusts when the animation starts and ends
  });

  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [isFirst ? 1 : 0, 1]);  


  return (
    <motion.section
      ref={ref}
      viewport={{once: true}}
      style={{ opacity}}
    >
      {children}
    </motion.section>
  );
};
export default AnimatedScrollSection;