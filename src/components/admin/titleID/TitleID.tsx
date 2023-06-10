import styles from './TitleID.module.css';


interface TitleIdProps {
    title: string;
    id?: string;
}

const TitleID = ({ title, id }: TitleIdProps) => {
    return (
        <div className={styles.titleId}>
            <h1 className={styles.title}>{title}</h1>
            {id && <p className={styles.id}>#{id}</p>}
        </div>
    );
}

export default TitleID;
