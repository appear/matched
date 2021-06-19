import styled from 'styled-components'

const Container = styled.div`
  width: calc(25% - 20px);
  float: left;
  margin: 0 10px 20px;
`

const ImageContainer = styled.div`
  font-size: 0px;
  position: relative;
  width: 100%;
  background-color: rgb(245, 245, 245);
  float: none;
  border-radius: 6px;
  padding: 77.45% 0px 0px;
  overflow: hidden;
  margin-bottom: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  z-index: 0;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 6px;
`
const Recurit = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`
const Location = styled.div`
  font-size: 14px;
  color: #9d9d9d;
`

interface ItemCardProps {
  item: {
    title: string
    imageUrl: string
    recurit: string[]
    location: string
  }
}

function ItemCard({ item }: ItemCardProps) {
  const { title, imageUrl, recurit, location } = item

  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <Recurit>{recurit.join(' | ')}</Recurit>
      <Location>{location}</Location>
    </Container>
  )
}

export default ItemCard
