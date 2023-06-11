import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
    return (
        <Link className={styles.product} to={`/produto/${data.id}`}>
            <div className={styles.imageContainer}>
                <img src={data.imagem} alt="" />
            </div>

            <div className={styles.details}>
                <h2 className={styles.nome}>{data.nome}</h2>

                <span className={styles.valores}>
                    <p className={styles.preco}>R$ {data.preco.toFixed(2)}</p>
                    <span className={styles.parcelamento}>3x de R$ {(data.preco/2.8).toFixed(2)}</span>
                </span>
            </div>
        </Link>
    );
}

export default ProductCard;
