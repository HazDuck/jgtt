/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Shopify: any;
  }
}

const RecentlyViewed = () => {
  const rvData = localStorage.getItem("jgRecentlyViewedData");
  console.log(rvData, "rvData");

  const getProductRecommendations = async () => {
    const response = await fetch(
      window["Shopify"].routes.root +
        "recommendations/products.json?product_id=9564517761316&limit=3&intent=related"
    );
    const data = await response.json();
    console.log(data);
  };

  getProductRecommendations();

  return <div>RecentlyViewed</div>;
};

export default RecentlyViewed;
