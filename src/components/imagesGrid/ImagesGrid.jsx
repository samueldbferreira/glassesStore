import React from "react";
import { URL_BASE } from "../../services/Api";
import styles from "./ImagesGrid.module.css";

const ImagesGrid = ({ images }) => {
	const [currentImage, setCurrentImage] = React.useState(0);
	const selectedImage = React.useRef();

	function handleClick(idx) {
		return (e) => {
			setCurrentImage(idx);
			selectedImage?.current.classList.remove(styles["active"]);
			selectedImage.current = e.currentTarget;
			selectedImage.current.classList.add(styles["active"]);
		};
	}

	return (
		images && (
			<div className={styles.photos}>
				<div className={styles.imgPrincipal}>
					<img
						src={`${URL_BASE}/${images[currentImage]}`}
					/>
				</div>

				<ul className={styles.secundarias}>
					<li
						key={0}
						ref={selectedImage}
						className={`${styles.imgsec} ${styles.active}`}
						onClick={handleClick(0)}
					>
						<img src={`${URL_BASE}/${images[0]}`} />
					</li>

					{images.slice(1).map((image, i) => {
						return (
							<li
								key={i + 1}
								className={`${styles.imgsec}`}
								onClick={handleClick(i + 1)}
							>
								<img src={`${URL_BASE}/${image.replaceAll("\\", "/")}`} />
							</li>
						);
					})}
				</ul>
			</div>
		)
	);
};

export default ImagesGrid;
