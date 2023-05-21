import { Link, NavLink } from 'react-router-dom';

import logoSVG from '../../assets/logo/FOZOCO.svg';
import loginSVG from '../../assets/header/login.svg';
import bagSVG from '../../assets/header/shopping_bag.svg';

import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container`}>
                <div className={styles.headerSupra}>
                    <form className={`${styles.searchBarContainer}`}>
                        <input type="text" className={`${styles.searchBar}`} placeholder='busca' />
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
                    <NavLink to={'/products/feminino'} className={styles.linkMenu}>
                        feminino
                    </NavLink>

                    <NavLink to={'/products/masculino'} className={styles.linkMenu}>
                        masculino
                    </NavLink>

                    <NavLink to={'/products/grau'} className={styles.linkMenu}>
                        óculos de grau
                    </NavLink>

                    <NavLink to={'/products/sol'} className={styles.linkMenu}>
                        óculos de sol
                    </NavLink>
                    
                    <NavLink to={'/products/antiluz'} className={styles.linkMenu}>
                        óculos anti luz azul
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
