import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
    return (
        <Link className={styles.product} to={`/produto/${data.id}`}>
            <div className={styles.imageContainer}>
                <img src={data.images[0]} alt="" />
            </div>

            <div className={styles.details}>
                <h2 className={styles.nome}>{data.nome}</h2>

                <span className={styles.valores}>
                    <p className={styles.preco}>R$ 199,99</p>
                    <span className={styles.parcelamento}>3x de R$ 66,66</span>
                </span>
            </div>
        </Link>
    );
}

export default ProductCard;
