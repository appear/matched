import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.31);
  overflow: hidden;
`

interface DimmedProps {
  onClick?: (e: React.SyntheticEvent) => void
}

function Dimmed({ children, onClick }: React.PropsWithChildren<DimmedProps>) {
  return <Container onClick={onClick}>{children}</Container>
}

export default Dimmed
