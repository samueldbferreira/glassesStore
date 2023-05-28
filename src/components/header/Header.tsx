import { Link, NavLink } from 'react-router-dom';

import logoSVG from '../../assets/logo/FOZOCO.svg';
import loginSVG from '../../assets/header/login.svg';
import bagSVG from '../../assets/header/shopping_bag.svg';
import accountSVG from '../../assets/header/account_circle_white.svg'

import adminStyles from './AdminHeader.module.css';
import styles from './Header.module.css';


interface HeaderProps {
    admin?: boolean;
}

const Header = ({ admin }: HeaderProps) => {
    if (admin) {
        return (
            <header className={adminStyles.header}>
                <div className={adminStyles.headerSupra}>
                    <Link to="/admin">
                        <img src={logoSVG} alt="Logo da Loja" />
                    </Link>
                </div>
                
                <div className={adminStyles.headerInfra}>
                    <nav className={`container ${adminStyles.infraNav}`}>
                        <span className={adminStyles.infraList}>
                            <NavLink 
                                to={'/admin/'} className={adminStyles.linkMenu}
                            >
                                produtos
                            </NavLink>

                            <NavLink 
                                to={'/admin/novo'} className={adminStyles.linkMenu}
                            >
                                novo produto
                            </NavLink>

                            <NavLink 
                                to={'/admin/usuarios/'} className={adminStyles.linkMenu}
                            >
                                usuários
                            </NavLink>
                        </span>

                        <span className={adminStyles.account}>
                            <Link to="/login" className={styles.linkMenu}>
                                entrar
                            </Link>
                            <img src={accountSVG} />
                        </span>
                    </nav>
                </div>
            </header>
        );
    } else {
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
    
}

export default Header;
