// const Question = ({ question, answers, userAnswer, onAnswerSelect }) => {
//   return (
//     <div>
//       <h3>{question}</h3>
//       <ul>
//         {answers.map((answer, index) => (
//           <li key={index}>
//             <label>
//               <input
//                 type="radio"
//                 name={`question_${question.id}`}
//                 value={answer}
//                 onChange={() => onAnswerSelect(answer)}
//                 checked={userAnswer === answer}
//                 disabled={userAnswer !== ""}
//               />
//               {answer}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Question;
const Question = ({ question, answers, userAnswer, onAnswerSelect }) => {
  return (
    <div className="question-container">
      <h3>{question}</h3>
      <form>
        {answers.map((answer, index) => (
          <div key={index} className="question">
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
          </div>
        ))}
      </form>
    </div>
  );
};

export default Question;
