import React from 'react';
import GridProducts from '../../../products/gridProducts/GridProducts';
import TitleSearch from '../../../sectionTitle/search/TitleSearch';

const AdminProducts = () => {
    const [query, setQuery] = React.useState('');

    return (
        <section>
            <TitleSearch
                title={'Produtos'}
                label={'id ou nome do produto'}
                id='query'
                type={'text'}
                value={query}
                setValue={setQuery}
                classname={`mb-40`}
            />

            <GridProducts />
        </section>
    );
}

export default AdminProducts
