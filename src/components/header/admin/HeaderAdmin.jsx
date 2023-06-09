import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderAdmin.module.css";
import AdminMenuModal from "./adminMenuModal/AdminMenuModal";

const HeaderAdmin = () => {
  const [mobile, setMobile] = React.useState(false);
  const [menuModal, setMenuModal] = React.useState(false);

  React.useEffect(() => {
    function checkResize() {
      setMobile(window.matchMedia("(max-width: 840px)").matches);
    }

    window.addEventListener("resize", checkResize);

    checkResize();

    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, [mobile]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerSupra}`}>
        {mobile && (
          <a
            onClick={() => {
              setMenuModal(true);
            }}
          >
            <i className={styles.menuIcon} />
          </a>
        )}

        <Link to="/produtos">
          <i className={styles.logo} />
        </Link>

        {mobile && <Link to="/account" className={styles.accountIcon} />}
      </div>

      {!mobile && (
        <div className={styles.headerInfra}>
          <nav className={`container ${styles.infraNav}`}>
            <span className={styles.infraList}>
              <NavLink to={"/produtos"} className={styles.linkMenu}>
                produtos
              </NavLink>

              <NavLink to={"/novo-produto"} className={styles.linkMenu}>
                novo produto
              </NavLink>

              <NavLink to={"/usuarios/"} className={styles.linkMenu}>
                usuários
              </NavLink>
            </span>

            <span className={styles.account}>
              <Link to="/conta" className={styles.linkMenu}>
                conta
              </Link>
              <i className={styles.accountIcon} />
            </span>
          </nav>
        </div>
      )}

      {mobile && menuModal && <AdminMenuModal setMenuModal={setMenuModal} />}
    </header>
  );
};

export default HeaderAdmin;
