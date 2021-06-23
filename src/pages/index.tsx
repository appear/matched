import styled from 'styled-components'

import Banner from '$components/home/Banner'
import RecommendUsersCarousel from '$components/home/RecommendUsersCarousel'
import RecommendUsersCarousel2 from '$components/home/RecommendUsersCarousel2'
import RecommendUsersCarousel3 from '$components/home/RecommendUsersCarousel3'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  padding-bottom: 200px;
`

function Index() {
  return (
    <div>
      <Banner />
      <Container>
        <RecommendUsersCarousel />
        <RecommendUsersCarousel2 />
        <RecommendUsersCarousel3 />
      </Container>
    </div>
  )
}

export default Index
