import styled from 'styled-components'

import Banner from '$components/home/Banner'
import RecommendUsersCarousel from '$components/home/RecommendUsersCarousel'
import Project from '$components/home/Project'

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
        <Project />
        <Project />
      </Container>
    </div>
  )
}

export default Index
