import useAsyncLoadKakaoSDK from '$hooks/useAsyncLoadKakaoSDK'

import Button from './Button'

function KakaoButton() {
  useAsyncLoadKakaoSDK()

  function handleKakaoSignin() {
    if (!window.Kakao) {
      return
    }

    window.Kakao.Auth.loginForm({
      throughTalk: true,
      persistAccessToken: true,
      success: (response) => {
        window.Kakao?.API.request({
          url: '/v2/user/me',
          success: (profile) => {
            if (!profile.kakao_account.email) {
              throw new Error('CHECK EMAIL')
            }

            const result = { response, profile }
            console.log(result)
          },
          fail: (e) => {
            console.log(e)
          },
        })
      },
      fail: (e) => {
        console.log(e)
      },
    })
  }

  return (
    <Button
      provider="kakao"
      label="카카오톡으로 시작하기"
      onClick={handleKakaoSignin}
    />
  )
}

export default KakaoButton
