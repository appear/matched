import styled from 'styled-components'

import Image from '$shared/Image'
import EmptyHeart from '$components/assets/icons/EmptyHeart'
import Share from '$components/assets/icons/Share'
import Project from '$components/home/Project'

const temp = `"누구나 아름다워질 수 있는 기회를 제공한다!" \n\n\n\n'피부과, 거기 돈 많은 사람들만 가는거 아니야?' 라고 생각하셨죠? \n\n여신티켓은 데이터와 IT기술을 통해 메디컬 뷰티 시장을 선도하는 피부시술 정보앱 입니다.\n정보의 비대칭이 심한 피부시술 마켓에서,여신티켓은 투명한 시술 정보와 후기를 어디서든 쉽게 확인하고, 실제 결제와 예약까지 모바일에서 가능한 유일한! 서비스입니다.\n누적 50억+ 투자를 받았으며, 매년 200% 이상 안정적이고 빠르게 성장하고 있습니다.\n우리 여신티켓팀은 하루하루 새로운 도전과 혁신을 만들어내고 있습니다.\n얼마 남지 않은 자리, 어서 여신로켓에 올라타세요!\n\n\n[패스트레인 소개]\n• 패스트레인 둘러보기 : https://bit.ly/3aK1CKb\n• 여신티켓 사이트 : https://yeoshin.co.kr/\n• 여신티켓 유튜브 : https://url.kr/4kx5pr\n\n\n[관련 기사]\n• 패스트레인 손승우 대표님 인터뷰 : https://bit.ly/2JpioTR\n• 여신티켓, 드라마·광고 접수한 ‘배우 강한나’ 첫 전속 모델 발탁 : https://bit.ly/2JujVrO\n• 피부시술정보플랫폼 여신티켓, 35억 규모 시리즈 A 투자 유치 : https://bit.ly/3rwR4UF\n• 여신티켓, IMM인베서 16억 원 브릿지 투자 유치 : https://bit.ly/2WPONpO`

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  margin-top: 70px;

  padding-bottom: 200px;
`

const ContentContainer = styled.div`
  display: inline-block;
  width: calc(100% - 370px);
  vertical-align: top;
`

const SideContainer = styled.div`
  width: 370px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 10px;
  position: fixed;
  right: 220px;
  top: 120px;

  padding: 19px 35px 32px 35px;
`

const SideTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 18px;
`

const SideHearder = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 11px;
  }
`

const InfoContainer = styled.div`
  margin-bottom: 43px;
`

const Info = styled.div`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

const InfoText = styled.span<{ bold?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  color: #9d9d9d;
  margin-right: 15px;

  ${({ bold }) => bold && `color: #000000;`}
`

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  margin: 30px 0 15px 0;
`

const ContentBody = styled.div`
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
  margin-bottom: 40px;
`

const HR = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 40px;
`

const TagContainer = styled.div``

const HashTag = styled.div`
  display: inline-block;
  background: #434343;
  border-radius: 11px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  margin: 0 9px 10px 0;
`

const Recruit = styled.div`
  margin-bottom: 33px;
`

const RecruitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const RecuritLabel = styled.div`
  font-size: 14px;
  line-height: 20px;
`

const RecuritInfoContainer = styled.div`
  display: flex;
  align-items: center;
`

const RecruitCountText = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-right: 18px;
`
const RecruitButton = styled.div<{ completed?: boolean }>`
  width: 66px;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  color: #434343;
  border: 1px solid #434343;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;

  ${({ completed }) =>
    completed &&
    `
    background-color: #434343;
    color: #FFFFFF;
    `}
`
const RecruitCountBold = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #0057ff;
`

const FooterContainer = styled.div``
const Thumbnail = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 32px;
  margin-right: 18px;
`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`
const UserInfo = styled.div``
const UserName = styled.div`
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`
const UserJob = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #999999;
`

function ProjectPage() {
  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <Image height={360} src="/images/temp_bg.png" />
          <Title>[사이드 프로젝트] 중고품 경매 사이트</Title>
        </ImageContainer>
        <InfoContainer>
          <Info>
            <InfoText bold>관련 분야</InfoText>
            <InfoText>교육 · 정보</InfoText>
          </Info>
          <Info>
            <InfoText bold>진행 지역</InfoText>
            <InfoText>서울 ㅣ 강남·서초 </InfoText>
          </Info>
        </InfoContainer>
        <HR />
        <ContentBody>{temp}</ContentBody>
        <TagContainer>
          <HashTag>#매치드</HashTag>
          <HashTag>#사이드프로젝트</HashTag>
          <HashTag>#기획자모십니다</HashTag>
          <HashTag>#개발자모십니다</HashTag>
          <HashTag>#디자이너모십니다</HashTag>
        </TagContainer>
      </ContentContainer>
      <SideContainer>
        <SideHearder>
          <IconContainer>
            <Share />
          </IconContainer>
          <IconContainer>
            <EmptyHeart />
          </IconContainer>
        </SideHearder>
        <SideTitle>모집 인원</SideTitle>
        <Recruit>
          {['기획자', '디자이너', '개발자'].map((label, idx) => (
            <RecruitContainer key={label}>
              <RecuritLabel>{label}</RecuritLabel>
              <RecuritInfoContainer>
                <RecruitCountText>
                  <RecruitCountBold>{idx + 1}</RecruitCountBold>명
                </RecruitCountText>
                <RecruitButton completed={idx === 1}>지원</RecruitButton>
              </RecuritInfoContainer>
            </RecruitContainer>
          ))}
        </Recruit>
        <HR />
        <FooterContainer>
          <SideTitle>리더 정보</SideTitle>
          <UserContainer>
            <Thumbnail src="https://blog.kakaocdn.net/dn/9Zzgz/btqXMdPHuT7/TmDo4FvAODAsANwORhcYwk/img.png" />
            <UserInfo>
              <UserName>홍길순</UserName>
              <UserJob>기획자</UserJob>
            </UserInfo>
          </UserContainer>
        </FooterContainer>
      </SideContainer>
      <Project />
    </Container>
  )
}

export default ProjectPage
