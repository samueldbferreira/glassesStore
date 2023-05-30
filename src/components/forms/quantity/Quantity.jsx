import styles from './Quantity.module.css';

function increment (max, quantity, setQuantity) {
    if (quantity < max) {
        setQuantity(quantity + 1);
    }
}

function decrement (quantity, setQuantity) {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
}

const Quantity = ({ max, quantity, setQuantity }) => {
    return (
        <div className={styles.container}>
            <button 
                className={`${styles.add} ${styles.box}`}
                onClick={(e) => {
                    e.preventDefault();
                    increment(max, quantity, setQuantity)
                }}
            >
            </button>

            <input 
                type="text"
                className={`${styles.input} ${styles.box}`}
                value={quantity}
                //ainda não dá pra add manual
            />
            
            <button 
                className={`${styles.remove} ${styles.box}`}
                onClick={(e) => {
                    e.preventDefault();
                    decrement(quantity, setQuantity)
                }}
            >
            </button>
        </div>
    );
}

export default Quantity
