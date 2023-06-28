import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import styles from "./MenuModal.module.css";

const MenuModal = ({ setMenuModal }) => {
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
          {login ? (
            <Link to="/account">
              <h1 className={styles.title} onClick={closeModal}>
                Conta
              </h1>
            </Link>
          ) : (
            <Link to="/login">
              <h1 className={styles.title} onClick={closeModal}>
                Entrar
              </h1>
            </Link>
          )}

          <a onClick={closeModal}>
            <i className={styles.closeIcon} />
          </a>
        </div>

        <nav className={styles.options}>
          <ul>
            <li className={styles.item}>
              <NavLink
                to={"/"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                início
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/feminino"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                feminino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/masculino"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                masculino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/oculos-de-grau"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                óculos de grau
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/oculos-de-sol"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                óculos de sol
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={"/oculos-anti-luz-azul"}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                óculos anti luz azul
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

export default MenuModal;
