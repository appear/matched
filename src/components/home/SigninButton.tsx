import { useState } from 'react'

import { useUserContext } from '$contexts/user'
import { User } from '$types/user'

import SigninModal from './modal/SigninModal'

function SigninButton() {
  const [isShowSigninModal, setIsShowSigninModal] = useState(false)
  const { setUser } = useUserContext()

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
    </>
  )
}

export default SigninButton
