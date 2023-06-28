import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import styles from "./AdminMenuModal.module.css";

const MenuModalAdmin = ({ setMenuModal }) => {
  const { login, logout } = React.useContext(UserContext);

  function closeModal() {
    setMenuModal(false);
  }

  function outsideClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return (
    <div className={styles.modal} onClick={outsideClick}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link to="/conta">
            <h1 className={styles.title} onClick={closeModal}>
              Minha Conta
            </h1>
          </Link>
          <a onClick={closeModal}>
            <i className={styles.closeIcon} />
          </a>
        </div>

        <nav className={styles.options}>
          <ul>
            <li className={styles.item}>
              <NavLink
                to={"/produtos"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                produtos
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/novo-produto"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                novo produto
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/usuarios/"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                usuários
              </NavLink>
            </li>

            {login && (
              <li className={styles.item}>
                <a
                  className={styles.logout}
                  onClick={() => {
                    logout();
                    closeModal();
                  }}
                >
                  <span>sair</span>
                  <i className={styles.logoutIcon} />
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuModalAdmin;
