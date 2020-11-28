import React from 'react'
import styled from 'styled-components'

import { Logo } from '../components/Logo'
import { Button } from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 40px;
`

const LoadingButton = styled.div`
  padding: 10px 60px;
  background: #05ddff;
  color: #005e7a;
  font-weight: 500;
  margin-top: 100px;
  filter: grayscale();
`

export const MainPage = ({ startNewGame, loading }) => {
  return (
    <Container>
      <Logo />
      {loading ? (
        <LoadingButton>กำลังโหลด...</LoadingButton>
      ) : (
        <Button onClick={() => startNewGame()}>เริ่มเกม</Button>
      )}
    </Container>
  )
}
