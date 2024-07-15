/* eslint-disable @typescript-eslint/no-explicit-any */
import { Price } from "../atoms/Price";

export const ProductCard = ({
  product: { id, featured_image, title, price },
}: {
  product: any;
}) => {
  return (
    <li className="grid__item scroll-trigger animate--slide-in" key={id}>
      <div className="card-wrapper product-card-wrapper underline-links-hover">
        <div className="card card--standard card--media">
          {/* @TODO: use srcset to get correct image size rather than always 400px */}
          <img
            src={`${featured_image}&_width=400`}
            alt={title}
            className="motion-reduce"
            loading="lazy"
          />

          <div className="card__content">
            <div className="card__information">
              <h3 className="card__heading h5">{title}</h3>
              <div className="card__information">
                <span className="caption-large light"></span>
                <Price price={price} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
