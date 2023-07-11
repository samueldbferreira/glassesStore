import React from "react";
import TitleSearch from "../../components/titleSearch/TitleSearch";
import Filter from "../../components/filter/Filter";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import { GET_PRODUCTS } from "../../services/Api";

const Products = () => {
	const [initial, setInitial] = React.useState(null);
	const [products, setProducts] = React.useState(null);

	React.useEffect(() => {
		const { url, options } = GET_PRODUCTS();

		async function fetchProducts() {
			const response = await fetch(url, options);
			const json = await response.json();
			setInitial(json);
			setProducts(json);
		}
		fetchProducts();
	}, []);

	return (
		products && (
			<>
				<TitleSearch
					title="Produtos"
					initial={initial}
					setData={setProducts}
					searchAttributes={["name", "_id"]}
				/>

				<Filter initial={initial} data={products} setData={setProducts} />

				<ProductsGrid data={products} />
			</>
		)
	);
};

export default Products;
