import {INITIAL_VIEWPORTS, DEFAULT_VIEWPORT} from '@storybook/addon-viewport'
import ResetCSS from '../src/components/shared/ResetCSS'

const customViewport = {
  galaxyFold: {
      name: 'PC',
      styles: {
          height: '653px',
          width: '1280px',
      },
      type: 'pc',
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {...INITIAL_VIEWPORTS, ...customViewport},
    defaultViewport: DEFAULT_VIEWPORT,
},
}


export const decorators = [
  Story => (
    <>
      <ResetCSS />
      <Story />
    </>
  ),
];
