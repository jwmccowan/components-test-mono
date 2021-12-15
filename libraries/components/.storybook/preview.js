import React from 'react';
import ThemeProvider from '../src/ThemeProvider';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ThemeProvider.themes.light}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
