import styled from 'styled-components'
import Link from 'next/link'

import ItemCard from '$shared/ItemCard'

const Header = styled.div`
  margin-bottom: 20px;
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

const ProjectContainer = styled.div``
const Container = styled.div`
  margin: 70px 0;
  overflow: hidden;
`

function Project() {
  const item = {
    title: '[스타트업] 스터디 매칭 서비스',
    imageUrl:
      'https://pbs.twimg.com/profile_images/968000221543202817/f92oypNr_400x400.jpg',
    recurit: ['개발자', '기획자'],
    location: '서울 강남구',
  }

  return (
    <Container>
      <Link href="/project/1">
        <a>
          <Header>
            <Title>
              멤버를 <Bold>추천</Bold>해드려요!
            </Title>
          </Header>
          <ProjectContainer>
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
          </ProjectContainer>
        </a>
      </Link>
    </Container>
  )
}

export default Project
