import { NavLink } from 'react-router-dom';
import styles from './MenuModal.module.css';

const MenuModal = ({ setMenuModal }) => {
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
          <h1 className={styles.title}>Entrar</h1>
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
              >
                feminino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/masculino'}
                className={styles.linkMenu}
              >
                masculino
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink 
                to={'/produtos/grau'}
                className={styles.linkMenu}
              >
                óculos de grau
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/sol'}
                className={styles.linkMenu}
              >
                óculos de sol
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink
                to={'/produtos/antiluz'}
                className={styles.linkMenu}
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
