import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
	const navigate = useNavigate();
	const [query, setQuery] = React.useState("");

	function searchProducts(e) {
		e.preventDefault();

		if (!query) return;

		navigate(`/busca?q=${query}`);
	}

	return (
		<form className={`${styles.searchBar}`} onSubmit={searchProducts}>
			<input
				type="text"
				className={`${styles.input}`}
				placeholder="buscar..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>

			<button type="submit" className={`${styles.searchIcon}`} />
		</form>
	);
};

export default SearchBar;
