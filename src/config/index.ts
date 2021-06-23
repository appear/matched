import getConfig from 'next/config'

interface Config {
  KAKAO_SDK_KEY: string
}

const config = getConfig()
const publicRuntimeConfig: Config = config.publicRuntimeConfig

export const { KAKAO_SDK_KEY } = publicRuntimeConfig
