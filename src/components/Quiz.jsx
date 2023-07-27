import React, { useState, useEffect, useRef } from "react";
import questions from "../data/questions";
import Question from "./Question";
import axios from 'axios'
import music from "/music.mp3"
import soundIcon from '/sound.png'



const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [playing, setPlaying] = useState(false);
  
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

  // const backgroundMusic = new Audio(music);
  const audioRef = useRef(new Audio(music));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };


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
    document.getElementById("quizApp").scrollIntoView();
  };

  const handleRestartQuiz = () => {
    setUserAnswers({});
    setCompleted(false);
    document.getElementById("quizApp").scrollIntoView();
  };

  const renderReview = () => {
    const score = calculateScore();
    return (
      <>
      <div className="results-container">
        <h2>Quiz Completed!</h2>
        <h3>
          Your Score: {score} out of {questions.length}
        </h3>
        <h3>Review Answers:</h3>
        {questions.map((question) => (
          <div key={question.id}>
            <hr />
            <p className="question-name">
              <strong>Question:</strong> {question.question}
            </p>
            <p className="your-answer" style={{color: userAnswers[question.id] === question.correctAnswer ? '#90d101' : '#fa1357'}}>
              <strong>Your Answer:</strong> {userAnswers[question.id]}
            </p>
            <p className="correct-answer">
              <strong>Correct Answer:</strong> {question.correctAnswer}
            </p>
          </div>
        ))}
        <hr />
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    </>
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
    <div className="quiz-app-container">
      <button id="sound-button" onClick={playing ? pause : play}><img src={soundIcon}></img></button>
      <h1 id="quizApp">Quiz App</h1>
      {!completed ? (
        <div className="quiz-app">
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
