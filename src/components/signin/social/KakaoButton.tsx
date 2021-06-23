import { useMutation } from '@apollo/client'

import useAsyncLoadKakaoSDK from '$hooks/useAsyncLoadKakaoSDK'
import { SIGNIN } from '$mutations/user'
import { SigninMutationArgs, SigninMutationResponse } from '$types/sign'

import Button from './Button'

interface KakaoButtonProps {
  onCompletedSignin: (response: SigninMutationResponse) => void
}

function KakaoButton({ onCompletedSignin }: KakaoButtonProps) {
  useAsyncLoadKakaoSDK()

  const [signin] = useMutation<SigninMutationResponse, SigninMutationArgs>(
    SIGNIN,
    {
      onCompleted: (response) => {
        onCompletedSignin(response)
      },
    },
  )

  async function handleKakaoSignin() {
    if (!window.Kakao) {
      return
    }

    window.Kakao.Auth.loginForm({
      throughTalk: true,
      persistAccessToken: true,
      success: () => {
        window.Kakao?.API.request({
          url: '/v2/user/me',
          success: async (profile) => {
            if (!profile.kakao_account.email) {
              window.alert('이메일을 필수로 선택해주세요')
              return
            }

            await signin({
              variables: {
                user: {
                  email: profile.kakao_account.email,
                  socialId: `${profile.id}`,
                  name: profile.properties.nickname || '의문의 너구리',
                  provider: 'KAKAO',
                  thumbnail: profile.properties.profile_image || '기본이미지',
                },
              },
            })
          },
          fail: (e) => {
            throw e
          },
        })
      },
      fail: (e) => {
        throw e
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
