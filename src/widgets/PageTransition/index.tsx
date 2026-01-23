import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: (reducedMotion: boolean) => ({
    opacity: reducedMotion ? 1 : 0.6,
    y: reducedMotion ? 0 : -20,
  }),
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: (reducedMotion: boolean) => ({
    opacity: 0,
    y: reducedMotion ? 0 : 20,
  }),
};

const pageTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      custom={reducedMotion}
      style={{ willChange: "transform, opacity" }}
      initial="initial"
      animate="animate"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
