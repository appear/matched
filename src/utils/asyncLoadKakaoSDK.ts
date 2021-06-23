function asyncLoadKakaoSDK() {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.onload = resolve

    document.body.append(script)
  })
}

export default asyncLoadKakaoSDK
