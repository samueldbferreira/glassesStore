import styles from './OrderCard.module.css';

const OrderCard = ({ data }) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={data.imgSrc} />
            </div>

            <div className={styles.info}>
                <h3>{data.nome}</h3>

                <span className={styles.text}>
                    <p>cor: <strong>{data.cor}</strong></p>
                    <p>quantidade: <strong>{data.quantidade}</strong></p>
                    <p>valor unitário: <strong>R$ {data.valorUnitario}</strong></p>
                </span>
            </div>
        </div> 
    );
}

export default OrderCard;
