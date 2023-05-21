import React from 'react';
import { useParams } from "react-router-dom";

import Intro from "../util/Intro";
import GridProducts from "./GridProducts";

import { ITitles, IProduct } from './Products.interfaces';


function isKeyOfTitles(key: string): key is keyof ITitles {
    return (key === 'feminino' || key === 'masculino' || key === 'grau' || key ===  'sol' || key === 'antiluz');
}

async function fetchData <T> (url: string) : Promise<T | null> {
    const response = await fetch(url);
    
    if (!response.ok) return null;
    else return await response.json();
}

async function getTitleDescription (url: string, category: string | undefined, setTitle: React.Dispatch<React.SetStateAction<string>>, setDescription: React.Dispatch<React.SetStateAction<string>>) {
    const data = await fetchData<ITitles>(url);

    if (data && category && isKeyOfTitles(category)) {
        setTitle(data[category].title)
        setDescription(data[category].description)
    }
}

async function getProducts (url: string, setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>) {
    const data = await fetchData<IProduct[]>(url);

    if (data) {
        setProducts(data)
    }
}


const Products = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [products, setProducts] = React.useState<IProduct[] |undefined>(undefined);

    const { category } = useParams();

    React.useEffect(() => {
        getTitleDescription('http://localhost:5173/src/data/titles.json', category, setTitle, setDescription)
        getProducts('http://localhost:5173/src/data/products.json', setProducts);
    }, [category]);

    if (!products) return null;

    return (
       <section>
            <Intro 
                title={title}
                text={description}
                classname={`mb-40`}
            />
            <GridProducts
                data={products}
            />
       </section> 
    );
}

export default Products;
