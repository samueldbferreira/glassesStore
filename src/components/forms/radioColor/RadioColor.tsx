import styles from './RadioColor.module.css';


interface RadioColorProps {
    nomeCor: string;
    cor: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}


function handleClick (nomeCor: string, setColor: React.Dispatch<React.SetStateAction<string>>) {
    setColor(nomeCor)
}

const RadioColor = ({ nomeCor, cor, setColor }: RadioColorProps) => {
    return (
        <div 
            className={styles.radio}
            onClick={(e: React.MouseEvent) => { 
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

export default RadioColor;
