import styles from './Quantity.module.css';


interface QuantityProps {
    max: number;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}


function increment (max: number, quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>) {
    if (quantity < max) {
        setQuantity(quantity + 1);
    }
}

function decrement (quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>) {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
}

const Quantity = ({ max, quantity, setQuantity }: QuantityProps) => {
    return (
        <div className={styles.container}>
            <button 
                className={`${styles.add} ${styles.box}`}
                onClick={(e: React.MouseEvent) => {
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
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    decrement(quantity, setQuantity)
                }}
            >
            </button>
        </div>
    );
}

export default Quantity;
