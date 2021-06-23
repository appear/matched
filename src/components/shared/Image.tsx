import styled from 'styled-components'

const Container = styled.div<{ height?: number }>`
  font-size: 0px;
  position: relative;
  width: 100%;
  background-color: rgb(245, 245, 245);
  float: none;
  border-radius: 6px;
  padding: 77.45% 0px 0px;
  overflow: hidden;
  margin-bottom: 10px;

  ${({ height }) =>
    height &&
    `height: ${height}px; padding: 0;
  `}
`

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  z-index: 0;
`

function Image({
  src,
  alt = '',
  height,
}: {
  src: string
  alt?: string
  height?: number
}) {
  return (
    <Container height={height}>
      <BaseImage src={src} alt={alt} />
    </Container>
  )
}

export default Image
