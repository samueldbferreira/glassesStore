import styles from './TitleSearch.module.css';

const TitleSearch = ({ title, label, id, type, value, setValue, classname }) => {
    return (
        <div className={`${styles.titleSearch} ${classname}`}>
            <h1 className={styles.title}>{title}</h1>
    
            <form className={`${styles.searchBarContainer}`}>
                <input 
                  type={type}
                  className={`${styles.searchBar}`}
                  id={id}
                  value={value}
                  onChange={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                  placeholder={label}
                />
    
                <button 
                  type="submit"
                  className={`${styles.searchBarIcon}`}
                >
                </button>
            </form>
        </div>
      )
}

export default TitleSearch
