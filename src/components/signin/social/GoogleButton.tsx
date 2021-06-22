import Button from './Button'

function GoogleButton() {
  function handleGoogleSignin() {}

  return (
    <Button
      provider="google"
      label="구글로 시작하기"
      onClick={handleGoogleSignin}
    />
  )
}

export default GoogleButton
