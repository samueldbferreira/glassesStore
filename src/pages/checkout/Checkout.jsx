import { Route, Routes } from "react-router-dom";
import Bag from "./bag/Bag";
import Payment from "./payment/Payment";
import ProtectedRoute from "../../util/protectedRoute/ProtectedRoute";

const Checkout = () => {
	return (
		<Routes>
			<Route path="/sacola" element={<Bag />} />

			<Route
				path="/pagamento"
				element={
					<ProtectedRoute alternativeRoute="/">
						<Payment />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};

export default Checkout;
