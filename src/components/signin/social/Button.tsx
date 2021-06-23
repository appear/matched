import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ backgroundColor: string; color: string }>`
  width: 314px;
  height: 55px;
  box-shadow: 5px 5px 40px rgba(177, 177, 177, 0.27);
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 7px;
  }

  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  ${({ color }) => `color: ${color};`}
`

const Icon = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 21px;
`
const Label = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`

interface SocialButtonProps {
  provider: 'kakao' | 'naver' | 'google'
  label: string
  onClick: (e: React.SyntheticEvent) => void
}

const BG_COLOR_MAPPER = {
  google: '#ffffff',
  naver: '#00C300',
  kakao: '#F9E000',
}

function SocialButton({ provider, label, onClick }: SocialButtonProps) {
  return (
    <Container
      onClick={onClick}
      backgroundColor={BG_COLOR_MAPPER[provider]}
      color={provider === 'google' ? '#1D1D1D' : '#fff'}
    >
      <Icon src={`/images/${provider}_signin_logo.png`} />
      <Label>{label}</Label>
    </Container>
  )
}

export default SocialButton
