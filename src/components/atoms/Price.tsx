/* eslint-disable @typescript-eslint/no-explicit-any */

{
  /* @TODO: price component needs further work to account for sale, different currencies etc*/
}
export const Price = ({ price }: { price: any }) => (
  <div className="price">£{price / 100} GBP</div>
);
