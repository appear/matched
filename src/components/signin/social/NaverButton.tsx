import Button from './Button'

function NaverButton() {
  function handleNaverSignin() {}

  return (
    <Button
      provider="naver"
      label="네이버로 시작하기"
      onClick={handleNaverSignin}
    />
  )
}

export default NaverButton
