import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
  return (
    <Link className={styles.product} to={`/produtos/${data.id}`}>
      <div className={styles.imageContainer}>
        <img src={data.images[0]} />
      </div>

      <div className={styles.details}>
        <h2 className={styles.nome}>{data.nome}</h2>

        <span className={styles.valores}>
          <p className={styles.preco}>R$ {data.preco.toFixed(2)}</p>
          {data.parcelas > 0 && (
            <span className={styles.parcelamento}>
              {data.parcelas}x de R$ {(data.preco / data.parcelas).toFixed(2)}
            </span>
          )}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
