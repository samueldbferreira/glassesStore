import { Link } from 'react-router-dom';

import logoSVG from '../../assets/logo/FOZOCO-W.svg';
import faceSVG from '../../assets/social/facebook-w.svg';
import twiSVG from '../../assets/social/twitter-w.svg';
import instaSVG from '../../assets/social/instagram-w.svg';

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`container ${styles.footerGrid}`}>
                <img src={logoSVG} alt="Logo Fozoco" />

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
                        <li>
                            <img src={faceSVG} alt="Logo Facebook" />
                        </li>
                        <li>
                            <img src={twiSVG} alt="Logo Twitter" />
                        </li>
                        <li>
                            <img src={instaSVG} alt="Logo Instagram" />
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>INFORMAÇÕES</h3>
                    <ul>
                        <li><a href="">minha conta</a></li>
                        <li>
                            <Link to="">
                                perguntas frequentes
                            </Link>
                        </li>
                        <li>
                            <Link to="termos">
                                termos e condições
                            </Link>    
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>PRODUTOS</h3>
                    <ul>
                        <li>
                            <Link to={""} className={`${styles.linkMenu}`}>
                                feminino
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className={`${styles.linkMenu}`}>
                                masculino
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className={`${styles.linkMenu}`}>
                                óculos de grau
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className={`${styles.linkMenu}`}>
                                óculos de sol
                            </Link>
                        </li>
                        <li>
                            <Link to={""} className={`${styles.linkMenu}`}>
                                óculos de anti luz azul
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
