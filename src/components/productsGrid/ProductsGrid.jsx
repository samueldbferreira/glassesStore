import ProductCard from "../productCard/ProductCard";
import styles from "./ProductsGrid.module.css";

const ProductsGrid = ({ data }) => {
  return (
    <ul className={styles.grid}>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <ProductCard data={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsGrid;
