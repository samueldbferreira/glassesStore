import styles from './RadioColor.module.css';

const RadioColor = ({ nomeCor, cor, setColor }) => {
    if (setColor) {
        return (
            <div 
                className={styles.radio}
                onClick={(e) => {
                    setColor(nomeCor);
                    const otherDivs = e.currentTarget.parentElement.children;

                    Array.from(otherDivs).forEach((div) => {
                        div.classList.remove(styles['active']);
                    });

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

    } else {
        return (
            <div className={`${styles.radio} ${styles.simple}`}>
                <p>{nomeCor}</p>
                <div
                    className={styles.cor}
                    style={{backgroundColor: cor}}
                >    
                </div>
            </div>
        );

    }
}

export default RadioColor
