import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "@ui";
import { AnimatePresence, motion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();

  return (
    // <AnimatePresence mode="popLayout">
    //   <motion.div
    //     key={location.pathname}
    //     initial={{ opacity: 0, y: -50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 50 }}
    //     transition={{ duration: 0.2 }}
    //   >
    //     <Header />
    //     <Outlet />
    //     <Footer />
    //   </motion.div>
    // </AnimatePresence>

    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
