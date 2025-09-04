import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "@ui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Header absolute={isHomePage} />
      <AnimatePresence mode="sync">
        <motion.div
          key={location.pathname}
          style={{ willChange: "transform, opacity" }}
          initial={reducedMotion ? false : { opacity: 0.6, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};
