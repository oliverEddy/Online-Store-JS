import Product from "./Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
        />
      ))}
    </ul>
  );
};

export default ProductList;
