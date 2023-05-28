import React from 'react';
import AdminTitleSearch from './titleSearch/AdminTitleSearch';
import GridProducts from '../products/GridProducts';
import { IProduct } from '../products/Products.interfaces';


async function getProducts (url: string, setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>) {
  const data = await fetchData<IProduct[]>(url);

  if (data) {
      setProducts(data)
  }
}

async function fetchData <T> (url: string) : Promise<T | null> {
  const response = await fetch(url);
  
  if (!response.ok) return null;
  else return await response.json();
}

const AdminProducts = () => {
  const [products, setProducts] = React.useState<IProduct[] | undefined>(undefined);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    getProducts('http://localhost:5173/src/data/products.json', setProducts);
  }, []);

  if (!products) return null;

  return (
    <section>
      <AdminTitleSearch
        title={'Produtos'}
        label={'id ou nome do produto'}
        id='query'
        type={'text'}
        value={query}
        setValue={setQuery}
        classname={`mb-40`}
      />

      <GridProducts
        data={products}
      />
    </section>
  )
}

export default AdminProducts
