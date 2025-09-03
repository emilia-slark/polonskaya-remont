import { Route, Routes } from "react-router-dom";

import { ROUTES } from "@constants";
import { AboutPage, MainPage } from "@pages";
import { Layout } from "@components";

export function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

// TODO Lazy Loading ?
