import React from "react";
import Button from "../../forms/button/Button";
import Input from "../../forms/input/Input";
import addressSVG from '../../../assets/account/address.svg';
import formStyles from '../../forms/Forms.module.css';

const AddressEdit = ({ values }) => {
    //const [id, setId] = React.useState(values.id ? values.id : 0);
    const [nome, setNome] = React.useState(values?.nome ? values.nome : '');
    const [cep, setCep] = React.useState(values?.cep ? values.cep : '');
    const [rua, setRua] = React.useState(values?.rua ? values.rua : '');
    const [numero, setNumero] = React.useState(values?.numero ? values.numero : '');
    const [complemento, setComplemento] = React.useState(values?.complemento ? values.complemento : '');
    const [bairro, setBairro] = React.useState(values?.bairro ? values.bairro : '');
    const [estado, setEstado] = React.useState(values?.estado ? values.estado : '');
    const [cidade, setCidade] = React.useState(values?.cidade ? values.cidade : '');
    const [referencia, setReferencia] = React.useState(values?.referencia ? values.referencia : '');

    return (
        <>
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
        </>
    );
}

export default AddressEdit
