import React from 'react';
import { useParams } from "react-router-dom";
import GridProducts from '../gridProducts/GridProducts';
import TitleDescription from '../../sectionTitle/description/TitleDescription';

const Products = () => {
  const { category } = useParams();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    async function fetchTitleDescription () {
      const response = await fetch(` http://localhost:3000/titleDescription/${category}`);
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
    }
    fetchTitleDescription();

  }, [category]);

  return (
    <section>
      <TitleDescription
        title={title}
        description={description}
      />

      <GridProducts
        category={category}
      />
    </section>
  )
}

export default Products;
