import React from 'react';
import AddressCard from '../../addresses/addressCard/AddressCard';
import CartItem from '../../cart/cartItem/cartItem';
import Input from '../../forms/input/Input';
import Button from '../../forms/button/Button';
import formStyles from '../../forms/Forms.module.css';
import styles from './Payment.module.css';

const address =   {
  id: 1,
  nome: 'Endereço principal',
  cep: '00000-000',
  rua: 'Rua vinte e dois',
  numero: '495',
  complemento: 'teste',
  bairro: 'Belém Capela',
  estado: 'SP',
  cidade: 'São Paulo',
  referencia: 'perto do teste'
};

const Payment = () => {
  const [numero, setNumero] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [vencimento, setVencimento] = React.useState('');
  const [codigo, setCodigo] = React.useState('');
  const [parcelamento, setParcelamento] = React.useState(1);

  return (
    <section className={`${styles.grid} ${styles.container}`}>
      <div>
        <div className={styles.address}>
          <span className={`${styles.titleChange}`}>
            <h2 className={styles.title}>ENDEREÇO</h2>
            <a className={styles.change}>alterar</a>
          </span>

          <AddressCard 
            data={address}
            controls={false}
          />
        </div>

        <div>
          <span className={`${styles.titleChange}`}>
            <h2 className={styles.title}>SACOLA DE COMPRAS</h2>
            <a className={styles.change}>alterar</a>
          </span>

          <ul className={styles.content}>
            <li className={styles.item}>
              <CartItem controls={false} />
            </li>
            
            <li className={styles.item}>
              <CartItem controls={false} />
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.payment}`}>
        <h2 className={`${styles.title} ${styles.titlePayment}`}>FORMA DE PAGAMENTO</h2>

        <div className={`${formStyles.inputs} ${styles.inputsPayment}`}>
          <Input
            label='Número do cartão'
            id='numero'
            type='text'
            value={numero}
            setValue={setNumero}
          />

          <Input
            label='Nome do titular'
            id='nome'
            type='text'
            value={nome}
            setValue={setNome}
          />

          <span className={formStyles.flexInputs}>
            <Input
              label='Vencimento (MM/AA)'
              id='vencimento'
              type='text'
              value={vencimento}
              setValue={setVencimento}
            />

            <Input
              label='Código de segurança'
              id='codigo'
              type='number'
              value={codigo}
              setValue={setCodigo}
            />
          </span>

          <Input
              label='Parcelamento'
              id='parcelamento'
              type='number'
              value={parcelamento}
              setValue={setParcelamento}
            />
        </div>

        <Button
          value={'FINALIZAR COMPRA'}
          style={'red'}
        />   
      </div>
    </section>
  )
};

export default Payment;
