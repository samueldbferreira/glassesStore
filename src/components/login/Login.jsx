import { Routes, Route } from "react-router-dom";
import LoginForm from './login/LoginForm';
import LostPassword from './lost/LostPassword';
import SignUp from './signup/SignUp';
import ResetPassword from './reset/ResetPassword';
import formStyles from '../forms/Forms.module.css';

const Login = () => {
    return (
        <section className={formStyles.formContainer}>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="recuperar" element={<LostPassword />} />
                <Route path="redefinir" element={<ResetPassword />} />
                <Route path="cadastro" element={<SignUp />} />
            </Routes>   
        </section>
    );
}

export default Login;
