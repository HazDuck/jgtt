import addToCart from "../utilities/addToCart";

/* eslint-disable @typescript-eslint/no-explicit-any */
const addToCartButton = ({
  variantId,
  productTitle,
}: {
  variantId: number;
  productTitle: string;
}) => (
  <button onClick={() => addToCart(variantId, productTitle)}>
    Add {productTitle} to cart
  </button>
);

export default addToCartButton;
