const addProductToLocalStorage = () => {
  const jgRecentlyViewedData = localStorage.getItem("jgRecentlyViewedData");

  //get product data from the DOM
  const productData =
    document.querySelector("[data-product-data").dataset.productData;
  const { id, title, price, media, handle, variants } = JSON.parse(productData);
  console.log(JSON.parse(productData), "productData");

  const data = {
    id,
    title,
    media,
    handle,
    price,
    variants,
    time: Date.now(),
  };

  if (!jgRecentlyViewedData) {
    localStorage.setItem(
      "jgRecentlyViewedData",
      JSON.stringify({ [id]: data })
    );
  } else {
    const currentRVData = JSON.parse(
      localStorage.getItem("jgRecentlyViewedData")
    );

    //make array of product data and check if current product is already in the array
    const productData = Object.values(currentRVData);
    const currentProductId = productData.find(
      (item) => parseInt(item.id) === data.id
    );

    if (currentProductId) {
      return;
    } else {
      const rvData = {};

      // sort product data by time and get the last 3 items, turn back into obj and then add new item
      productData.sort((a, b) => b.time - a.time);
      productData.length = productData.length > 3 ? 3 : productData.length;
      productData.forEach((item) => {
        rvData[item.id] = item;
      });
      rvData[data.id] = data;

      localStorage.setItem("jgRecentlyViewedData", JSON.stringify(rvData));
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  addProductToLocalStorage();
});
