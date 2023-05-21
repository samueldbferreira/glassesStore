import { Link } from 'react-router-dom';

import { IProduct } from './Products.interfaces';

import styles from './Product.module.css';


interface ProductProps {
    data: IProduct;
}

const Product = ({ data } : ProductProps) => {
    return (
        <Link className={styles.product} to={`/product/${data.id}`}>
            <div className={styles.imageContainer}>
                <img src={data.imagem} alt="" />
            </div>

            <div className={styles.details}>
                <h2 className={styles.nome}>{data.nome}</h2>

                <span className={styles.valores}>
                    <p className={styles.preco}>R$ 199, 99</p>
                    <span className={styles.parcelamento}>3x de R$ 66, 66</span>
                </span>
            </div>
        </Link>
    );
}

export default Product;
