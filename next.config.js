const { APP_PROFILES = 'real' } = process.env
const basePath = '/'

const publicRuntimeConfig = {
  BASE_PATH: basePath,
  PUBLIC_PATH: basePath,
  APP_PROFILES,
}

module.exports = {
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  basePath,
  future: {
    webpack5: true,
  },
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
