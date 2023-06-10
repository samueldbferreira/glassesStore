import React from 'react';

import TitleID from "./titleID/TitleID";
import Input from "../forms/input/Input";
import InputLabel from '../forms/input/InputLabel'


const AdminCreateProduct = () => {
  const [nome, setNome] = React.useState('');
  const [tipo, setTipo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [quantidade, setQuantidade] = React.useState(0);

  return(
    <section>
      <TitleID
        title="Novo Produto"
      />

      <form>
        <Input
          label='Nome'
          id='nome'
          type='text'
          value={nome}
          setValue={setNome}
        />

        <Input
          label='Descricao'
          id='descricao'
          type='text'
          value={descricao}
          setValue={setDescricao}
        />

        <Input
          label='Preço'
          id='preco'
          type='text'
          value={preco}
          setValue={setPreco}
        />

        <InputLabel
          
        />

        <input placeholder="test" type="file" name="" id="" />
      </form>
    </section>
  );
}

export default AdminCreateProduct;
