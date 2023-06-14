import styles from './SmallButton.module.css';

const SmallButton = ({ value, onClick }) => {
    return (
        <button 
            className={`
                ${styles.button}
            `}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default SmallButton;
