import { Routes, Route } from "react-router-dom";
import AdminProducts from "./AdminProducts";
import AdminCreateProduct from "./AdminCreateProduct";
import AdminUsers from "./AdminUsers";
import AdminUser from "./users/AdminUser";


const Admin = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<AdminProducts />} />
                <Route path="novo" element={<AdminCreateProduct />} />
                <Route path="usuarios" element={<AdminUsers />} />
                <Route path="usuarios/:id" element={<AdminUser />} />
            </Routes>
        </section>
    );
}

export default Admin;
