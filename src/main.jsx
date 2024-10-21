import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);
