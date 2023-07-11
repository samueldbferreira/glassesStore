import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import { GET_PRODUCTS } from "../../services/Api";
import Filter from "../../components/filter/Filter";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
	const [searchParams] = useSearchParams();
	const { data, request } = useFetch();
	const [products, setProducts] = React.useState(null);

	React.useEffect(() => {
		const query = searchParams.get("q").toLowerCase().trim();

		const { url, options } = GET_PRODUCTS();

		async function fetchProducts() {
			const json = await request(url, options);

			setProducts(
				json.filter((p) => {
					return p.name.toLowerCase().includes(query);
				})
			);
		}
		fetchProducts();
	}, [searchParams, request]);

	return (
		data && (
			<>
				<h1 className={styles.title}>RESULTADOS</h1>

				<Filter initial={data} data={products} setData={setProducts} />

				<ProductsGrid data={products} />
			</>
		)
	);
};

export default SearchResults;
