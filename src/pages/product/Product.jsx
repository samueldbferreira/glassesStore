import React from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import useFetch from "../../customHooks/useFetch";
import { GET_PRODUCT } from "../../services/Api";
import ProductAdmin from "./admin/ProductAdmin";
import ProductCustomer from "./customer/ProductCustomer";

const Product = () => {
  const { id } = useParams();
  const { userData } = React.useContext(UserContext);
  const { data, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PRODUCT(id);

    async function fetchProduct() {
      await request(url, options);
    }
    fetchProduct();
  }, [id, request]);

  if (userData?.admin === true && data) {
    return <ProductAdmin data={data} />;
  } else if (data) {
    return <ProductCustomer data={data} />;
  } else {
    return null;
  }
};

export default Product;
