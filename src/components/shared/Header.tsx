import styled from 'styled-components'

import SigninButton from '$components/home/SigninButton'

const Container = styled.div`
  background-color: #000000;
  height: 50px;
`

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const LeftContainer = styled.div``
const RightContainer = styled.div``

const Text = styled.span<{ bold?: boolean; newBadge?: boolean }>`
  font-size: 14px;
  color: #ffffff;
  position: relative;

  &:not(:last-child) {
    &:after {
      height: 1px;
      width: 1px;
      content: '';
      border-right: 1px solid white;
      margin: 0 24px;
    }
  }

  ${({ bold }) => bold && `font-weight: bold;`}

  ${({ newBadge }) =>
    newBadge &&
    `
      &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        left: -14px;
        top: -4px;
        background: #0057FF;
        border-radius: 4px;
      }
  `}
`

function Header() {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <Text>카테고리</Text>
          <Text>카테고리</Text>
        </LeftContainer>
        <RightContainer>
          <Text bold newBadge>
            프로젝트 개설
          </Text>
          <SigninButton />
        </RightContainer>
      </InnerContainer>
    </Container>
  )
}

export default Header
