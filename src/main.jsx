import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { mock, autoFormat, initManager } from "./manager.jsx";

const manager = (window.manager = initManager());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App manager={manager} />
  </StrictMode>
);

mock(manager);
autoFormat(manager);
