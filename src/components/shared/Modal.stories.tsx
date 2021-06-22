import Modal from './Modal'
import ButtonModal from './ButtonModal'

export default {
  title: 'elements/Modal',
  components: Modal,
}

export const 기본 = () => {
  return (
    <Modal isShow={true}>
      <div
        style={{
          padding: 200,
        }}
      >
        모달 테스트
      </div>
    </Modal>
  )
}

export const 버튼타입 = () => {
  const buttons = [
    {
      id: '1',
      name: '커머스',
    },
    {
      id: '2',
      name: '소셜네트워크',
    },
    {
      id: '3',
      name: '여행',
    },
    {
      id: '4',
      name: '음식',
    },
    {
      id: '5',
      name: '뷰티',
    },
  ]

  return (
    <ButtonModal
      title={`⭐ \n 어떤 것에 관심있으세요?`}
      subTitle="꼭 맞는 좋을 프로젝트를 추천해드릴게요!"
      isShow={true}
      onSubmit={() => {
        console.log('close')
      }}
      onClose={() => {}}
      buttons={buttons}
      initialCheckedIds={['1']}
    />
  )
}
