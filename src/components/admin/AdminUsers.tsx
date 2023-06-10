import React from 'react'
import AdminTitleSearch from './titleSearch/AdminTitleSearch';
import UsersList from './users/UsersList';


const AdminUsers = () => {
  const [query, setQuery] = React.useState('');

  return (
    <section>
       <AdminTitleSearch
        title={'Usuários'}
        label={'id ou nome do usuário'}
        id='query'
        type={'text'}
        value={query}
        setValue={setQuery}
        classname='mb-40'
      />

      <UsersList />
    </section>
  )
}

export default AdminUsers
