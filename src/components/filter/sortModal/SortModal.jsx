import React from "react";
import styles from "./SortModal.module.css";

const SortModal = ({ setActive, options, setOption, data, setData }) => {
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
					[...data].sort((a, b) => {
						return a.preco < b.preco ? 1 : -1;
					})
				);
			} else if (option === "menor preço") {
				setData(
					[...data].sort((a, b) => {
						return a.preco > b.preco ? 1 : -1;
					})
				);
			} else {
				console.log(option);
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
