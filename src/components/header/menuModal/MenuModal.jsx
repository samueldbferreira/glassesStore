import React from 'react';
import { UserContext } from '../../UserContext';
import { Link, NavLink } from 'react-router-dom';
import styles from './MenuModal.module.css';

const MenuModal = ({ setMenuModal }) => {
  const { login } = React.useContext(UserContext);

  function closeModal () {
    setMenuModal(false);
  }
  
  function outsideClick (e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return (
    <div className={styles.modal} onClick={outsideClick}>
      <div className={styles.content}>
        <div className={styles.header}>
          {
            login
            ?
            <Link to='/account'>
              <h1 className={styles.title} onClick={closeModal}>Conta</h1>
            </Link>
            :
            <Link to='/login'>
              <h1 className={styles.title} onClick={closeModal}>Entrar</h1>
            </Link>
          }

          

          <a onClick={closeModal}>
            <i className={styles.closeIcon}/>
          </a>
        </div>

        <nav className={styles.options}>
          <ul>
            <li className={styles.item}>
              <NavLink 
                to={'/produtos/feminino'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                feminino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/masculino'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                masculino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink 
                to={'/produtos/grau'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                óculos de grau
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/sol'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                óculos de sol
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/antiluz'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                  óculos anti luz azul
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuModal;
