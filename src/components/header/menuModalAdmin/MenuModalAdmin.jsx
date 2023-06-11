import { Link, NavLink } from 'react-router-dom';
import styles from './MenuModalAdmin.module.css';

const MenuModalAdmin = ({ setMenuModal }) => {
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
          <Link to='/login'>
            <h1 className={styles.title} onClick={closeModal}>Minha Conta</h1>
          </Link>
          <a onClick={closeModal}>
            <i className={styles.closeIcon}/>
          </a>
        </div>

        <nav className={styles.options}>
          <ul>
            <li className={styles.item}>
              <NavLink 
                to={'/admin/'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                produtos
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink 
                to={'/admin/novo'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                novo produto
              </NavLink>
            </li>

            <li className={styles.item}>
              <NavLink 
                to={'/admin/usuarios/'}
                className={styles.linkMenu}
                onClick={closeModal}
              >
                usuários
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MenuModalAdmin;
