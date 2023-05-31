import AddressEdit from '../../../addresses/addressEdit/AddressEdit';
import formStyles from '../../../forms/Forms.module.css';
import styles from './ModalAddress.module.css';

const ModalAddress = ({ addressData, setModal }) => {
    function closeModal (e) {
        if (e.currentTarget === e.target) {
            setModal(null);
        }
    }

    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>
                <div className={formStyles.formTitle}>
                    <h1 className={formStyles.title}>Alterar Endereço</h1>
                </div>
                
                <div className={`${formStyles.formContent} ${styles.formContent}`}>
                    <AddressEdit 
                        values={addressData}
                    />

                    <a 
                        className={`${formStyles.redirectUnderline}`}
                        onClick={closeModal}
                    >
                        cancelar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ModalAddress;
