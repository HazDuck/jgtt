import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const el = document.getElementById("root");

ReactDOM.createRoot(el!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
