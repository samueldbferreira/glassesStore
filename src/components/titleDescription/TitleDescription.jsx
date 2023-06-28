import styles from "./TitleDescription.module.css";

const TitleDescription = ({ title, description }) => {
  return (
    <div className={styles.intro}>
      <span className={styles.containerTitle}>
        <h1>{title}</h1>
      </span>

      <span className={styles.containerText}>
        <p>{description}</p>
      </span>
    </div>
  );
};

export default TitleDescription;
