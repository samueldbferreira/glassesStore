import styles from './Intro.module.css';

interface IntroProps {
    title: string;
    text: string;
    classname?: string;
}

const Intro = ({ title, text, classname } : IntroProps) => {
    return (
        <div className={`${styles.intro} ${classname}`}>
            <span className={styles.containerTitle}>
                <h1>{title}</h1>
            </span>
            <span className={styles.containerText}>
                <p>{text}</p>
            </span>
        </div>
    );   
}

export default Intro;
