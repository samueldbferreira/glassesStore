import Button from "../../forms/button/Button";
import Input from "../../forms/input/Input";
import addressSVG from '../../../assets/account/address.svg';
import formStyles from '../../forms/Forms.module.css';

const AddressEdit = ({ values, setValues }) => {
    return (
        <>
            <p className={formStyles.instruction}>Preencha os dados abaixo</p>

            <div className={`${formStyles.inputs} mb-72`}>
                <Input
                    label="Nome do endereço"
                    type="text"
                    id="nome"
                    value={values.nome}
                    setValue={setValues.setNome}
                />

                <Input
                    label="CEP"
                    type="text"
                    id="cep"
                    value={values.cep}
                    setValue={setValues.setCep}
                />

                <Input
                    label="Rua"
                    type="text"
                    id="rua"
                    value={values.rua}
                    setValue={setValues.setRua}
                />

                <span className={formStyles.flexInputs}>
                    <Input
                        label="Número"
                        type="text"
                        id="numero"
                        value={values.numero}
                        setValue={setValues.setNumero}
                    />

                    <Input
                        label="Complemento"
                        type="text"
                        id="complemento"
                        value={values.complemento}
                        setValue={setValues.setComplemento}
                    />
                </span>

                <Input
                    label="Bairro"
                    type="text"
                    id="bairro"
                    value={values.bairro}
                    setValue={setValues.setBairro}
                />

                <span className={formStyles.flexInputs}>
                    <Input
                        label="Estado"
                        type="text"
                        id="estado"
                        value={values.estado}
                        setValue={setValues.setEstado}
                    />

                    <Input
                        label="Cidade"
                        type="text"
                        id="cidade"
                        value={values.cidade}
                        setValue={setValues.setCidade}
                    />
                </span>

                <Input
                    label="Ponto de referência"
                    type="text"
                    id="referencia"
                    value={values.referencia}
                    setValue={setValues.setReferencia}
                />
            </div>

            <Button value="SALVAR ENDEREÇO" icon={addressSVG} />
        </>
    );
}

export default AddressEdit
