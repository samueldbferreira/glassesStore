import { Link } from "react-router-dom";
import editSVG from '../../../assets/account/edit_square.svg';
import deleteSVG from '../../../assets/account/delete.svg';
import styles from './AddressCard.module.css';

const AddressCard = ({ data, setModalAddress, controls }) => {
  return (
    <div className={styles.address}>
        <h3 className={`${styles.titulo} mb-12`}>{data.nome}</h3>
        
        <span className={`${styles.info} mb-12`}>
            <p>{data.rua}, {data.numero}{data.complemento && `, ${data.complemento}`}</p>
            <p>{data.bairro} - {data.cidade} - {data.estado}</p>
            <p>CEP: {data.cep}</p>
            {data.complemento && <p>{data.complemento}</p>}
        </span>
        
        {
            controls
            &&
            <>
                <hr className={`${styles.separator} mb-12`} />
                <span className={styles.controls}>
                <a 
                    className={styles.change}
                    onClick={() => {
                        setModalAddress(data);
                    }}
                >
                    <p>Alterar</p>
                    <img src={editSVG} />
                </a>

                <Link className={styles.change} to=''>
                    <p>Excluir</p>
                    <img src={deleteSVG} />
                </Link>
            </span>
            </>
        }
    </div>
  );
}

export default AddressCard;
