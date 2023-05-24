import React from 'react';
import RadioColor from '../forms/radioColor/RadioColor';

import cardSVG from '../../assets/product/credit_card.svg';
import bagSVG from '../../assets/product/shopping_bag.svg';

import styles from './ProductDetails.module.css';
import Button from '../forms/button/Button';
import Quantity from '../forms/quantity/Quantity';


const ProductDetails = () => {
    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    return (
        <>
            <section className={`${styles.gridProduct} mb-52`}>
                <div className={styles.photos}>
                </div>

                <form className={styles.details}>
                    <div className="mb-24">
                        <h1 className={`${styles.titulo} mb-16`}>Óculos Addis</h1>
                        <p className={`${styles.tipo}`}>anti luz azul</p>
                    </div>

                    <hr className={`${styles.separator} mb-28`} />

                    <div className={`${styles.valores} mb-44`}>
                        <p className={styles.total}>R$ 199, 99</p>
                        <span className={styles.parcelamento}>
                            <img src={cardSVG} />
                            <p className={styles.parcelas}>3X de R$ 56, 66 sem juros</p>
                        </span>
                    </div>

                    <div className='mb-36'>
                        <h2 className={`${styles.label} mb-8`}>Cor:</h2>

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

                    <div className='mb-72'>
                        <h2 className={`${styles.label} mb-8`}>Quantidade:</h2>
                        <Quantity max={10} quantity={quantity} setQuantity={setQuantity} />
                    </div>

                    <Button value="ADICIONAR À SACOLA" icon={bagSVG} color='red' />
                </form>
            </section>

            <section className={styles.info}>
                <h2 className={`${styles.subtitulo} mb-16`}>Sobre o produto</h2>
                <p className={`${styles.texto} mb-44`}>Exclusiva, a Camisa Personalizável Listrada Marinho permite a personalização com as suas iniciais, localizado no punho direito. O modelo foi desenvolvido em tecido tricoline que é super respirável e ideal para usar nos dias mais quentes, além transitar muito bem pelas estações. A camisa conta com a modelagem Slim, ajusta ao corpo de forma confortável, valorizando sua silhueta.</p>

                <h2 className={`${styles.subtitulo} mb-16`}>Especificações técnicas</h2>
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

export default ProductDetails;
