import { Link } from 'react-router-dom';

import logoSVG from '../../assets/logo/FOZOCO-W.svg';
import faceSVG from '../../assets/social/facebook-w.svg';
import twiSVG from '../../assets/social/twitter-w.svg';
import instaSVG from '../../assets/social/instagram-w.svg';
import smallLogoSVG from '../../assets/logo/FOZOCO-W-SMALL.svg';

import adminStyles from './AdminFooter.module.css'
import styles from './Footer.module.css'


interface FooterProps {
    admin?: boolean;
}

const Footer = ({ admin }: FooterProps) => {
    if (admin) {
        return (
            <footer className={adminStyles.footer}>
                <Link to='/admin'>
                    <img src={smallLogoSVG} alt="Logo Fozoco" />
                </Link>
            </footer>
        );

    } else {
        return (
            <footer className={`${styles.footer}`}>
                <div className={`container ${styles.footerGrid}`}>
                    <Link to='/'>
                        <img src={logoSVG} alt="Logo Fozoco" />
                    </Link>
    
                    <div>
                        <h3>FALE CONOSCO</h3>
                        <ul>
                            <li>+55 16 8900-0000</li>
                            <li>contato@fozoco.com</li>
                        </ul>
    
                        <ul>
                            <li>37.211.060/0001-63</li>
                        </ul>
    
                        <ul className={styles.listIcons}>
                            <Link to='https://www.facebook.com/'>
                                <img src={faceSVG} alt="Logo Facebook" />
                            </Link>
                            <Link to='https://www.twitter.com/'>
                                <img src={twiSVG} alt="Logo Twitter" />
                            </Link>
                            <Link to='https://www.instagram.com/'>
                                <img src={instaSVG} alt="Logo Instagram" />
                            </Link>
                        </ul>
                    </div>
    
                    <div>
                        <h3>INFORMAÇÕES</h3>
                        <ul>
                            <li><a href="/login">minha conta</a></li>
                            <li>
                                <Link to="/perguntas">
                                    perguntas frequentes
                                </Link>
                            </li>
                            <li>
                                <Link to="/termos">
                                    termos e condições
                                </Link>    
                            </li>
                        </ul>
                    </div>
    
                    <div>
                        <h3>PRODUTOS</h3>
                        <ul>
                            <li>
                                <Link to={'/products/feminino'} className={`${styles.linkMenu}`}>
                                    feminino
                                </Link>
                            </li>
                            <li>
                                <Link to={'/products/masculino'} className={`${styles.linkMenu}`}>
                                    masculino
                                </Link>
                            </li>
                            <li>
                                <Link to={'/products/grau'} className={`${styles.linkMenu}`}>
                                    óculos de grau
                                </Link>
                            </li>
                            <li>
                                <Link to={'/products/sol'} className={`${styles.linkMenu}`}>
                                    óculos de sol
                                </Link>
                            </li>
                            <li>
                                <Link to={'/products/antiluz'} className={`${styles.linkMenu}`}>
                                    óculos de anti luz azul
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );

    }
}

export default Footer;
