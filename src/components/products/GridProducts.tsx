import { IProduct } from "./Products.interfaces";

import Product from "./Product";

import styles from './GridProducts.module.css';


interface GridProductsProps {
    data: IProduct[];
}


const GridProducts = ({ data } : GridProductsProps) => {
    return (
        <div className={styles.grid}>
            {data.map((product) => {
                return (
                    <Product key={product.id} data={product} />
                );
            })}
        </div>
    );
}

export default GridProducts;
