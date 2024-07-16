import { useHandleRVData } from "../../hooks/useHandleRVData";
import { ProductCardList } from "../organisms/ProductCardList";

/* eslint-disable @typescript-eslint/no-explicit-any */
// @TODO: currently this will cause a CLS problem, fix it with a skeleton?
const RecentlyViewed = ({
  padding,
  button_background_color,
  text_color,
  title,
}: {
  padding: string;
  button_background_color: string;
  text_color: string;
  title: string;
}) => {
  console.log("RVTEST5");
  const rvData = useHandleRVData();
  return rvData.length ? (
    <div className="page-width-desktop">
      <h2 style={{ color: text_color }}>{title}</h2>
      <ProductCardList
        buttonBackgroundColor={button_background_color}
        padding={padding}
        rvData={rvData}
      />
    </div>
  ) : null;
};

export default RecentlyViewed;
