import styles from "./Product.module.css";
import DiscountBadge from "./DiscountBadge";

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <li className={styles.product}>
      <div className="card">
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <DiscountBadge
              className={styles.badge}
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <h3>{name}</h3>
        <p>Price {price}</p>
        <p data-testid="product-description">{description}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </li>
  );
};

export default Product;
