import { Routes, Route } from "react-router-dom";
import AdminProducts from "./products/AdminProducts";
import AdminUsers from "./users/AdminUsers";
import AdminUser from "./user/AdminUser";

const AdminAccount = () => {
    return (
        <section>
            <Routes>
                <Route
                    path='/'
                    element={<AdminProducts />}
                />
                
                {
                    /*
                    <Route 
                        path="novo"
                        element={<AdminCreateProduct />}
                    />
                    */
                }
                
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
