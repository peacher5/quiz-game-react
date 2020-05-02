import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const QuestionSection = styled.div`
  background: #5debff;
  color: #0a4252;
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  padding: 14px 24px;
`

const ChoiceSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Choice = styled.div`
  padding: 10px 60px;
  background: white;
  margin-top: 22px;
  width: 420px;
  border-radius: 6px;
  color: #242424;
  text-align: center;
  cursor: pointer;

  :hover {
    background: #ebfaff;
    transform: scale(1.03);
  }
`

const QuizPage = ({ quizData, incrementCount, goToEndPage }) => {
  const [questionIndex, setQuestionIndex] = useState(0)

  const { question, choices, correctIndex } = quizData[questionIndex]

  const onChoiceClick = index => {
    if (index === correctIndex) {
      incrementCount()
    }

    if (questionIndex === quizData.length - 1) {
      goToEndPage()
    } else {
      setQuestionIndex(index => index + 1)
    }
  }

  return (
    <div>
      <Logo />
      <QuestionSection>{question}</QuestionSection>
      <ChoiceSection>
        {choices.map((choice, index) => (
          <Choice key={index} onClick={() => onChoiceClick(index)}>
            {choice}
          </Choice>
        ))}
      </ChoiceSection>
    </div>
  )
}

export default QuizPage
