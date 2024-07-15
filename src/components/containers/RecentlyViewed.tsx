// import { useEffect, useState } from "react";
// import getProductRecommendations from "../../utilities/getProductRecommendations";
import { useHandleRVData } from "../../hooks/useHandleRVData";
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
  const rvData = useHandleRVData();

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
