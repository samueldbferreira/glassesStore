import React from 'react';

import styles from './GridProducts.module.css';
import ProductCard from '../productCard/ProductCard';

async function getProducts (url, setProducts) {
    const response = await fetch(url);
    const data = await response.json();

    setProducts(data);
}

const GridProducts = ({ category }) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getProducts('http://localhost:3000/products', setProducts);
    }, [category]);

    return (
        <div className={styles.products}>
            <ul className={styles.grid}>
                {
                    products.map((productData) => {
                        return(
                            <li key={productData.id}>
                                <ProductCard data={productData} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default GridProducts;
