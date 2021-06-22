import styled from 'styled-components'

import Image from '$shared/Image'

const Container = styled.div`
  background-color: '#f7f1f7';
`

function Banner() {
  return (
    <Container>
      <Image height={300} src="/images/temp_bg.png" />
    </Container>
  )
}

export default Banner
