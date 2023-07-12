import { Link } from "react-router-dom";
import { URL_BASE } from "../../services/Api";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data }) => {
	return (
		data && (
			<Link className={styles.product} to={`/produtos/${data._id}`}>
				<div className={styles.imageContainer}>
					<img src={`${URL_BASE}/${data.images[0]}`}/>
				</div>

				<div className={styles.details}>
					<h2 className={styles.nome}>{data.name}</h2>

					<span className={styles.valores}>
						<p className={styles.preco}>R$ {data.price.toFixed(2)}</p>
						{data.installments > 0 && (
							<span className={styles.parcelamento}>
								{data.installments}x de R${" "}
								{(data.price / data.installments).toFixed(2)}
							</span>
						)}
					</span>
				</div>
			</Link>
		)
	);
};

export default ProductCard;
