import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import bagSVG from '../../../assets/product/shopping_bag.svg';
import Button from '../../forms/button/Button';
import Quantity from '../../forms/quantity/Quantity';
import RadioColor from '../../forms/radioColor/RadioColor';
import styles from './CustomerProduct.module.css';

const CustomerProduct = () => {
    const { id } = useParams();
    const { cartItems, setCartItems, storeCart } = React.useContext(UserContext);
    const [productData, setProductData] = React.useState(null);
    const [currentImage, setCurrentImage] = React.useState(0);
    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    React.useEffect(() => {
        async function fetchProduct () {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json();
            setProductData(data);
        }
        fetchProduct();

    }, [id]);

    function addToCart (e) {
        e.preventDefault();

        const idx = `${id},${color}`;

        const item = {
            id: productData.id,
            imgSrc: productData.images[0],
            name: productData.nome,
            color: color,
            price: productData.preco,
            quantity: (idx in cartItems) ? cartItems[idx].quantity += quantity : quantity,
            stock: productData.stock
        }

        const newCart = { ...cartItems, [`${productData.id},${color}`]: item };

        setCartItems(newCart);
        storeCart(newCart);
        setQuantity(1);
    }

    return (
        productData
        &&
        <>
            <section className={`${styles.gridProduct}`}>
                <div className={styles.photos}>
                    <div className={styles.imgPrincipal}>
                        <img src={productData.images[currentImage]} />
                    </div>

                    <div className={styles.secundarias}>
                        {
                            productData.images.map((image, i) => {
                                return (
                                    <div 
                                        key={i}
                                        className={`${styles.imgsec} ${(i === 0) && styles['active']}`}
                                        onClick={(e) => {
                                            setCurrentImage(i);

                                            const otherDivs = e.currentTarget.parentElement.children;
                                    
                                            Array.from(otherDivs).forEach((div) => {
                                                div.classList.remove(styles['active']);
                                            });

                                            e.currentTarget.classList.toggle(styles['active']);
                                        }}
                                    >
                                        <img src={image} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <form className={styles.details} onSubmit={addToCart}>
                    <div className={styles.header}>
                        <h1 className={`${styles.titulo}`}>{productData.nome}</h1>
                        <p className={`${styles.tipo}`}>{productData.category}</p>
                    </div>

                    <hr className={`${styles.separator}`} />

                    <div className={`${styles.valores}`}>
                        <p className={styles.total}>R$ {productData.preco}</p>
                        <span className={styles.parcelamento}>
                            <i className={styles.cardIcon} />
                            <p className={styles.parcelas}>{productData.parcelas}X de R$ {(productData.preco / productData.parcelas).toFixed(2)}</p>
                        </span>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.colorsContainer}>
                            <h2 className={`${styles.label}`}>Cor:</h2>

                            <div className={styles.colors}>
                            {
                                productData.colors.map((color, i) => {
                                    return (
                                        <RadioColor 
                                            key={i}
                                            nomeCor={color.nome}
                                            cor={color.hexa}
                                            setColor={setColor}
                                        />
                                    );
                                })
                            }
                            </div>
                        </div>

                        <div className={styles.quantityContainer}>
                            <h2 className={`${styles.label}`}>Quantidade:</h2>
                            
                            <Quantity max={productData.stock} quantity={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>

                    <span className={styles.btn}>
                        <Button value="ADICIONAR À SACOLA" icon={bagSVG} color='red' />
                    </span>
                </form>
            </section>

            <section className={styles.info}>
                <h2 className={`${styles.subtitulo}`}>Sobre o produto</h2>
                <p className={`${styles.texto}`}>{productData.description}</p>

                <h2 className={`${styles.subtitulo}`}>Especificações técnicas</h2>
                <ul className={styles.lista}>
                    <li>comprimento: <strong>{productData.comprimento}mm</strong></li>
                    <li>altura: <strong>{productData.altura}mm</strong></li>
                    <li>haste: <strong>{productData.haste}mm</strong></li>
                    <li>espaço nariz: <strong>{productData.espacoNariz}mm</strong></li>
                    <li>material: <strong>{productData.material}</strong></li>
                </ul>
            </section>
        </>
    );
}

export default CustomerProduct;
