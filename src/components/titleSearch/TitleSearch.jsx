import React from "react";
import styles from "./TitleSearch.module.css";

const TitleSearch = ({ title, initial, setData, searchAttributes }) => {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (query === "") {
      setData(initial);
      return;
    }

    setData(
      initial.filter((p) => {
        return searchAttributes.some((att) => {
          const q = query.trim().toLowerCase();
          const v = p[att].toString().trim().toLowerCase();

          return v.includes(q);
        });
      })
    );
  }, [query]);

  return (
    <div className={`${styles.titleSearch}`}>
      <h1 className={styles.title}>{title}</h1>

      <form className={`${styles.searchBarContainer}`}>
        <input
          type="text"
          className={`${styles.searchBar}`}
          id="busca"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="buscar..."
        />

        <button type="submit" className={`${styles.searchBarIcon}`} />
      </form>
    </div>
  );
};

export default TitleSearch;
