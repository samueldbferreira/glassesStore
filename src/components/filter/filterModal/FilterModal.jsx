import React from "react";
import styles from "./FilterModal.module.css";

const FilterModal = ({
	min,
	setMin,
	max,
	setMax,
	initial,
	setData,
	setActive,
}) => {
	const modal = React.useRef(null);
	let ignore = true;

	React.useEffect(() => {
		function closeModal(e) {
			if (!ignore && !modal.current.contains(e.target)) {
				setActive(false);
			}
			ignore = false;
		}

		document.body.addEventListener("click", closeModal);

		return () => {
			document.body.removeEventListener("click", closeModal);
		};
	});

	function filterProducts(e) {
		e.preventDefault();

		if (!min && !max) {
			setData(initial);
			return;
		}

		setData((d) => {
			return d.filter((product) => {
				if (min && max) {
					return product.preco >= min && product.preco <= max;
				} else if (max) {
					return product.preco <= max;
				} else {
					return product.preco >= min;
				}
			});
		});

		setActive(false);
	}

	function resetProducts() {
		setMin("");
		setMax("");
		setData(initial);
		setActive(false);
	}

	return (
		<form className={styles.modal} ref={modal} onSubmit={filterProducts}>
			<h3 className={styles.title}>Preço</h3>

			<label className={styles.label} htmlFor="min">
				mínimo
			</label>
			<input
				id="min"
				name="min"
				type="text"
				className={styles.input}
				value={min}
				onChange={(e) => {
					setMin(e.target.value);
				}}
			/>

			<label className={styles.label} htmlFor="max">
				máximo
			</label>
			<input
				id="max"
				name="max"
				type="text"
				className={styles.input}
				value={max}
				onChange={(e) => {
					setMax(e.target.value);
				}}
			/>

			<a className={styles.remove} onClick={resetProducts}>
				remover filtros
			</a>

			<button className={styles.btn}>FILTRAR</button>
		</form>
	);
};

export default FilterModal;
