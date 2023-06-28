import React from "react";
import { UserContext } from "../../../context/UserContext";
import Quantity from "../../../components/quantity/Quantity";
import RadioColor from "../../../components/radioColor/RadioColor";
import ImagesGrid from "../../../components/imagesGrid/ImagesGrid";
import Button from "../../../components/button/Button";
import bagSVG from "../../../assets/product/shopping_bag.svg";
import styles from "./ProductCustomer.module.css";

const ProductCustomer = ({ data }) => {
  const { cartItems, setCartItems, storeCart } = React.useContext(UserContext);
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("");

  function addToCart(e) {
    e.preventDefault();

    if (!quantity || !color) return;

    const idx = `${data.id},${color}`;

    const item = {
      id: data.id,
      imgSrc: data.images[0],
      name: data.nome,
      color: color,
      price: data.preco,
      quantity:
        idx in cartItems ? (cartItems[idx].quantity += quantity) : quantity,
      stock: data.stock,
    };

    const newCart = { ...cartItems, [idx]: item };

    setCartItems(newCart);
    storeCart(newCart);
    setQuantity(1);
  }

  return (
    data && (
      <>
        <div className={styles.gridProduct}>
          <ImagesGrid images={data.images} />

          <form className={styles.details} onSubmit={addToCart}>
            <div className={styles.header}>
              <h1 className={`${styles.titulo}`}>{data.nome}</h1>
              <p className={`${styles.stock}`}>{data.stock} disponíveis</p>
            </div>

            <hr className={`${styles.separator}`} />

            <div className={`${styles.valores}`}>
              <p className={styles.total}>R$ {data.preco}</p>
              {data.parcelas > 0 && (
                <span className={styles.parcelamento}>
                  <i className={styles.cardIcon} />
                  <p className={styles.parcelas}>
                    {data.parcelas}X de R${" "}
                    {(data.preco / data.parcelas).toFixed(2)}
                  </p>
                </span>
              )}
            </div>

            <div className={styles.form}>
              <div className={styles.colorsContainer}>
                <h2 className={`${styles.label}`}>Cor:</h2>

                <RadioColor
                  colors={data.colors}
                  value={color}
                  setValue={setColor}
                />
              </div>

              <div className={styles.quantityContainer}>
                <h2 className={`${styles.label}`}>Quantidade:</h2>

                <Quantity
                  min={1}
                  max={data.stock}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
            </div>

            <span className={styles.btn}>
              <Button value="ADICIONAR À SACOLA" icon={bagSVG} color="red" />
            </span>
          </form>
        </div>

        <section className={styles.info}>
          <h2 className={`${styles.subtitulo}`}>Sobre o produto</h2>
          <p className={`${styles.texto}`}>{data.description}</p>

          <h2 className={`${styles.subtitulo}`}>Especificações técnicas</h2>
          <ul className={styles.lista}>
            <li>
              comprimento: <strong>{data.comprimento}mm</strong>
            </li>
            <li>
              altura: <strong>{data.altura}mm</strong>
            </li>
            <li>
              haste: <strong>{data.haste}mm</strong>
            </li>
            <li>
              espaço nariz: <strong>{data.espacoNariz}mm</strong>
            </li>
            <li>
              material: <strong>{data.material}</strong>
            </li>
          </ul>
        </section>
      </>
    )
  );
};

export default ProductCustomer;
