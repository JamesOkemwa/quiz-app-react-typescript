import React from 'react'

type QuestionProps = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  questionNr: number
  totalQuestions: number
}

const QuestionCard = ({question, answers, callback, userAnswer, questionNr, totalQuestions}: QuestionProps) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question}}/>
      <div>
        {answers.map((answer, i) => (
          <div key={i}>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard