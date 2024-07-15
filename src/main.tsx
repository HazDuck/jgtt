import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const el = document.querySelector("[data-js-component='RecentlyViewed']");
const data = (el as HTMLElement)?.dataset.jsProps as string;
const obj = JSON.parse(data);

ReactDOM.createRoot(el!).render(
  <React.StrictMode>
    <App {...obj} />
  </React.StrictMode>
);
