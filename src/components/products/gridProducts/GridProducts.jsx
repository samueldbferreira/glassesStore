import React from 'react';
import styles from './GridProducts.module.css';
import ProductCard from '../productCard/ProductCard';

const GridProducts = ({ category }) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        async function fetchProducts () {
            const urlBase = `http://localhost:3000/products`;

            const url = category ? `${urlBase}?category=${category}` : urlBase;

            const response = await fetch(url);
            const data = await response.json();
            
            setProducts(data);
        }
        fetchProducts();

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
