import React from 'react'
import styled from 'styled-components'

import Dimmed from './Dimmed'

const ModalContainer = styled.div`
  z-index: 1;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(210, 210, 210, 0.25);
  border-radius: 13px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

interface ModalProps {
  isShow: boolean
  onClose?: (e: React.SyntheticEvent) => void
}

function Modal({
  children,
  onClose,
  isShow,
}: React.PropsWithChildren<ModalProps>) {
  if (!isShow) {
    return null
  }

  return (
    <Dimmed onClick={onClose}>
      <ModalContainer>{children}</ModalContainer>
    </Dimmed>
  )
}

export default Modal
