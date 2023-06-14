import { Routes, Route } from "react-router-dom";
import AdminProducts from "./products/AdminProducts";
import AdminUsers from "./users/AdminUsers";
import AdminUser from "./user/AdminUser";
import CreateProduct from "./createProduct/CreateProduct";

const AdminAccount = () => {
    return (
        <section>
            <Routes>
                <Route
                    path='/'
                    element={<AdminProducts />}
                />
                
                <Route 
                    path="novo"
                    element={<CreateProduct />}
                />
                
                <Route 
                    path="usuarios"
                    element={<AdminUsers />}
                />

                
                <Route
                    path="usuarios/:id"
                    element={<AdminUser />}
                />
            </Routes>
        </section>
    );
}

export default AdminAccount;
