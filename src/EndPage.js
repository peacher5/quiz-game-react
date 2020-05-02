import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 40px;
`

const ScoreSection = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 32px;
`

const EndPage = ({ correctCount, quizCount, startNewGame }) => {
  return (
    <Container>
      <Logo />
      <ScoreSection>
        คุณตอบได้ {correctCount} ข้อ จากทั้งหมด {quizCount} ข้อ
      </ScoreSection>
      <Button onClick={() => startNewGame()}>เริ่มเกมใหม่</Button>
    </Container>
  )
}

export default EndPage
