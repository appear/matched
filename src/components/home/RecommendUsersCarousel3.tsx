import { useRef, RefObject } from 'react'
import Flicking from '@egjs/react-flicking'
import styled from 'styled-components'

import '@egjs/react-flicking/dist/flicking.css'

import RecommendUser from '$shared/RecommendUser'

const Container = styled.div`
  margin-top: 80px;
`

const CarouselFrame = styled.div`
  overflow: visible;
  width: 100%;
  position: relative;
`

const CarouselItem = styled.div`
  width: 270px;

  &:not(:last-child) {
    margin-right: 23px;
  }
`

const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

function RecommendUsersCarousel() {
  const flickingRef = useRef() as RefObject<Flicking>

  const user = {
    thumbnail:
      'https://blog.kakaocdn.net/dn/9Zzgz/btqXMdPHuT7/TmDo4FvAODAsANwORhcYwk/img.png',
    name: '짱구',
    job: '기획자',
    isLike: false,
  }

  return (
    <Container>
      <Header>
        <Title>
          멤버를 <Bold>추천</Bold>해드려요! (스크롤 타입)
        </Title>
      </Header>
      <CarouselFrame>
        <Flicking
          moveType="freeScroll"
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
