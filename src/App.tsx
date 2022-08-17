import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10

function App() {
  const [ loading, setLoading ] = useState(false)
  const [ questions, setQuestions ] = useState<QuestionState[]>([])
  const [ number, setNumber ] = useState(0)
  const [ userAnswers, setUserAnswers ] = useState([])
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(true)

  console.log("questions", questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
      ) : null}

      { !gameOver && <p className="score">Score:</p> }
      
      { loading && <p>Loading Questions</p> }

      { !loading && !gameOver && (
        <QuestionCard 
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      <button className="next">Next Question</button>
    </div>
  );
}

export default App;
