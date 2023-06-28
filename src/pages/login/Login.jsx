import LoginForm from "./loginForm/LoginForm";
import LostPassword from "./lostPassword/LostPassword";
import ResetPassword from "./resetPassword/ResetPassword";
import Signup from "./signup/Signup";
import { Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      <Route path="recuperar" element={<LostPassword />} />

      <Route path="redefinir" element={<ResetPassword />} />

      <Route path="cadastro" element={<Signup />} />
    </Routes>
  );
};

export default Login;
