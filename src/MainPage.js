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

const MainPage = ({ startNewGame }) => {
  return (
    <Container>
      <Logo />
      <Button onClick={() => startNewGame()}>เริ่มเกม</Button>
    </Container>
  )
}

export default MainPage
