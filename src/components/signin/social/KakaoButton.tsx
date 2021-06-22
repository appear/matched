import Button from './Button'

function KakaoButton() {
  function handleKakaoSignin() {}

  return (
    <Button
      provider="kakao"
      label="카카오톡으로 시작하기"
      onClick={handleKakaoSignin}
    />
  )
}

export default KakaoButton
