import addToCart from "../../utilities/addToCart";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddToCartButton = ({
  variantId,
  buttonBackgroundColor,
}: {
  variantId: number;
  buttonBackgroundColor: string;
}) => (
  <button
    style={{ backgroundColor: buttonBackgroundColor }}
    className="button"
    onClick={() => addToCart(variantId)}
  >
    {/* @TODO: Bring in strings from lang strings */}
    Add to cart
  </button>
);

export default AddToCartButton;
