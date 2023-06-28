import TitleDescription from "../../components/titleDescription/TitleDescription";
import styles from "./Terms.module.css";

const Terms = () => {
  return (
    <div className={styles.content}>
      <TitleDescription
        title="Termos e Condições"
        description="Leia abaixo os termos e condições da Fozoco."
      />

      <section className={styles.text}>
        <h2>1. Política de Estorno</h2>
        <p>
          1.1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusamus ipsa id cumque veritatis corrupti adipisci fugit facere
          laboriosam excepturi modi sapiente nostrum, explicabo nemo iste
          incidunt accusantium cupiditate, saepe quo?
        </p>

        <p>
          1.2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusamus ipsa id cumque veritatis corrupti adipisci fugit facere
          laboriosam excepturi modi sapiente nostrum, explicabo nemo iste
          incidunt accusantium cupiditate, saepe quo?
        </p>

        <p>
          1.3 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusamus ipsa id cumque veritatis corrupti adipisci fugit facere
          laboriosam excepturi modi sapiente nostrum, explicabo nemo iste
          incidunt accusantium cupiditate, saepe quo?
        </p>
      </section>

      <section className={styles.text}>
        <h2>2. Conta do usuário</h2>
        <p>
          2.1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusamus ipsa id cumque veritatis corrupti adipisci fugit facere
          laboriosam excepturi modi sapiente nostrum, explicabo nemo iste
          incidunt accusantium cupiditate, saepe quo?
        </p>
      </section>
    </div>
  );
};

export default Terms;
