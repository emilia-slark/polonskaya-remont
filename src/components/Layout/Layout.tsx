import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "@ui";
import { AnimatePresence, motion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode={location.pathname === "/" ? "popLayout" : "wait"}>
      <Header />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.5, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <Outlet />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};
