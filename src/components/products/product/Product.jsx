import React from 'react';
import bagSVG from '../../../assets/product/shopping_bag.svg';
import Button from '../../forms/button/Button';
import Quantity from '../../forms/quantity/Quantity';
import RadioColor from '../../forms/radioColor/RadioColor';
import styles from './Product.module.css';

const Product = ({ id }) => {
    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    return (
        <>
            <section className={`${styles.gridProduct}`}>
                <div className={styles.photos}>
                    <div className={styles.imgPrincipal}>
                    </div>

                    <div className={styles.secundarias}>
                        <div className={styles.imgsec}>
                        </div>

                        <div className={styles.imgsec}>
                        </div>

                        <div className={styles.imgsec}>
                        </div>
                    </div>
                </div>

                <form className={styles.details}>
                    <div className={styles.header}>
                        <h1 className={`${styles.titulo}`}>Óculos Addis</h1>
                        <p className={`${styles.tipo}`}>anti luz azul</p>
                    </div>

                    <hr className={`${styles.separator}`} />

                    <div className={`${styles.valores}`}>
                        <p className={styles.total}>R$ 199, 99</p>
                        <span className={styles.parcelamento}>
                            <i className={styles.cardIcon} />
                            <p className={styles.parcelas}>3X de R$ 56,66</p>
                        </span>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.colorsContainer}>
                            <h2 className={`${styles.label}`}>Cor:</h2>

                            <div className={styles.colors}>
                                <RadioColor 
                                    nomeCor="preto"
                                    cor="#2E3034"
                                    setColor={setColor}
                                />

                                <RadioColor 
                                    nomeCor="vermelho"
                                    cor="#D94A4A"
                                    setColor={setColor}
                                />


                                <RadioColor 
                                    nomeCor="azul"
                                    cor="#3C69AC"
                                    setColor={setColor}
                                />

                                <RadioColor 
                                    nomeCor="amarelo"
                                    cor="#E3E725"
                                    setColor={setColor}
                                />
                            </div>
                        </div>

                        <div className={styles.quantityContainer}>
                            <h2 className={`${styles.label}`}>Quantidade:</h2>
                            
                            <Quantity max={10} quantity={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>

                    <Button value="ADICIONAR À SACOLA" icon={bagSVG} color='red' />
                </form>
            </section>

            <section className={styles.info}>
                <h2 className={`${styles.subtitulo}`}>Sobre o produto</h2>
                <p className={`${styles.texto}`}>Exclusiva, a Camisa Personalizável Listrada Marinho permite a personalização com as suas iniciais, localizado no punho direito. O modelo foi desenvolvido em tecido tricoline que é super respirável e ideal para usar nos dias mais quentes, além transitar muito bem pelas estações. A camisa conta com a modelagem Slim, ajusta ao corpo de forma confortável, valorizando sua silhueta.</p>

                <h2 className={`${styles.subtitulo}`}>Especificações técnicas</h2>
                <ul className={styles.lista}>
                    <li>comprimento: <strong>136mm</strong></li>
                    <li>altura: <strong>53mm</strong></li>
                    <li>haste: <strong>140mm</strong></li>
                    <li>espaço nariz: <strong>16mm</strong></li>
                    <li>material: <strong>LIGA</strong></li>
                </ul>
            </section>
        </>
    );
}

export default Product;
