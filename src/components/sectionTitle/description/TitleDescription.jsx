import styles from './TitleDescription.module.css';

const Intro = ({ title, description, classname }) => {
    return (
        <div className={`${styles.intro} ${classname}`}>
            <span className={styles.containerTitle}>
                <h1>{title}</h1>
            </span>

            <span className={styles.containerText}>
                <p>{description}</p>
            </span>
        </div>
    );   
}

export default Intro;
