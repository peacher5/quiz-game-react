import React, { useState, useEffect } from 'react'

import { MainPage } from './pages/MainPage'
import { QuizPage } from './pages/QuizPage'
import { EndPage } from './pages/EndPage'
import { firebase } from './services/firebase'

const Page = {
  Main: 'Main',
  Quiz: 'Quiz',
  End: 'End'
}

export const App = () => {
  const [page, setPage] = useState(Page.Main)
  const [correctCount, setCorrectCount] = useState(0)
  const [quizData, setQuizData] = useState()

  const startNewGame = () => {
    setCorrectCount(0)
    setPage(Page.Quiz)
  }

  useEffect(() => {
    const fetchQuizData = async () => {
      const quizDataSnapshot = await firebase.database().ref('/quizzes').once('value')
      setQuizData(quizDataSnapshot.val())
    }

    fetchQuizData()
  }, [])

  if (page === Page.Quiz) {
    return (
      <QuizPage
        quizData={quizData}
        incrementCount={() => setCorrectCount(count => count + 1)}
        goToEndPage={() => setPage(Page.End)}
      />
    )
  }

  if (page === Page.End) {
    return (
      <EndPage
        correctCount={correctCount}
        quizCount={quizData.length}
        startNewGame={startNewGame}
      />
    )
  }

  return <MainPage startNewGame={startNewGame} loading={!quizData} />
}
