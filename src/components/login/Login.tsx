import { Routes, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import LostPassword from "./LostPassword";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

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
