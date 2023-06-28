import React from "react";
import TitleSearch from "../../components/titleSearch/TitleSearch";
import Filter from "../../components/filter/Filter";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import { GET_PRODUCTS } from "../../services/Api";
import useFetch from "../../customHooks/useFetch";

const Products = () => {
  const { data, request } = useFetch();
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    const { url, options } = GET_PRODUCTS();

    async function fetchProducts() {
      const json = await request(url, options);
      setProducts(json);
    }
    fetchProducts();
  }, [request]);

  return (
    data && (
      <>
        <TitleSearch
          title="Produtos"
          initial={data}
          setData={setProducts}
          searchAttributes={['nome', 'id']}
        />

        <Filter initial={data} data={products} setData={setProducts} />

        <ProductsGrid data={products} />
      </>
    )
  );
};

export default Products;
