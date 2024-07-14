import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* @TODO: could wrap App in Provider here */}
    <App />
  </React.StrictMode>
);
