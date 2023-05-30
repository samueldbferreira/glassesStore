import styles from './RadioColor.module.css';

function handleClick (nomeCor, setColor) {
    setColor(nomeCor);
}

const RadioColor = ({ nomeCor, cor, setColor }) => {
    return (
        <div 
            className={styles.radio}
            onClick={(e) => { 
                handleClick(nomeCor, setColor);

                const otherRadios = e.currentTarget.parentElement?.children;
                if (otherRadios) {
                    console.log('arq')

                    Array.from(otherRadios).forEach((radio) => {
                        radio.classList.remove(styles['active']);
                    });
                }

                e.currentTarget.classList.toggle(styles['active']);
            }}
        >
            <p>{nomeCor}</p>
            <div
                className={styles.cor}
                style={{backgroundColor: cor}}
            >    
            </div>
        </div>
    );
}

export default RadioColor
