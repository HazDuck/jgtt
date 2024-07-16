/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import getProductRecommendations from "../utilities/getProductRecommendations";

export const useHandleRVData = () => {
  const [rvData, setRvData] = React.useState<any[]>([]);
  console.log("useHandleRVDataTEST4");
  // @TODO: investigate why React.useeffect is required to prevent vite build error
  React.useEffect(() => {
    const fetchProductRecommendations = async (id: number, limit: number) => {
      return await getProductRecommendations(id, limit);
    };

    const handleRVData = async () => {
      const rvLsData = localStorage.getItem("jgRecentlyViewedData");

      if (rvLsData) {
        let rvLsDataArr: any[] = Object.values(JSON.parse(rvLsData));
        rvLsDataArr = rvLsDataArr.sort(
          (a: { time: number }, b: { time: number }) => b.time - a.time
        );

        if (rvLsDataArr?.length < 4) {
          const productRecs = await fetchProductRecommendations(
            rvLsDataArr[0].id,
            10
          );
          const combinedData = [...rvLsDataArr.sort((a, b) => b.time - a.time)];
          let count = 0;

          while (combinedData.length < 4 && productRecs.products.length) {
            const recs = productRecs.products.filter(
              (rec: any) => !rvLsDataArr.find((item: any) => item.id === rec.id)
            );

            if (recs.length === 0 || !recs[count]) {
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
