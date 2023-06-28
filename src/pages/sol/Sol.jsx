import React from "react";
import useFetch from "../../customHooks/useFetch";
import { GET_PRODUCTS } from "../../services/Api";
import TitleDescription from "../../components/titleDescription/TitleDescription";
import Filter from "../../components/filter/Filter";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";

const Sol = () => {
  const [products, setProducts] = React.useState(null);
  const { data, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PRODUCTS("oculos-de-sol");

    async function fetchProducts() {
      const json = await request(url, options);
      setProducts(json);
    }
    fetchProducts();
  }, [request]);

  return (
    <>
      <TitleDescription
        title={"Óculos de sol"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      />

      {data && <Filter initial={data} data={products} setData={setProducts} />}

      {data && <ProductsGrid data={products} />}
    </>
  );
};

export default Sol;
