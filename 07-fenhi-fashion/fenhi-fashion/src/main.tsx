import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FenhiFashionApp } from "./FenhiFashionApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FenhiFashionApp />
  </StrictMode>
);
