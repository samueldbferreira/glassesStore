import styles from './Quantity.module.css';

function increment (max, quantity, setQuantity) {
    if (quantity < max) {
        setQuantity(quantity + 1);
    }
}

function decrement (quantity, setQuantity) {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
}

const Quantity = ({ max, quantity, setQuantity, small }) => {
    return (
        <div className={`${styles.container} ${small && styles['small']}`}>
            <button 
                className={`${styles.add} ${styles.box}`}
                onClick={(e) => {
                    e.preventDefault();
                    increment(max, quantity, setQuantity)
                }}
            >
            </button>

            <div className={`${styles.input} ${styles.box}`}>
                <p>{quantity}</p>
            </div>
            
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
