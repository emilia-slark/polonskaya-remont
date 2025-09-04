import { StrictMode } from "react";
import { App } from "@components";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./styles/scss/global.scss";

const isDev = import.meta.env.DEV;
// if (isDev) {
//   import("@welldone-software/why-did-you-render").then((WDYR) => {
//     WDYR.default(React, {
//       include: [/^(?!motion)/],
//       trackAllPureComponents: true,
//       trackHooks: true,
//       logOwnerReasons: true,
//       collapseGroups: true,
//     });
//   });
// }

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  isDev ? (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
