import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Feminino from "../pages/feminino/Feminino";
import Masculino from "../pages/masculino/Masculino";
import Grau from "../pages/grau/Grau";
import Sol from "../pages/sol/Sol";
import AntiLuzAzul from "../pages/anti-luz-azul/AntiLuzAzul";
import Product from "../pages/product/Product";
import Login from "../pages/login/Login";
import Faq from "../pages/faq/Faq";
import Terms from "../pages/terms/Terms";
import SearchResults from "../pages/searchResults/SearchResults";
import Products from "../pages/products/Products";
import CreateProduct from "../pages/createProduct/CreateProduct";
import Users from "../pages/users/Users";
import Account from "../pages/account/Account";
import Checkout from "../pages/checkout/Checkout";
import User from "../pages/user/User";
import ProtectedRoute from "../util/protectedRoute/ProtectedRoute";

const RoutesComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/feminino" element={<Feminino />} />

			<Route path="/masculino" element={<Masculino />} />

			<Route path="/oculos-de-grau" element={<Grau />} />

			<Route path="/oculos-de-sol" element={<Sol />} />

			<Route path="/oculos-anti-luz-azul" element={<AntiLuzAzul />} />

			<Route path="/busca" element={<SearchResults />} />

			<Route path="/produtos/:id" element={<Product />} />

			<Route path="/produtos" element={<Products />} />

			<Route
				path="/novo-produto"
				element={
					<ProtectedRoute admin={true} alternativeRoute="/">
						<CreateProduct />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/usuarios/:id"
				element={
					<ProtectedRoute admin={true} alternativeRoute="/">
						<User />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/usuarios"
				element={
					<ProtectedRoute admin={true} alternativeRoute="/">
						<Users />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/conta/*"
				element={
					<ProtectedRoute alternativeRoute="/">
						<Account />
					</ProtectedRoute>
				}
			/>

			<Route path="/login/*" element={<Login />} />

			<Route path="/checkout/*" element={<Checkout />} />

			<Route path="/perguntas" element={<Faq />} />

			<Route path="/termos" element={<Terms />} />

			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
};

export default RoutesComponent;
