import { useEffect, useState } from "react";
import getProductRecommendations from "../../utilities/getProductRecommendations";
import { ProductCard } from "../molecules/ProductCard";

/* eslint-disable @typescript-eslint/no-explicit-any */

// @TODO: currently this will cause a CLS problem, fix it with a skeleton?
const RecentlyViewed = () => {
  const [rvData, setRvData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductRecommendations = async () => {
      return await getProductRecommendations(9564517761316, 10);
    };

    const handleRVData = async () => {
      const rvLsData = localStorage.getItem("jgRecentlyViewedData");

      if (rvLsData) {
        const rvLsDataArr = Object.values(JSON.parse(rvLsData));

        if (rvLsDataArr?.length < 4) {
          const productRecs = await fetchProductRecommendations();
          const combinedData = [...rvLsDataArr];
          let count = 0;

          while (combinedData.length < 4 && productRecs.products.length) {
            const recs = productRecs.products.filter(
              (rec: any) => !rvLsDataArr.find((item: any) => item.id === rec.id)
            );

            if (recs.length === 0) {
              break;
            }
            const { id, title, media, handle, price, variants } = recs[count];
            const data = {
              id,
              title,
              media,
              handle,
              price,
              variants,
            };
            combinedData.push(data);
            count++;
          }

          setRvData(combinedData);
        } else {
          setRvData(rvLsDataArr);
        }
      }
    };
    handleRVData();
  }, []);

  console.log(rvData, "rvData");

  return rvData.length ? (
    <div className="page-width-desktop">
      <h2>Recently Viewed</h2>
      <ul className="grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--2-col-tablet-down">
        {rvData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  ) : null;
};

export default RecentlyViewed;
