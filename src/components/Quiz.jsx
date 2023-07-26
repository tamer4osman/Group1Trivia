import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import Question from "./Question";
import axios from 'axios'

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  
  // API TEST FROM ECA 
  // --------------------
  // const [questions, setQuestions] = useState([]);
  
  // useEffect(()=>{
    //   getQuestions()
    // },[])
    
    // const getQuestions = () => {
      //   axios.get('https://wd40-trivia.onrender.com/api/questions')
      //   .then(res=>{
        //     console.log(res.data)
        //     setQuestions(res.data)
        //   })
        //   .catch(error=> console.log(error))
        // }
// --------------------

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    setCompleted(true);
  };

  const handleRestartQuiz = () => {
    setUserAnswers({});
    setCompleted(false);
  };

  const renderReview = () => {
    const score = calculateScore();
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>
          Your Score: {score} out of {questions.length}
        </p>
        <h3>Review Answers:</h3>
        {questions.map((question) => (
          <div key={question.id}>
            <p>
              <strong>Question:</strong> {question.question}
            </p>
            <p>
              <strong>Your Answer:</strong> {userAnswers[question.id]}
            </p>
            <p>
              <strong>Correct Answer:</strong> {question.correctAnswer}
            </p>
          </div>
        ))}
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  };

  const renderQuestions = () => {
    return questions.map((question) => (
      <Question
        key={question.id}
        question={question.question}
        answers={question.answers}
        userAnswer={userAnswers[question.id] || ""}
        onAnswerSelect={(selectedAnswer) =>
          handleAnswerSelect(question.id, selectedAnswer)
        }
      />
    ));
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {!completed ? (
        <div>
          {renderQuestions()}
          <button onClick={handleFinishQuiz}>Finish Quiz</button>
        </div>
      ) : (
        renderReview()
      )}
    </div>
  );
};

export default Quiz;
