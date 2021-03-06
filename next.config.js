const { APP_PROFILES = 'real', KAKAO_SDK_KEY } = process.env

const publicRuntimeConfig = {
  APP_PROFILES,
  KAKAO_SDK_KEY,
}

module.exports = {
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  webpack5: true,
  generateEtags: true,
  webpack: ({ entry: originalEntry, plugins, ...restConfig }, { webpack }) => ({
    ...restConfig,
    entry: async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./src/utils/polyfills.js')
      ) {
        entries['main.js'].unshift('./src/utils/polyfills.js')
      }

      return entries
    },
    plugins: [...plugins, new webpack.IgnorePlugin(/\/__tests__\//)],
  }),
}
