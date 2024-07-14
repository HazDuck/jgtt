import React from "react";
import ReactDOM from "react-dom/client";
import AddToCartButton from "./addToCartButton.tsx";

const element = document.getElementById("add-to-cart-button");

if (element) {
  const variantId = element.dataset.variantId;
  const productTitle = element.dataset.productTitle;

  if (variantId && productTitle) {
    ReactDOM.createRoot(element!).render(
      <React.StrictMode>
        <AddToCartButton
          variantId={Number.parseInt(variantId)}
          productTitle={productTitle}
        />
      </React.StrictMode>
    );
  }
}
