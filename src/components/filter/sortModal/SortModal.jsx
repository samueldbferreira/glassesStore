import React from "react";
import styles from "./SortModal.module.css";

const SortModal = ({ setActive, options, setOption, initial, setData }) => {
	const modal = React.useRef();

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

	function sortProducts(option) {
		return (e) => {
			e.preventDefault();

			setOption(option);

			if (option === "maior preço") {
				setData(
					[...initial].sort((a, b) => {
						return a.price < b.price ? 1 : -1;
					})
				);
			} else if (option === "menor preço") {
				setData(
					[...initial].sort((a, b) => {
						return a.price > b.price ? 1 : -1;
					})
				);
			} else {
				setData(initial);
			}

			setActive(false);
		};
	}

	return (
		<form className={styles.modal} ref={modal}>
			<ul className={styles.options}>
				<li className={styles.label}>Ordenar por</li>
				{options.map((option) => {
					return (
						<li
							key={option}
							className={styles.option}
							onClick={sortProducts(option)}
						>
							{option}
						</li>
					);
				})}
			</ul>
		</form>
	);
};

export default SortModal;
