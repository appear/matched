import { useRef, RefObject } from 'react'
import Flicking from '@egjs/react-flicking'
import styled from 'styled-components'

import '@egjs/react-flicking/dist/flicking.css'

import RecommendUser from '$shared/RecommendUser'
import ArrowRight from '$components/assets/icons/ArrowRight'
import ArrowLeft from '$components/assets/icons/ArrowLeft'

const Container = styled.div`
  margin-top: 80px;
`

const CarouselFrame = styled.div`
  overflow: visible;
  width: 100%;
  position: relative;
`

const CarouselItem = styled.div`
  width: 292px;

  &:not(:last-child) {
    margin-right: 43px;
  }
`

const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 54px;

  &:first-child {
    margin-right: 34px;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`

const Bold = styled.span`
  color: #0057ff;
`

const Icon = styled.div``

function RecommendUsersCarousel() {
  const flickingRef = useRef() as RefObject<Flicking>

  const user = {
    thumbnail:
      'https://blog.kakaocdn.net/dn/9Zzgz/btqXMdPHuT7/TmDo4FvAODAsANwORhcYwk/img.png',
    name: '짱구',
    job: '기획자',
    isLike: false,
  }

  async function handlePrev() {
    try {
      await flickingRef.current?.prev()
    } catch (e) {
      //
    }
  }

  async function handleNext() {
    try {
      await flickingRef.current?.next()
    } catch (e) {
      //
    }
  }

  return (
    <Container>
      <Header>
        <Title>
          멤버를 <Bold>추천</Bold>해드려요!
        </Title>
        <IconContainer>
          <Icon onClick={handlePrev}>
            <ArrowLeft />
          </Icon>
          <Icon onClick={handleNext}>
            <ArrowRight />
          </Icon>
        </IconContainer>
      </Header>
      <CarouselFrame>
        <Flicking
          ref={flickingRef}
          autoResize={true}
          horizontal={true}
          bound={true}
          hanger={0}
          anchor={0}
          gap={16}
          duration={800}
        >
          <CarouselItem>
            <RecommendUser user={user} />
          </CarouselItem>
          <CarouselItem>
            <RecommendUser user={user} />
          </CarouselItem>
          <CarouselItem>
            <RecommendUser user={user} />
          </CarouselItem>
          <CarouselItem>
            <RecommendUser user={user} />
          </CarouselItem>
        </Flicking>
      </CarouselFrame>
    </Container>
  )
}

export default RecommendUsersCarousel
