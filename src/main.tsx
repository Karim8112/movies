import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.tsx";
import ReducerApp from "./ReducerApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReducerApp />
  </StrictMode>
);
