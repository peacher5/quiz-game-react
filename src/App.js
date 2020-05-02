import React, { useState } from 'react'

import MainPage from './MainPage'
import QuizPage from './QuizPage'
import EndPage from './EndPage'

const quizData = [
  {
    question: '53 - 39 = ?',
    choices: ['16', '22', '12', '14'],
    correctIndex: 3
  },
  {
    question: 'อะไรไม่ใช่ผลไม้',
    choices: ['🥝', '🥔', '🍅', '🥑'],
    correctIndex: 1
  },
  {
    question: 'ค่าย DevCamp เคยจัดมาแล้วกี่ครั้ง',
    choices: ['3 ครั้ง', '5 ครั้ง', '7 ครั้ง', 'ไม่เคยจัดมาก่อน'],
    correctIndex: 2
  },
  {
    question: 'ประเทศใดไม่จัดอยู่ในพันธมิตรชานม',
    choices: ['🇵🇭', '🇹🇼', '🇭🇰', '🇹🇭'],
    correctIndex: 0
  }
]

const App = () => {
  const [page, setPage] = useState('MAIN')
  const [correctCount, setCorrectCount] = useState(0)

  const startNewGame = () => {
    setCorrectCount(0)
    setPage('QUIZ')
  }

  if (page === 'QUIZ') {
    return (
      <QuizPage
        quizData={quizData}
        incrementCount={() => setCorrectCount(count => count + 1)}
        goToEndPage={() => setPage('END')}
      />
    )
  }

  if (page === 'END') {
    return (
      <EndPage
        correctCount={correctCount}
        quizCount={quizData.length}
        startNewGame={startNewGame}
      />
    )
  }

  return <MainPage startNewGame={startNewGame} />
}

export default App
