import productImage from "../../assets/home_img.svg";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<section>
			<div className={styles.banner}>
				<img src={productImage} />
				<h1 className={styles.text}>Óculos Moderno para a Era Digital.</h1>
			</div>
		</section>
	);
};

export default Home;
