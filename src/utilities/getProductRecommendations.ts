const getProductRecommendations = async (id: number, limit: number) => {
  const response = await fetch(
    window["Shopify"].routes.root +
      `recommendations/products.json?product_id=${id}&limit=${limit}&intent=related`
  );
  const data = await response.json();
  return data;
};

export default getProductRecommendations;
