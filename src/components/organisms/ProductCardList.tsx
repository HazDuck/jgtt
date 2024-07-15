/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductCard } from "../molecules/ProductCard";

export const ProductCardList = ({
  padding,
  rvData,
  buttonBackgroundColor,
}: {
  buttonBackgroundColor: string;
  padding: string;
  rvData: any;
}) => {
  return (
    <ul
      style={{ padding: `${padding}px` }}
      className="grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--2-col-tablet-down"
    >
      {rvData.map((product: any) => (
        <ProductCard
          buttonBackgroundColor={buttonBackgroundColor}
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};
