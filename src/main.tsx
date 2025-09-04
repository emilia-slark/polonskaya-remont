import { StrictMode } from "react";
import { App } from "@components";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./styles/scss/global.scss";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
