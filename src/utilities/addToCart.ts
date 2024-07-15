/* eslint-disable @typescript-eslint/no-explicit-any */

const addToCart = async (variantId: number) => {
  const cartDrawer: any = document.querySelector("cart-drawer");

  const addToCartRequest = async () => {
    const res = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: variantId,
            quantity: 1,
          },
        ],
        sections: cartDrawer.getSectionsToRender().map((section: any) => {
          return section.id;
        }),
      }),
    });
    return res.json();
  };

  const response = await addToCartRequest();

  console.log(response, "response");

  cartDrawer.renderContents(response);

  if (!response.ok) {
    console.log(`something went wrong adding to cart`);
  }
};

export default addToCart;
