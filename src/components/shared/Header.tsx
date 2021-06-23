import styled from 'styled-components'
import Link from 'next/link'

import HeaderLogo from '$components/assets/icons/HeaderLogo'

const Container = styled.div`
  background-color: #000000;
  height: 50px;

  * a {
    color: #fff;
  }
`

const InnerContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const LeftContainer = styled.div`
  display: flex;
`

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`

const Text = styled.li<{ bold?: boolean; newBadge?: boolean; margin?: string }>`
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
  ${({ margin }) => margin && `margin: ${margin};`}

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
          <Link href="/">
            <a>
              <HeaderLogo />
            </a>
          </Link>
          <MenuContainer>
            <Text margin="0 0 0 45px">
              <Link href="/category">
                <a>카테고리</a>
              </Link>
            </Text>
            <Text>
              <Link href="/category">
                <a>카테고리</a>
              </Link>
            </Text>
          </MenuContainer>
        </LeftContainer>
        <MenuContainer>
          <Text bold newBadge>
            <Link href="/project">
              <a>프로젝트 개설</a>
            </Link>
          </Text>
          <Text>
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </Text>
        </MenuContainer>
      </InnerContainer>
    </Container>
  )
}

export default Header
