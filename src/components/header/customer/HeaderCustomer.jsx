import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import loginSVG from '../../../assets/header/login.svg';
import styles from './HeaderCustomer.module.css';
import MenuModal from '../menuModal/MenuModal';
import ModalCart from '../../cart/modalCart/ModalCart';


const HeaderCustomer = () => {
	const navigate = useNavigate();
	
	const [mobile, setMobile] = React.useState(false);
	const [menuModal, setMenuModal] = React.useState(false);
	const [cartModal, setCartModal] = React.useState(false);

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
        <div className={`container`}> 
            <div className={styles.headerSupra}>
                {
                    mobile
                    ?
                    <a
                        onClick={() => {
                            setMenuModal(true);
                        }}
                    >
                        <i className={styles.menuIcon} />
                    </a>
                    :
                    <form className={`${styles.searchBarContainer}`}>
                        <input
                            type="text"
                            className={`${styles.searchBar}`}
                            placeholder='busca'
                        />

                        <button type="submit" className={`${styles.searchBarIcon}`}></button>
                    </form>
                }

                <Link to='/' className={styles.logo} />

                <nav className={styles.supraList}>
                    {
                        !mobile
                        &&
                        <a
                            onClick={() => {
                                navigate('/login')
                            }}
                            className={styles.login}
                        >
                            <p className={styles.supraLabel}>entrar</p>
                            <img src={loginSVG} />
                        </a>
                    }
                    <a
                        onClick={() => {
                            setCartModal(true);
                        }}
                    >
                        {
                            !mobile
                            &&
                            <p className={styles.supraLabel}>sacola</p>
                        }
                        <i className={styles.bagIcon} />
                    </a>                
                </nav>
            </div>
        </div>

        <div className={`${styles.headerInfra}`}>
            {
                mobile
                ?
                <form className={`${styles.searchBarContainer}`}>
                        <input
                            type="text"
                            className={`${styles.searchBar}`}
                            placeholder='busca'
                        />

                        <button type="submit" className={`${styles.searchBarIcon}`}></button>
                    </form>
                :
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
            }
        </div>

        {cartModal && <ModalCart setCartModal={setCartModal} />}

        {menuModal && <MenuModal setMenuModal={setMenuModal} />}
    </header>
  );
}

export default HeaderCustomer;
