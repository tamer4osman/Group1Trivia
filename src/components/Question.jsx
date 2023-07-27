const Question = ({ question, answers, userAnswer, onAnswerSelect }) => {
  return (
    <div className="question-container">
      <h3>{question}</h3>
      <form>
      {answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question_${question.id}`}
                value={answer}
                onChange={() => onAnswerSelect(answer)}
                checked={userAnswer === answer}
                disabled={userAnswer !== ""}
              />
              {answer}
            </label>
          </li>
        ))}
      </form>
    </div>
  );
};

export default Question;
