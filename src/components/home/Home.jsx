import React from 'react';
import styles from './Home.module.css';
import productImage from '../../assets/product/home_img.svg';

const Home = () => {
  return (
    <section>
      <div className={styles.banner}>
        <img src={productImage} alt="Product" />
        <h1 className={styles.text}>Oculos moderno para a era digital!</h1>
      </div>
    </section>
  );
};

export default Home;
