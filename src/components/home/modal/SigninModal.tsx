import Modal from '$shared/Modal'
import { User } from '$types/user'
import React from 'react'

interface SigninModalProps {
  isShow: boolean
  onClose: (e: React.SyntheticEvent) => void
  onSignup: (user: User) => void
}

const mock: User = {
  id: 'olaf',
  socialId: '1234',
  thumbnail:
    'https://blog.kakaocdn.net/dn/9Zzgz/btqXMdPHuT7/TmDo4FvAODAsANwORhcYwk/img.png',
  email: 'olaf@gmail.com',
  name: '짱구',
  about: '',
  provider: 'KAKAO',
  isCompleted: false,
  isVisible: true,
  links: [],
  interestedJobs: [],
  interestedDomains: [],
  area: null,
  createdAt: '2021-06-20',
  updatedAt: '2021-06-20',
}

function SigninModal({ isShow, onClose, onSignup }: SigninModalProps) {
  function handleClickSignup() {
    return onSignup(mock)
  }

  return (
    <Modal isShow={isShow}>
      <button onClick={handleClickSignup}>회원가입</button>
    </Modal>
  )
}

export default SigninModal
