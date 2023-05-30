import { Link, NavLink } from 'react-router-dom';
import logoSVG from '../../../assets/logo/logo.svg';
import accountSVG from '../../../assets/header/account_circle_white.svg'
import styles from './HeaderAdmin.module.css';


const HeaderAdmin = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerSupra}>
          <Link to="/admin">
              <img src={logoSVG} alt="Logo da Loja" />
          </Link>
      </div>
      
      <div className={styles.headerInfra}>
          <nav className={`container ${styles.infraNav}`}>
              <span className={styles.infraList}>
                  <NavLink 
                    to={'/admin/'}
                    className={styles.linkMenu}
                  >
                    produtos
                  </NavLink>

                  <NavLink 
                    to={'/admin/novo'}
                    className={styles.linkMenu}
                  >
                    novo produto
                  </NavLink>

                  <NavLink 
                    to={'/admin/usuarios/'}
                    className={styles.linkMenu}
                  >
                    usuários
                  </NavLink>
              </span>

              <span className={styles.account}>
                  <Link 
                    to="/login"
                    className={styles.linkMenu}
                  >
                    entrar
                  </Link>
                  <img src={accountSVG} />
              </span>
          </nav>
      </div>
    </header>
  )
}

export default HeaderAdmin;
