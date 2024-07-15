import { useEffect, useState } from "react";
import getProductRecommendations from "../../utilities/getProductRecommendations";
import { ProductCardList } from "../organisms/ProductCardList";

/* eslint-disable @typescript-eslint/no-explicit-any */

// @TODO: currently this will cause a CLS problem, fix it with a skeleton?
const RecentlyViewed = ({
  padding,
  background_color,
  text_color,
  title,
}: {
  padding: string;
  background_color: string;
  text_color: string;
  title: string;
}) => {
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

  return rvData.length ? (
    <div
      className="page-width-desktop"
      style={{ backgroundColor: background_color }}
    >
      <h2 style={{ color: text_color }}>{title}</h2>
      <ProductCardList padding={padding} rvData={rvData} />
    </div>
  ) : null;
};

export default RecentlyViewed;
