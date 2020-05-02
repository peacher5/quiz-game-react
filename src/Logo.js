import React from 'react'
import styled from 'styled-components'

import reactLogoImage from './img/logo.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-right: 20px;
`

const ReactLogo = styled.div`
  width: 100px;
  height: 100px;
  background: url(${reactLogoImage}) no-repeat;
  background-size: 100px 100px;
`

const Logo = () => {
  return (
    <Container>
      <ReactLogo />
      Quiz Game
    </Container>
  )
}

export default Logo
