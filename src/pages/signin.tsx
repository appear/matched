import styled from 'styled-components'

import GoogleButton from '$components/signin/social/GoogleButton'
import NaverButton from '$components/signin/social/NaverButton'
import KakaoButton from '$components/signin/social/KakaoButton'
import { SigninMutationResponse } from '$types/sign'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeadingTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #1d1d1d;
  margin-top: 76px;
  line-height: 49px;
`

const SubTitle = styled.div`
  font-size: 15px;
  line-height: 22px;
  color: #1d1d1d;
  margin-bottom: 14px;
`

const Logo = styled.img`
  width: 112px;
  height: 136px;
  margin-bottom: 58px;
`

const SocialButtonContainer = styled.div`
  margin-bottom: 20px;
`

const TermsContainer = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #a6a6a6;
  white-space: pre-wrap;
`

const TermsLink = styled.a`
  cursor: pointer;
  color: #a6a6a6;
  text-decoration: underline;
  text-decoration-color: #d2d0d0;
`

function SigninPage() {
  function handleCompletedSignin(response: SigninMutationResponse) {
    const { Signin } = response

    if (Signin.status === 403) {
      window.alert('중복된 이메일입니다')
      return
    }

    console.log(Signin.token)
  }

  return (
    <Container>
      <HeadingTitle>시작하기</HeadingTitle>
      <SubTitle>사이드 프로젝트의 시작은 우리와 함께해요!</SubTitle>
      <Logo src="/images/matched_signin_logo.png" />
      <SocialButtonContainer>
        <GoogleButton />
        <NaverButton />
        <KakaoButton onCompletedSignin={handleCompletedSignin} />
      </SocialButtonContainer>
      <TermsContainer>
        소셜 로그인으로 가입 시 <TermsLink>이용약관</TermsLink>,{' '}
        <TermsLink>개인정보처리방침</TermsLink>에 {`\n`} 동의함으로 처리됩니다.
      </TermsContainer>
    </Container>
  )
}

export default SigninPage
