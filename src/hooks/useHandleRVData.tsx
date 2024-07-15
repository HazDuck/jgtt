/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import getProductRecommendations from "../utilities/getProductRecommendations";

export const useHandleRVData = () => {
  const [rvData, setRvData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductRecommendations = async (id: number, limit: number) => {
      return await getProductRecommendations(id, limit);
    };

    const handleRVData = async () => {
      const rvLsData = localStorage.getItem("jgRecentlyViewedData");

      if (rvLsData) {
        const rvLsDataArr: { id: number }[] = Object.values(
          JSON.parse(rvLsData)
        );

        if (rvLsDataArr?.length < 4) {
          const productRecs = await fetchProductRecommendations(
            rvLsDataArr[0].id,
            10
          );
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

  return rvData;
};
