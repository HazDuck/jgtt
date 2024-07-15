/* eslint-disable @typescript-eslint/no-explicit-any */
import AddToCartButton from "../atoms/AddToCartButton";
import { Price } from "../atoms/Price";

export const ProductCard = ({
  product: { id, title, media, handle, price, variants },
  buttonBackgroundColor,
}: {
  product: any;
  buttonBackgroundColor: string;
}) => {
  return (
    <li className="grid__item scroll-trigger animate--slide-in" key={id}>
      <div className="card-wrapper product-card-wrapper underline-links-hover">
        <div className="card card--standard card--media">
          {/* @TODO: use srcset to get correct image size rather than always 400px */}
          <img
            src={`${media && media[0]?.src}&_width=400`}
            alt={media && media[0]?.alt}
            className="motion-reduce"
            loading="lazy"
          />

          <div className="card__content">
            <div className="card__information">
              <h3 className="card__heading h5">
                <a href={`products/${handle}`}>{title}</a>
              </h3>
              <div className="card__information">
                <span className="caption-large light"></span>
                <Price price={price} />
              </div>
            </div>
          </div>
          <AddToCartButton
            buttonBackgroundColor={buttonBackgroundColor}
            variantId={variants[0]?.id}
          />
        </div>
      </div>
    </li>
  );
};
