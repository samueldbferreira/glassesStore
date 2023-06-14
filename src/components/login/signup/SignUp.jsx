import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Input from '../../forms/input/Input';
import Button from '../../forms/button/Button';
import Checkbox from '../../forms/checkbox/Checkbox';
import formStyles from '../../forms/Forms.module.css';

const SignUp = () => {
    const { userLogin } = React.useContext(UserContext);

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [terms, setTerms] = React.useState(false);

    function postUser (e) {
        e.preventDefault();

        async function fetchData () {
            const response = await fetch('http://localhost:3000/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "phone": '',
                    "email": email,
                    "password": password,
                    "admin": false
                })
            });

            if (response.ok) {
                userLogin(email, password);
            }
        }

        if (!firstName || !lastName || !email || !password || !terms) return;
        
        fetchData();
    }

    return (
        <form className={formStyles.form} onSubmit={postUser}>
            <div className={formStyles.formTitle}>
                <h1 className={formStyles.title}>Cadastro</h1>
            </div>

            <div className={formStyles.formContent}>
                <p className={formStyles.instruction}>Preencha as informações abaixo:</p>

                <div className={`${formStyles.inputs} mb-36`}>
                    <Input
                        label="Primeiro nome"
                        type="text"
                        id="firstName"
                        value={firstName}
                        setValue={setFirstName}
                    />

                    <Input
                        label="Sobrenome"
                        type="text"
                        id="lastName"
                        value={lastName}
                        setValue={setLastName}
                    />

                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        setValue={setEmail}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        id="password"
                        value={password}
                        setValue={setPassword}
                    />

                    <Checkbox
                        label='Li e estou de acordo com os termos e condições do site.'
                        id='termos'
                        value={terms}
                        setValue={setTerms}
                    />
                </div>

                <Button classname='mb-32' value="CRIAR CONTA" />

                <p className={`${formStyles.redirectUnderline}`}><Link to="/login">voltar para o login</Link></p>
            </div>
        </form>
    );
}

export default SignUp;
