import React from 'react'
import { AnswerObject } from '../App'

type QuestionProps = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
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
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard