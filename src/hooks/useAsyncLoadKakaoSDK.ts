import { useEffect } from 'react'

import { KAKAO_SDK_KEY } from '$config'
import asyncLoadKakaoSDK from '$utils/asyncLoadKakaoSDK'

function useAsyncLoadKakaoSDK() {
  useEffect(() => {
    ;(async () => {
      await asyncLoadKakaoSDK()
      window.Kakao.init(KAKAO_SDK_KEY)
    })()
  }, [])
}

export default useAsyncLoadKakaoSDK
