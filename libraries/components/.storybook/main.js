module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
};
