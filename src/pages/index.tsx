import styled from 'styled-components'

import Banner from '$components/home/Banner'
import RecommendUsersCarousel from '$components/home/RecommendUsersCarousel'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

function Index() {
  return (
    <div>
      <Banner />
      <Container>
        <RecommendUsersCarousel />
      </Container>
    </div>
  )
}

export default Index
