import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "@ui";
import { AnimatePresence, motion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header absolute={isHomePage} />
      <AnimatePresence mode={isHomePage ? "popLayout" : "wait"}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0.5, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
