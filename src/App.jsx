import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import RoutesComponent from "./routes/RoutesComponent";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<UserStorage>
						<Header />

						<main className="container">
							<RoutesComponent />
						</main>

						<Footer />
					</UserStorage>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
