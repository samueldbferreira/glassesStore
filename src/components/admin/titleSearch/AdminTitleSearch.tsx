import styles from './AdminTitleSearch.module.css';


interface AdminTitleSearchProps {
    title: string;
    label: string;
    id: string;
    type: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    classname?: string;
}

const AdminTitleSearch = ({ title, label, id, type, value, setValue, classname }: AdminTitleSearchProps) => {
  return (
    <div className={`${styles.titleSearch} ${classname}`}>
        <h1 className={styles.title}>{title}</h1>

        <form className={`${styles.searchBarContainer}`}>
            <input 
              type={type}
              className={`${styles.searchBar}`}
              id={id}
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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

export default AdminTitleSearch
