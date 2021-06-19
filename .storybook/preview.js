
import ResetCSS from '../src/components/shared/ResetCSS'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}


export const decorators = [
  Story => (
    <>
      <ResetCSS />
      <Story />
    </>
  ),
];
