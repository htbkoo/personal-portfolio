module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-next'
  ],
  "core": {
    // references:
    // 1. https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrading-from-webpack-4
    // 2. https://storybook.js.org/blog/storybook-for-webpack-5/
    // 3. https://github.com/RyanClementsHax/storybook-addon-next/issues/18#issuecomment-1030857277
    // 4. https://stackoverflow.com/questions/69159274/angular-storybook-webpackoptionsvalidationerror-webpack-has-been-initialised
    "builder": "webpack5",
  },
}
