import Modal from './Modal'

export default {
  title: 'elements/Modal',
  components: Modal,
}

export const 기본 = () => {
  return (
    <Modal isShow={true}>
      <div>HEllo</div>
    </Modal>
  )
}
