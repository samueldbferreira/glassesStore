import styles from "./UserCard.module.css";

const userCard = ({ data }) => {
  return (
    <ul className={styles.info}>
      <li className={styles.infoItem}>
        <i className={styles.nameIcon} />
        <p>{`${data.firstName} ${data.lastName}`}</p>
      </li>

      <li className={styles.infoItem}>
        <i className={styles.mailIcon} />
        <p>{data.email}</p>
      </li>

      <li className={styles.infoItem}>
        <i className={styles.idIcon} />
        <p>{data.id}</p>
      </li>
    </ul>
  );
};

export default userCard;
