import React from 'react';
import { useParams } from "react-router-dom";
import GridProducts from '../gridProducts/GridProducts';
import TitleDescription from '../../sectionTitle/description/TitleDescription';

async function getTitleDescription (category, setTitle, setDescription) {
  const response = await fetch('http://localhost:5173/src/data/titles.json');
  const data = await response.json();

  setTitle(data[category].title);
  setDescription(data[category].description);
}

const Products = () => {
  const { category } = useParams();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    getTitleDescription(category, setTitle, setDescription);
  }, [category]);

  return (
    <section>
      <TitleDescription
        title={title}
        description={description}
        classname={'mb-40'}
      />

      <GridProducts
        category={category}
      />
    </section>
  )
}

export default Products;
