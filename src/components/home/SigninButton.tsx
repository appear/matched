import { useState } from 'react'

import { useUserContext } from '$contexts/user'
import { User } from '$types/user'

import SigninModal from './modal/SigninModal'
import InterestedModal from './modal/InterestedModal'

function SigninButton() {
  const [isShowSigninModal, setIsShowSigninModal] = useState(false)
  const { user, setUser } = useUserContext()

  function handleShowSigninModal() {
    setIsShowSigninModal(true)
  }

  function handleCloseSigninModal() {
    setIsShowSigninModal(false)
  }

  // @TODO
  function handleSignupUser(user: User) {
    setUser(user)
  }

  return (
    <>
      <div onClick={handleShowSigninModal}>로그인</div>
      <SigninModal
        isShow={isShowSigninModal}
        onClose={handleCloseSigninModal}
        onSignup={handleSignupUser}
      />
      {user !== null && !user.isCompleted && <InterestedModal />}
    </>
  )
}

export default SigninButton
