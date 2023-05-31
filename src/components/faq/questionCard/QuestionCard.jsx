import React from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ question, answer, initialState }) => {
    const [active, setActive] = React.useState(initialState);
    
    function toggleActive () {
        setActive(!active);
    }
    
    return (
        <div className={`${styles.item} ${active && styles.active}`}>
            <dt 
                className={styles.question}
                onClick={toggleActive}
            >
                <p>{question}</p>
                <span className={styles.dropIcon}></span>
            </dt>

            <dd className={styles.answer}>{answer}</dd>
        </div>
    );
}

export default QuestionCard;
