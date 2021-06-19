const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const tsConfigPath = path.resolve(__dirname, "../tsconfig.json")

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-viewport'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {

        config.resolve.plugins.push(new TsconfigPathsPlugin({
            configFile: tsConfigPath
        }))

        return config
    },
}
