import React from 'react';
import cardSVG from '../../../assets/product/credit_card.svg';
import bagSVG from '../../../assets/product/shopping_bag.svg';
import Button from '../../forms/button/Button';
import Quantity from '../../forms/quantity/Quantity';
import RadioColor from '../../forms/radioColor/RadioColor';
import styles from './Product.module.css';


async function getProduct (url, setProduct) {
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data[0]);
}

//não sei como pegar o "id" do route, pfv substituir esse "1" pelo id se tiver tempo
const Product = ({ id=1 }) => {
    function addToCart(){

        fetch("http://localhost:3000/cart", {
            method: "post",

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                productid:id
            })
        })

    }

    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);
    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        getProduct('http://localhost:3000/products?id='+ id, setProduct);

        // console.log(id)
    }, []);

    return (
        <>
            <section className={`${styles.gridProduct} mb-52`}>
                <div className={styles.photos}>
                </div>

                <form className={styles.details}>
                    <div className="mb-24">
                        <h1 className={`${styles.titulo} mb-16`}>{product.nome}</h1>
                        <p className={`${styles.tipo}`}>anti luz azul</p>
                    </div>

                    <hr className={`${styles.separator} mb-28`} />

                    <div className={`${styles.valores} mb-44`}>
                        <p className={styles.total}>R$ {product.preco}</p>
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

                    <Button value="ADICIONAR À SACOLA" icon={bagSVG} color='red' onClick={addToCart}/>
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

export default Product;
