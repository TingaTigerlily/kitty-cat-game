const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: 'cypress/support/e2e.js',
        baseUrl: 'https://tingatigerlily.github.io/kitty-cat-game/',
    },
    component: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
        supportFile: 'cypress/support/component.js',  // Separate support file for component tests
    },
});
