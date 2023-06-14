import React from 'react';
import Input from '../../../forms/input/Input';
import Button from '../../../forms/button/Button';
import addressSVG from '../../../../assets/account/address.svg';
import formStyles from '../../../forms/Forms.module.css';
import styles from './ModalAddress.module.css';

const ModalAddress = ({ addressData, setModal }) => {
    const [nome, setNome] = React.useState(addressData.nome);
    const [cep, setCep] = React.useState(addressData.cep);
    const [rua, setRua] = React.useState(addressData.rua);
    const [numero, setNumero] = React.useState(addressData.numero);
    const [complemento, setComplemento] = React.useState(addressData.complemento);
    const [bairro, setBairro] = React.useState(addressData.bairro);
    const [estado, setEstado] = React.useState(addressData.estado);
    const [cidade, setCidade] = React.useState(addressData.cidade);
    const [referencia, setReferencia] = React.useState(addressData.referencia);

    function handleSubmit (e) {
        e.preventDefault();

        if (!bairro || !cep || !cidade || !estado || !nome || !numero || !rua) return; 
    
        async function putAddress () {
            const response = await fetch(`http://localhost:3000/addresses/${addressData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: addressData.id,
                    idCustomer: addressData.idCustomer,
                    nome,
                    cep,
                    rua,
                    numero,
                    complemento,
                    bairro,
                    estado,
                    cidade,
                    referencia
                })
            });

            if (response.ok) {
                window.location.reload();
            }
        }
        putAddress();
    }
    
    function closeModal (e) {
        if (e.currentTarget === e.target) {
            setModal(null);
        }
    }

    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>
                <div className={formStyles.formTitle}>
                    <h1 className={formStyles.title}>Alterar Endereço</h1>
                </div>
                
                <div className={`${formStyles.formContent} ${styles.formContent}`}>
                    <form onSubmit={handleSubmit}>
                        <p className={formStyles.instruction}>Preencha os dados abaixo</p>

                        <div className={`${formStyles.inputs} mb-72`}>
                            <Input
                                label="Nome do endereço"
                                type="text"
                                id="nome"
                                value={nome}
                                setValue={setNome}
                            />

                            <Input
                                label="CEP"
                                type="text"
                                id="cep"
                                value={cep}
                                setValue={setCep}
                            />

                            <Input
                                label="Rua"
                                type="text"
                                id="rua"
                                value={rua}
                                setValue={setRua}
                            />

                            <span className={formStyles.flexInputs}>
                                <Input
                                    label="Número"
                                    type="text"
                                    id="numero"
                                    value={numero}
                                    setValue={setNumero}
                                />

                                <Input
                                    label="Complemento"
                                    type="text"
                                    id="complemento"
                                    value={complemento}
                                    setValue={setComplemento}
                                />
                            </span>

                            <Input
                                label="Bairro"
                                type="text"
                                id="bairro"
                                value={bairro}
                                setValue={setBairro}
                            />

                            <span className={formStyles.flexInputs}>
                                <Input
                                    label="Estado"
                                    type="text"
                                    id="estado"
                                    value={estado}
                                    setValue={setEstado}
                                />

                                <Input
                                    label="Cidade"
                                    type="text"
                                    id="cidade"
                                    value={cidade}
                                    setValue={setCidade}
                                />
                            </span>

                            <Input
                                label="Ponto de referência"
                                type="text"
                                id="referencia"
                                value={referencia}
                                setValue={setReferencia}
                            />
                        </div>

                        <Button value="SALVAR ENDEREÇO" icon={addressSVG} />
                    </form>

                    <a 
                        className={`${formStyles.redirectUnderline}`}
                        onClick={closeModal}
                    >
                        cancelar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ModalAddress;
