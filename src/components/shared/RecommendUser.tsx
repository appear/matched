import styled from 'styled-components'

import RecommendHeart from '$components/assets/icons/RecommendHeart'
import RecommendEmptyHeart from '$components/assets/icons/RecommendEmptyHeart'

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px 24px;
  position: relative;
`

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`
const InfoContainer = styled.div`
  margin: 0 20px;
`
const Name = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`
const Job = styled.div`
  font-size: 14px;
  color: #999999;
`

const IconContainer = styled.div`
  position: absolute;
  right: 24px;
`

interface RecommendUserProps {
  user: {
    thumbnail: string
    name: string
    job: string
    isLike: boolean
  }
}

function RecommendUser({ user }: RecommendUserProps) {
  const { thumbnail, name, job, isLike } = user

  return (
    <Conatiner>
      <Thumbnail src={thumbnail} alt={name} />
      <InfoContainer>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </InfoContainer>
      <IconContainer>
        {isLike ? <RecommendHeart /> : <RecommendEmptyHeart />}
      </IconContainer>
    </Conatiner>
  )
}

export default RecommendUser
