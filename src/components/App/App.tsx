import { Route, Routes } from "react-router-dom";

import { ROUTES } from "@constants";
import { About, Main } from "@pages";
import { Layout } from "@components";

export function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          {/* <Routes path={ROUTES.CONTACTS} /> */}
        </Route>
      </Routes>
    </>
  );
}

// TODO Lazy Loading ?
