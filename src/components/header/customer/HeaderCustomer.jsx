import { Link, NavLink } from 'react-router-dom';

import logoSVG from '../../../assets/logo/logo.svg';
import loginSVG from '../../../assets/header/login.svg';
import bagSVG from '../../../assets/header/shopping_bag.svg';

import styles from './HeaderCustomer.module.css';


const HeaderCustomer = () => {
  return (
    <header className={styles.header}>
        <div className={`container`}>
            <div className={styles.headerSupra}>
                <form className={`${styles.searchBarContainer}`}>
                    <input
                        type="text"
                        className={`${styles.searchBar}`}
                        placeholder='busca'
                    />

                    <button type="submit" className={`${styles.searchBarIcon}`}></button>
                </form>

                <Link to='/' className={styles.logo}>
                    <img src={logoSVG} alt="Logo da Loja" />
                </Link>

                <nav className={styles.supraList}>
                    <span>
                        <Link to="/login" className={styles.linkMenu}>
                            entrar
                        </Link>
                        <img src={loginSVG} />
                    </span>

                    <span>
                        <Link to={""} className={`${styles.linkMenu}`}>
                            sacola
                        </Link>
                        <img src={bagSVG} />
                    </span>                
                </nav>
            </div>
        </div>

        <div className={`${styles.headerInfra}`}>
            <nav className={`container ${styles.infraList}`}>
                <NavLink 
                    to={'/produtos/feminino'}
                    className={styles.linkMenu}
                >
                    feminino
                </NavLink>

                <NavLink
                    to={'/produtos/masculino'}
                    className={styles.linkMenu}
                >
                    masculino
                </NavLink>

                <NavLink 
                    to={'/produtos/grau'}
                    className={styles.linkMenu}
                >
                    óculos de grau
                </NavLink>

                <NavLink
                    to={'/produtos/sol'}
                    className={styles.linkMenu}
                >
                    óculos de sol
                </NavLink>
                
                <NavLink
                    to={'/produtos/antiluz'}
                    className={styles.linkMenu}
                >
                    óculos anti luz azul
                </NavLink>
            </nav>
        </div>
    </header>
  );
}

export default HeaderCustomer;
