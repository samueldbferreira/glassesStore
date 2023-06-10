import { Link } from 'react-router-dom';
import styles from './FooterCustomer.module.css'

const FooterCustomer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`container ${styles.footerGrid}`}>
                <Link to='/'>
                    <i className={styles.logo} />
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
                            <i className={styles.facebookIcon} />
                        </Link>
                        <Link to='https://www.twitter.com/'>
                            <i className={styles.twitterIcon} />
                        </Link>
                        <Link to='https://www.instagram.com/'>
                            <i className={styles.instagramIcon} />
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
                            <Link to={'/produtos/feminino'} className={`${styles.linkMenu}`}>
                                feminino
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtos/masculino'} className={`${styles.linkMenu}`}>
                                masculino
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtos/grau'} className={`${styles.linkMenu}`}>
                                óculos de grau
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtos/sol'} className={`${styles.linkMenu}`}>
                                óculos de sol
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtos/antiluz'} className={`${styles.linkMenu}`}>
                                óculos de anti luz azul
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default FooterCustomer
