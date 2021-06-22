import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './Modal'

const Conatiner = styled.div`
  padding: 62px 56px 56px 56px;
  min-width: 580px;
`

const Header = styled.div`
  text-align: center;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #1d1d1d;
  white-space: pre-wrap;
  line-height: 40px;
`
const SubTitle = styled.div`
  font-size: 14px;
  color: #1d1d1d;
`

const ButtonContainer = styled.div`
  margin-top: 60px;
  overflow: hidden;
`

const Button = styled.div<{ checked: boolean }>`
  width: calc(25% - 10px);
  float: left;
  height: 62.55px;
  margin: 0 5px 20px;
  background: #ebebeb;
  box-shadow: 5px 5px 10px rgba(220, 220, 220, 0.25);
  border-radius: 15px;
  text-align: center;
  line-height: 62.55px;
  font-size: 16px;
  font-weight: bold;

  ${({ checked }) =>
    checked &&
    `
    background: #434343;
    color: #fff;
  `}
`

const SubmitButton = styled.div`
  width: 400px;
  background: #434343;
  box-shadow: 10px 10px 30px rgba(177, 177, 177, 0.27);
  border-radius: 17px;
  margin: 70px auto auto;
  line-height: 65px;
  color: #fff;
  font-size: 17px;
  text-align: center;
  height: 65px;
`

interface ButtonModalProps {
  title: string
  subTitle?: string
  isShow: boolean
  onClose: (e: React.SyntheticEvent) => void
  buttons: {
    id: string
    name: string
  }[]
  initialCheckedIds?: string[]
  submitLabel?: string
  onSubmit: (e: React.SyntheticEvent, checkedIds: string[]) => void
}

function ButtonModal({
  title,
  subTitle,
  isShow,
  onClose,
  buttons,
  initialCheckedIds = [],
  submitLabel = '선택완료',
  onSubmit,
}: ButtonModalProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>(initialCheckedIds)

  function handleCheckedIds(_, checkedId: string) {
    if (checkedIds.includes(checkedId)) {
      setCheckedIds(checkedIds.filter((id) => id !== checkedId))
      return
    }

    if (checkedIds.length < 2) {
      setCheckedIds([...checkedIds, checkedId])
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    onSubmit(e, checkedIds)
  }

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <Conatiner>
        <Header>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Header>
        <ButtonContainer>
          {buttons.map(({ id, name }) => (
            <Button
              key={id}
              checked={checkedIds.includes(id)}
              onClick={(e) => handleCheckedIds(e, id)}
            >
              {name}
            </Button>
          ))}
        </ButtonContainer>
        <SubmitButton onClick={handleSubmit}>{submitLabel}</SubmitButton>
      </Conatiner>
    </Modal>
  )
}

export default ButtonModal
