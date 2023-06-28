import TitleDescription from "../../components/titleDescription/TitleDescription";
import QuestionCard from "../../components/questionCard/QuestionCard";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <>
      <TitleDescription
        title={"Perguntas Frequentes"}
        description={
          "Listamos abaixo as perguntas mais frequentes e as suas respostas."
        }
      />

      <dl className={styles.questions}>
        <QuestionCard
          question={"Qual forma de pagamento vocês aceitam?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={true}
        />

        <QuestionCard
          question={"Como posso entrar em contato?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={false}
        />

        <QuestionCard
          question={"Qual a garantia que possuo?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={false}
        />

        <QuestionCard
          question={"Posso parcelar no boleto?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={false}
        />

        <QuestionCard
          question={"Posso trocar o produto?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={false}
        />

        <QuestionCard
          question={"Qual forma de pagamento vocês aceitam?"}
          answer={
            "Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro."
          }
          initialState={false}
        />
      </dl>
    </>
  );
};

export default Faq;
