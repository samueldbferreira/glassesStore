import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './HeaderAdmin.module.css';
import MenuModalAdmin from '../menuModalAdmin/MenuModalAdmin';

const HeaderAdmin = () => {
	const [mobile, setMobile] = React.useState(false);
	const [menuModal, setMenuModal] = React.useState(false);

  React.useEffect(() => {
    function checkResize () {
      setMobile(window.matchMedia('(max-width: 840px)').matches);
    }

    window.addEventListener('resize', checkResize);

    checkResize();

    return (() => {
        window.removeEventListener('resize', checkResize);
    });
    
  }, [mobile]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerSupra}`}>
        {
          mobile
          &&
          <a
            onClick={() => {
                setMenuModal(true);
            }}
          >
            <i className={styles.menuIcon} />
          </a>
        }

        <Link to="/admin">
          <i className={styles.logo} />
        </Link>

        {
          mobile
          &&
          <a>
            <i className={styles.accountIcon} />
          </a>
        }
      </div>
      
      {
        !mobile
        &&
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
              <i className={styles.accountIcon} />
            </span>
          </nav>
        </div>
      }

      {menuModal && <MenuModalAdmin setMenuModal={setMenuModal} />}
    </header>
  )
}

export default HeaderAdmin;
